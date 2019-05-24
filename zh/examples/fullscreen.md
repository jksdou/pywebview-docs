# 创建全屏窗口

示例说明：创建一个默认全屏显示的窗口。

``` python
# -*- coding: utf-8 -*-
"""创建全屏窗口示例"""

import webview


if __name__ == "__main__":
    webview.create_window("创建全屏窗口示例",
                          "https://pywebview.github.io/hello/",
                          fullscreen=True)
```