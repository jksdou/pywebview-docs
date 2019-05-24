# 调试模式

示例说明：要打开调试控制台，请在窗口视图内右键单击元素，选择 `Inspect`。


``` python
# -*- coding: utf-8 -*-
"""要打开调试控制台，请在窗口视图内右键单击元素，选择 `Inspect`。"""

import webview

if __name__ == "__main__":
    webview.create_window("调试模式示例",
                          "https://pywebview.github.io/hello/",
                          debug=True)
```