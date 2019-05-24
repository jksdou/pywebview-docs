# 安装

此命令将安装带有默认依赖项的 _pywebview_。

``` bash
pip install pywebview
```

如需指定使用 QT 渲染引擎的 _pywebview_（可在 Linux 和 macOS 上使用），使用如下命令

``` bash
pip install pywebview[qt]
```

如需指定使用 CEF 渲染引擎的 _pywebview_（在 Windows 上可用），请使用如下命令

``` bash
pip install pywebview[cef]
```

## 依赖处理

### Windows 系统

[pythonnet](https://github.com/pythonnet/pythonnet)

`pythonnet` 需要安装 .NET 4.0

[cefpython](https://github.com/cztomczak/cefpython/)

``` bash
pip install cefpython3
```

### macOS 系统

[pyobjc](https://pythonhosted.org/pyobjc/)

macOS 中默认的 Python 已经捆绑有 `PyObjC`。对于独立安装的 Python，需要单独安装 `PyObjC`。

当然也可以在 macOS 中使用 QT5

### Linux 系统

使用命令 `pip install pywebview[qt]` 可以安装 QT 依赖项
pip install pywebview[qt]应该采取QT依赖。如果它不起作用或您想使用GTK，您可以尝试这些食谱。

[PyGObject](https://pygobject.readthedocs.io/en/latest/) 是与 GTK 一起使用的。在 Ubuntu 上为安装 Python 3 和 2 依赖项

``` bash
sudo apt install python-gi python-gi-cairo python3-gi python3-gi-cairo gir1.2-gtk-3.0 gir1.2-webkit2-4.0
```

其他发行版，可以参阅 [PyGObject 文档](https://pygobject.readthedocs.io/en/latest/getting_started.html)

<br/><br/>

[PyQt5](http://pyqt.sourceforge.net/Docs/PyQt5/index.html) 是与 QT 一起使用的。`pywebview` 同时支持QtWebChannel（更新和首选）和 QtWebKit 的实现。使用 QtWebChannel，除非您的系统上没有。

在基于 Debian 的系统上安装 QtWebChannel

``` bash
sudo apt install python3-pyqt5 python3-pyqt5.qtwebengine python3-pyqt5.qtwebchannel python-pyqt5 python-pyqt5.qtwebengine python-pyqt5.qtwebchannel libqt5webkit5-dev
```

安装 QtWebKit.

``` bash
sudo apt install python3-pyqt5 python3-pyqt5.qtwebkit python-pyqt5 python-pyqt5.qtwebkit libqt5webkit5-dev
```
