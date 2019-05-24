# 限制窗口最小尺寸

示例说明：设置窗口的最小尺寸。

``` python
# -*- coding: utf-8 -*-
"""限制窗口最小尺寸"""

import webview

if __name__ == "__main__":
    # 设置最小尺寸
    webview.create_window("限制窗口最小尺寸示例",
                          "https://pywebview.github.io/hello/",
                          min_size=(400, 400))
```
