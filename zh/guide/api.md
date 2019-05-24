
# API

## create_window

``` python
create_window(title, url='', js_api=None, width=800, height=600, resizable=True,\
              fullscreen=False, min_size=(200, 100), strings={}, confirm_quit=False, \
              background_color='#FFF', debug=False, text_select=False)
```

创建一个新的 _pywebview_ 窗口。首次调用此函数时将启动应用程序并占用程序主线程。您必须在单独的线程中执行您的程序逻辑。后续调用 `create_window` 将返回一个唯一窗口 `uid`，该窗口可用于引用 API 函数中的特定窗口。单窗口应用程序无需理会 `uid`，在函数调用中可以直接忽略它。


* `title` - 窗口标题
* `url` - 要加载的 URL。如果 URL 没有协议前缀，则将其解析为相对于应用程序入口点的路径。
* `js_api` - 将 `js_api` 类对象公开给当前 _pywebview_ 窗口的 DOM 。JavaScript 可以通过 `window.pywebview.api` 对象来对 `js_api` 进行函数调用。回调函数可以接受一个参数的基本类型或对象。对象类型在 JavaScript 和 Python 间转换。函数在单独的非安全的线程中执行。
* `width` - 窗口宽度。默认值为 `800px`。
* `height` - 窗口高度。默认值为 `600px`。
* `resizable` - 窗口大小是否可以调整。默认为 `True`。
* `fullscreen` - 窗口全屏模式， 默认值为 `False`。
* `frameless` - 窗口无边框模式，默认值为 `False`。
* `min_size` - 窗口最小尺寸，元组类型 `(width, height)`， 默认值为 `(200x100)`。
* `strings` - 窗口本地化语言配置，字符串的字典类型。默认值在 `localization.py` 中定义。
* `confirm_quit` - 窗口退出时是否显示确认对话框，默认值为`False`。
* `background_color` - 窗口的 WebView 在 loaded 之前的背景颜色。指定为十六进制颜色。默认为 `white`。
* `debug` - 启用调试模式，默认值为 `False`。详情请参阅 [调试](./debugging.md) 页面。
* `text_select` - 启用 WebView 的文档文本选择，默认值为 `False`。如需单独指定元素的文本选择，可以使用 CSS 的 [user-select](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select) 属性。


*以下函数必须在创建 _pywebview_ 窗口后才可以调用，否则将抛出异常。*

在所有情况下，`uid` 是 函数 `create_window()` 返回的目标窗口的 uid; 如果给定的窗口不存在，`uid` 则抛出异常。默认值是 `'master'`，这是第一个窗口的特殊 uid。

### 示例
* [单窗口](../examples/open_url.md)
* [多窗口](../examples/multiple_windows.md)


## create_file_dialog

``` python
create_file_dialog(dialog_type=OPEN_DIALOG, directory='', allow_multiple=False, save_filename='', file_types=())`
```

创建一个打开文件 (`webview.OPEN_DIALOG`)， 打开文件夹 (`webview.FOLDER_DIALOG`) 或保存文件(`webview.SAVE_DIALOG`) 的对话框。

返回值为所选文件的元组类型数据，如果取消则返回值为 `None`。

  * `allow_multiple=True` - 允许多选
  * `directory` - 初始目录
  * `save_filename` - 保存文件对话框的默认文件名
  * `file_types` - 打开文件对话框中支持的文件类型字符串元组，文件类型字符串必须遵循此格式 `"可选指定文件描述 (*.ext1;*.ext2...)"`，默认值为 `"All files (*.*)"`，可以在本地化字典中更改 `'All files'` 字符串值。

如果未指定 `file_types` 参数则使用默认值 `"All files (*.*)"`。可以在本地化字典中更改“所有文件”字符串。

### 示例

* [打开文件对话框](../examples/open_file_dialog.md)
* [保存文件对话框](../examples/save_file_dialog.md)


## destroy_window

``` python
destroy_window(uid='master')
```

销毁指定的 WebView 窗口。

[示例代码](../examples/destroy_window.md)

## evaluate_js

``` python
evaluate_js(script, uid='master')
```

  * `script` - JavaScript 代码

在指定的窗口中执行 JavaScript 代码。返回最后一个计算表达式。JavaScript 类型将会转换为 Python类型，例如。JS 对象 `objects` 转为 字典 `dicts`，JS 数组 `Array` 转为 列表 `List`，JS 未定义 `undefined` 转为 `None`。请注意，由于实施限制，字符串 `'null'` 将被转为 `None`。如果 JavaScript 代码中存在诸如 `\n`、`\r` 和 `\n` 等转义字符必须事先处理，否则他们会被 Python 解析。 我们推荐使用`r'strings'` 来加载 JavaScript。

## get_current_url

``` python
get_current_url(uid='master')
```

返回指定窗口中的当前 URL。如果没有加载 url，则返回 `None`。

[示例代码](../examples/get_current_url.md)

## load_css

``` python
load_css(css, uid='master')
```

将 CSS 作为字符串加载到指定的窗口中。

[示例代码](../examples/css_load.md)


## load_html

``` python
load_html(content, base_uri=base_uri(), uid='master')
```

  * `content` - HTML 代码
  * `base_uri` - 相对资源地址，设置为启动程序的目录，用于解析相对 URL 的基本 URL 设置为启动程序的目录。

将 HTML 代码加载到指定的窗口中。请注意，以此种方式加载 HTML 时，将无法使用 hash 锚点。


[示例代码](../examples/html_load.md)

## load_url

``` python
load_url(url, uid='master')
```

将新的 URL 加载到指定的 _pywebview_ 窗口中。

[示例代码](../examples/change_url.md)


## set_title

``` python
set_title(title, uid='master')
```

更改窗口的标题

[示例代码](../examples/window_title_change.md)

## toggle_fullscreen

``` python
togle_fullscree(uid='master')
```

切换窗口的全屏模式。

[示例代码](../examples/toggle_fullscreen.md)

## window_exists

``` python
window_exists(uid='master')
```

判断指定 `uid` 的 _pywebview_ 窗口是否已启动并正在执行，是则返回 `True`，否则返回 `False`。


## config

```
config.gui = 'qt' | 'gtk'
```

配置项，强制使用指定的 GUI 库， GTK 或 QT。可以通过环境变量 `PYWEBVIEW_GUI` 实现相同的效果

