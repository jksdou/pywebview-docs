# 多窗口

示例说明：创建一个多窗口应用程序


``` python
# -*- coding: utf-8 -*-
"""创建一个多窗口应用程序"""

import threading
import time
import webview


def create_new_window():
    # 父窗口默认内容
    webview.load_html("<h1>父窗口</h1><p>父窗口默认内容</p>")

    # 创建子窗口，并存储窗口 uid
    child_window1 = webview.create_window("子窗口 #1",
                                          width=400,
                                          height=400,
                                          resizable=False)
    child_window2 = webview.create_window("子窗口 #2",
                                          width=500,
                                          height=400)

    # 5秒后同时修改窗口内容
    time.sleep(5)
    webview.load_html("<h1>父窗口修改后内容</h1>")
    webview.load_html("<h1>子窗口1添加内容</h1>", uid=child_window1)
    webview.load_html("<h1>子窗口2添加内容</h1>", uid=child_window2)


if __name__ == "__main__":
    t = threading.Thread(target=create_new_window)
    t.start()

    # 父窗口
    webview.create_window("父窗口", width=800, height=600)

```