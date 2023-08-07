import Koa from 'koa';

const app = new Koa();

// 所有请求的处理逻辑
app.use(async (ctx) => {
  // 获取请求信息
  const { method, url, headers, body } = ctx.request;

  // 打印请求信息
  console.log(`Received ${method} request to ${url}`);
  console.log('Headers:', headers);
  console.log('Body:', body);

  // 设置响应内容
  ctx.body = 'Hello, Server!';

  // 设置响应头
  ctx.set('X-Custom-Header', 'Hello');

  // 设置响应状态码
  ctx.status = 200;
});

// 启动服务器
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
