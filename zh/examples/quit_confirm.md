# 退出确认对话框

示例说明：创建一个带有退出确认对话框的窗口，当退出窗口时，会弹出确认对话框。

``` python
# -*- coding: utf-8 -*-
"""退出确认对话框"""

import webview

if __name__ == "__main__":
    webview.create_window("带退出确认对话框窗口示例",
                          "https://pywebview.github.io/hello",
                          confirm_quit=True)
```