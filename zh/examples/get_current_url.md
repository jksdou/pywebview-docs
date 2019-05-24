# 获取当前 URL

示例说明：加载页面后打印当前页面的 URL。

``` python
# -*- coding: utf-8 -*-
"""获取当前 URL"""

import webview
import threading


def get_current_url():
    # 输出当前 URL
    print(webview.get_current_url())


if __name__ == "__main__":
    t = threading.Thread(target=get_current_url)
    t.start()

    webview.create_window("获取当前 URL 示例", "https://pywebview.github.io/hello")
```