# 安全

当使用本地 Web 服务器时，必须保证 API 免受未经授权的访问。如果 API 没有得到有效保护，很有可能会遭受 [CSRF](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)) 跨域攻击。有关 API 安全方法，可以参阅 [文档](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet)。Flask 的扩展程序 [SeaSurf](https://flask-seasurf.readthedocs.io/en/latest/) 是一个不错的解决方案。

