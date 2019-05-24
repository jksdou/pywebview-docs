# 本地化翻译

窗口默认使用 pywebview 内置的系统文本字符串。可用于本地化的字符串完整列表，请参阅 `webview/localization.py` 文件。可以通过变量 `webview.localization` 获取默认值。

``` python
# -*- coding: utf-8 -*-
"""修改默认文本语言"""

import webview


if __name__ == "__main__":
    strings = {
        "global.quitConfirmation": u"确定退出?",
        "global.ok": u"确定",
        "global.quit": u"退出",
        "global.cancel": u"取消",
        "global.saveFile": u"保存",
        "cocoa.menu.about": u"关于",
        "cocoa.menu.services": u"服务",
        "cocoa.menu.view": u"查看",
        "cocoa.menu.hide": u"隐藏",
        "cocoa.menu.hideOthers": u"隐藏其他",
        "cocoa.menu.showAll": u"全部显示",
        "cocoa.menu.quit": u"退出",
        "cocoa.menu.fullscreen": u"全屏 ",
        "windows.fileFilter.allFiles": u"所有文件",
        "windows.fileFilter.otherFiles": u"其他文件",
        "linux.openFile": u"打开文件",
        "linux.openFiles": u"打开文件",
        "linux.openFolder": u"打开文件夹",
    }

    webview.create_window("本地化示例",
                          "https://pywebview.github.io/hello",
                          strings=strings)
```