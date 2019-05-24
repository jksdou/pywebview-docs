# 用法

使用 pywebview 的最简单方法

``` python
import webview
webview.create_window("It works, Jim!", "https://pywebview.flowrl.com")
```

其中，第二个参数 `url` 指向页面的 URL，可以为本地路径或留空。如果为空，则可以使用 `load_html` 函数直接加载 HTML 代码 。例如

``` python
def load_html():
    webview.load_html('<h1>This is dynamically loaded HTML</h1>')


if __name__ == '__main__':
    t = threading.Thread(target=load_html)
    t.start()

    webview.create_window('Load HTML example')
```

如需更改 Web 渲染引擎，请设置 `webview.gui` 的值（如 `cef`）。有关详细信息，请查阅 [Web 渲染引擎](./renderer.md) 页面。

请注意，`webview.create_window` 会占用程序主线程，因此其他代码必须在其它线程上运行。

