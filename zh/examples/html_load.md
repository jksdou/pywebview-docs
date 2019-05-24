# 加载 HTML

示例说明：通过代码加载 HTML 动态显示内容。

``` python
# -*- coding: utf-8 -*-
"""加载 HTML"""

import webview
import threading


def load_html():
    # 加载 HTML 代码
    webview.load_html("<h1>动态加载的 HTML 内容</h1>")


if __name__ == "__main__":
    t = threading.Thread(target=load_html)
    t.start()

    webview.create_window("加载 HTML 示例")
```