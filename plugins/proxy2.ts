import bodyParser from 'body-parser';
import connect from 'connect';
import httpProxy from 'http-proxy';
import { Plugin } from 'vite';

declare module 'http' {
  interface IncomingMessage {
    body: any;
  }
}


export default function createProxyPlugin(options: httpProxy.ServerOptions): Plugin {
  const app = new connect()
  const proxy = httpProxy.createProxyServer()

  app.use(bodyParser.json())

  app.use(async (req, res, next) => {
    if (req.originalUrl.startsWith('/api')) {
      proxy.on('error', (err, req, res) => {
        res.statusCode = 500
        res.write(JSON.stringify({ code: -1 }))
        res.end()
      });

      proxy.web(req, res, { target: options.target });

    } else {
      await next()
    }
  });

  proxy.on('proxyReq', (proxyReq, req, res, options) => {
    if (req.url?.startsWith('/api')) {
      const body = req.body;
      // 加密 body
      // req.body = body;
      proxyReq.setHeader('Content-Type', 'application/json');
      proxyReq.setHeader('Content-Length', Buffer.byteLength(JSON.stringify(body)));
      proxyReq.write(JSON.stringify(body));
      proxyReq.end();
    }
  });

  proxy.on('proxyRes', (proxyRes, req, res) => {
    if (req.url?.startsWith('/api')) {
      // 修改响应头
      if (proxyRes.headers['content-type']) {
        proxyRes.headers['content-type'] = 'application/json';
      }
    }
  });


  return {
    name: 'su-proxy-plugin',
    configureServer(server) {
      server.middlewares.use(app);
    }
  }
}
