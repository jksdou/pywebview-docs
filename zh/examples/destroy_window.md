# 关闭窗口

示例说明：五秒钟后以编程方式销毁创建的窗口

``` python
# -*- coding: utf-8 -*-
"""五秒钟后以编程方式销毁创建的窗口"""

import threading
import time
import webview

def destroy():
    # 5秒之后再执行:
    time.sleep(5)

    print("销毁窗口..")
    webview.destroy_window()
    print("已销毁!")


if __name__ == "__main__":
    t = threading.Thread(target=destroy)
    t.start()

    webview.create_window("销毁窗口示例", "https://pywebview.github.io/hello/")
    print("窗口已销毁")
```