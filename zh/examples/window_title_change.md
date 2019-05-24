# 修改窗口标题

示例说明：每三秒修改一次窗口标题。

``` python
# -*- coding: utf-8 -*-
"""修改窗口标题"""

import threading
import time
import webview


def change_title():
    """每三秒执行一次"""
    for i in range(1, 10):
        time.sleep(1)
        webview.set_title(u"新标题 #{}".format(i))


if __name__ == "__main__":
    t = threading.Thread(target=change_title)
    t.start()

    webview.create_window("修改窗口标题示例",
                          "https://pywebview.github.io/hello")
```