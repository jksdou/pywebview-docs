# 创建无边框窗口

示例说明：创建无边框窗口。可以通过拖动任何点来移动窗口。

``` python
# -*- coding: utf-8 -*-
"""创建无边框窗口"""

import webview


if __name__ == "__main__":
    webview.create_window("无边框窗口示例",
                          "https://pywebview.github.io/hello/",
                          frameless=True)
```