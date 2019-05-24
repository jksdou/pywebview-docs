# 打包

如需打包应用程序，在 macOS 上推荐使用 [py2app](https://py2app.readthedocs.io/en/latest/)，Windows 上推荐使用 [Pyinstaller](https://www.pyinstaller.org/) 。有关 py2app 的配置文件 setup.py，请查阅[此处](https://github.com/r0x0r/pywebview/blob/master/examples/py2app_setup.py)

在 Windows 系统上对于 Pyinstaller，需要将动态链接库 [WebBrowserInterop.x86.dll](https://github.com/r0x0r/pywebview/blob/master/webview/lib/WebBrowserInterop.x86.dll) 或 [WebBrowserInterop.x64.dll](https://github.com/r0x0r/pywebview/blob/master/webview/lib/WebBrowserInterop.x64.dll) 包含在内一起打包，具体要看系统是 32 位还是 64 位 Python 构建的。与 _pywebview_ 捆绑在一起的 DLL 位于 `site-packages/webview/lib` 目录中。我们正在努力为 Pyinstaller 提供一个自动捆绑此 DLL 的钩子，但是现在你需要自行按照这个步骤来实现。

待续：添加 Linux 打包指南