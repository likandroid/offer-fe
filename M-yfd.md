1. 微信手机扫描二维码在pc端登录的流程
  （1）首先要保证每次弹出的二维码是唯一的。可以在程序内部，通过session_id 与与弹出的二维码做一定关联。（即微信oauth授权网址 callback 中要带有当前PC端用户session_id，且callback URL应与 PC网站同域）
  （2）. 其次当展现二维码的同时，要运行一个PC端网页异步轮询xmlhttprequest (ajax ) ，定时轮询后台判断手机微信端是否有成功登录标记。
  （3）. 当用户在微信扫码，并授权登录后，微信携带openid 信息跳转到 callback URL,此时callback URL 参数中带有PC端session_id ，根据session_id ，关联设置用户登录状态。
  （4）. PC端异步轮询请求获得已登录消息，刷新\跳转PC端网页。
2. 父子节点构建树
