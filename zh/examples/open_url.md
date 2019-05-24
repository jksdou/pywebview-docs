# 打开 URL

示例说明：基本使用方法，创建一个窗口，并显示打开的 URL

``` python
# -*- coding: utf-8 -*-
"""创建窗口并打开 URL"""

``` python
import webview

if __name__ == "__main__":
    webview.create_window("打开 URL 示例", "https://pywebview.github.io/hello/")
```