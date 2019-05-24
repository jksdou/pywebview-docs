# 调试

如需调试 Javascript，请将 `debug` 参数设置为 `True`


``` python
import webview

webview.create_window('https://pywebview.flowrl.com', debug=True)
```

`debug` 标志启用 Windows 上的 Javascript 错误报告和右键单击上下文菜单。

这将启用 macOS，GTK 和 QT 上的 Web 检查器。要打开 Web 检查器，请右键单击页面并选择 “Inspect”。不幸的是，Windows 上的 Trident Web 引擎没有 Web 检查器，并且无法连接外部调试器。

您可以使用自己喜欢的调试器正常调试 Python 代码。

