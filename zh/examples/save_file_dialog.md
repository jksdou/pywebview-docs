# 创建保存文件对话框

示例说明：当页面加载成功后，创建一个保存文件对话框。

``` python
# -*- coding: utf-8 -*-
"""创建保存文件对话框"""

import threading
import time
import webview


def save_file_dialog():
    # 5秒后再执行
    time.sleep(5)
    print(webview.create_file_dialog(webview.SAVE_DIALOG,
                                     directory="/",
                                     save_filename="test.txt"))


if __name__ == "__main__":
    t = threading.Thread(target=save_file_dialog)
    t.start()

    webview.create_window("保存文件对话框示例", "https://pywebview.github.io/hello/")
```