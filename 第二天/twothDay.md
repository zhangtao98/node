### 主要学习内容

- 请求对象 Request

- 响应对象 Response

- 在node中使用模板引擎

- 统一处理静态资源

- 服务端渲染

- 留言本


## 制作留言本注意事项
- 1.设置 / index.html
- 2.开放 public 目录中的静态资源
- 3./post post.html
- 4./pinglun
    + 1.接收表单提交数据
    + 2.存储表单提交的数据
    + 3.让表单重定向到 / ,涉及到两个API
        * statusCode
        * setHeader