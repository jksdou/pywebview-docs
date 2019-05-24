# 虚拟环境

如果使用 macOS 上内建的 Python 创建虚拟环境，则 pywebview 窗口会在键盘焦点和 Cmd+Tab 上出现问题。使用[此页面](https://virtualenv.pypa.io/en/stable/userguide/#using-virtualenv-without-bin-python)所述的其他 Python 版本可以避免此问题。例如，通过 [Homebrew](https://brew.sh) 安装的 Python 3 则没有此问题

``` bash
brew install python3
virtualenv pywebview_env -p python3
```
