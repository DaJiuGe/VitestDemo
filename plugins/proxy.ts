import bodyParser from 'body-parser';
import connect from 'connect';
import httpProxy from 'http-proxy';
import { Plugin } from 'vite';


export default function createProxyPlugin(options: httpProxy.ServerOptions): Plugin {
  const app = new connect()
  const proxy = httpProxy.createProxyServer()

  const handleRequest = async (req, res, next) => {
    if (req.originalUrl.startsWith('/api')) {
      // 过滤并处理请求体
    }
    await next();
  }

  const proxyMiddleware = async (req, res, next) => {
    if (req.originalUrl.startsWith('/api')) {
      const body = req.body
      // 加密 body
      req.body = body

      await proxy.web(req, res, options)
    }
    await next()
  }

  const handleResponse = async (req, res, next) => {
    if (req.originalUrl.startsWith('/api')) {

      proxy.on('proxyRes', (proxyRes, req, res) => {
        let responseData = '';

        proxy.on('proxyRes', (proxyRes, req, res) => {
          proxyRes.on('data', (chunk) => {
            responseData += chunk;
          });
        });

        proxy.on('proxyRes', (proxyRes, req, res) => {
          proxyRes.on('end', () => {
            // 修改响应体内容
            if (!responseData) {
              // responseData += ' Extra Text';
              responseData = JSON.stringify({ code: 0 });
            }
            res.writeHead()
            res.end(responseData);
            next()
          });
        });
      });
    } else {
      await next();
    }
  };

  app.use(bodyParser.json())
  app.use(handleRequest);
  app.use(proxyMiddleware);
  app.use(handleResponse);


  return {
    name: 'su-proxy-plugin',
    configureServer(server) {
      server.middlewares.use(app);
    }
  }
}
