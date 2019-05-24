# 切换全屏模式

示例说明：五秒钟后对应用程序窗口进行全屏模式切换

``` python
# -*- coding: utf-8 -*-
"""切换全屏模式示例"""

import threading
import time
import webview


def toggle_fullscreen():
    # 5 秒之后再执行:
    time.sleep(5)

    webview.toggle_fullscreen()


if __name__ == "__main__":
    t = threading.Thread(target=toggle_fullscreen)
    t.start()

    webview.create_window("切换全屏模式示例", "https://pywebview.github.io/hello")
```