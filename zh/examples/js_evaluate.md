# 执行 JS 代码

示例说明：在 Python 代码里解析并执行 JS 代码

``` python
# -*- coding: utf-8 -*-
"""执行 JS 脚本"""

import threading
import webview


def evaluate_js():
    result = webview.evaluate_js(
        r'''
        var h1 = document.createElement("h1")
        var text = document.createTextNode("Hello pywebview")
        h1.appendChild(text)
        document.body.appendChild(h1)

        document.body.style.backgroundColor = "#212121"
        document.body.style.color = "#f2f2f2"

        // Return user agent
        "User agent:\n" + navigator.userAgent;
        '''
    )

    print(result)


if __name__ == "__main__":
    t = threading.Thread(target=evaluate_js)
    t.start()

    webview.create_window("运行 JS 脚本示例")
```