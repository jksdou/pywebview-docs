# 使用 CEF 渲染引擎

示例说明：在 Windows 上使用 CEF（Chrome Embedded Framework）渲染引擎。

``` python
# -*- coding: utf-8 -*-
"""使用 CEF 渲染引擎示例"""

import webview


if __name__ == "__main__":
    # 设置 gui 参数值为 cef
    webview.gui = "cef"
    webview.create_window("使用 CEF 渲染引擎示例",
                          "https://pywebview.github.io/hello/")
```