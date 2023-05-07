import Mock from 'mockjs'

Mock.mock('/api/user/{name}', 'get', (req) => {
  return {
    code: 0,
    data: {
      name: req.url.split('/')[2],
      age: 18
    }
  }
})