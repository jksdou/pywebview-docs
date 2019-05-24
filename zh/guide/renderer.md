# Web 渲染引擎

不同平台使用的渲染方案如下：

| 平台 | 渲染器 | 提供者 | 浏览器兼容性 |
|----------|----------|---------------------------------------------------|-----------------------|
| GTK      | WebKit   | WebKit2                                           |                       |
| macOS    | WebKit   | WebKit.WKWebView (bundled with OS)                |                       |
| QT       | WebKit   | QtWebKit                                          |                       |
| Windows  | Trident  | MSHTML via .NET / System.Windows.Forms.WebBrowser | IE11 (Windows 10/8/7) |
| Windows  | CEF      | CEF Python                                        | Chrome 66             |


如需更改默认渲染器，请修改 `PYWEBVIEW_GUI` 环境变量，或者在代码中设置 `webview.gui` 的值。可取值范围包括： `cef` (Windows), `qt` (Linux, macOS) 和 `gtk` (Linux)。


假如要在 Windows 上使用 CEF

``` bash
PYWEBVIEW_GUI=cef
```

或者

``` python
import webview
webview.gui = 'cef'
```

假如要在 Linux 系统上强制使用 QT

``` bash
PYWEBVIEW_GUI=qt
```

或者

``` python
import webview
webview.gui = 'qt'
```