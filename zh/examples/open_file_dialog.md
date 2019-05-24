# 创建打开文件对话框

示例说明：当页面加载成功后，创建一个保存文件对话框。


``` python
# -*- coding: utf-8 -*-
"""创建打开文件对话框"""

import webview
import threading


def open_file_dialog():
    # 筛选
    file_types = ("Image Files (*.bmp;*.jpg;*.gif)", "All files (*.*)")

    # 输出选中的文件
    print(webview.create_file_dialog(webview.OPEN_DIALOG,
                                     allow_multiple=True,
                                     file_types=file_types))


if __name__ == "__main__":
    t = threading.Thread(target=open_file_dialog)
    t.start()

    webview.create_window("打开文件对话框示例",
                          "https://pywebview.github.io/hello/")
```