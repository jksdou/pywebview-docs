# 加载 CSS

示例说明：通过动态加载 CSS 修改窗口背景颜色

``` python
# -*- coding: utf-8 -*-
"""通过动态加载 CSS 修改窗口背景颜色"""

import threading
import time
import webview


def load_css():
    # 5秒之后再执行:
    time.sleep(5)

    # 加载 CSS 代码
    webview.load_css("body { background: red !important; }")


if __name__ == "__main__":
    t = threading.Thread(target=load_css)
    t.start()

    webview.create_window("加载 CSS 示例", "https://pywebview.github.io/hello/")

```