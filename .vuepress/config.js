module.exports = {
    title: "pywebview",
    description: "Build GUI for your Python program with JavaScript, HTML, and CSS",
    themeConfig: {
        repo: "pywebview/pywebview",
        base: "/",
        docsRepo: "pywebview/documents",
        docsDir: ".",
        docsBranch: "master",
        editLinks: true,
        editLinkText: "Help us improve this page!",
        // sidebarDepth: 3,
        nav: [{
                text: "Guide",
                link: "/guide/"
            },
            {
                text: "Examples",
                link: "/examples/"
            },
            {
                text: "Contributing",
                link: "/contributing/"
            },
            {
                text: "Changelog",
                link: "https://github.com/r0x0r/pywebview/blob/master/CHANGELOG.md"
            },
        ],
        sidebar: {
            "/guide/": [{
                    title: "Basics",
                    collapsable: false,
                    children: [
                        "/guide/installation",
                        "/guide/usage"
                    ]
                },
                {
                    title: "Development",
                    collapsable: false,
                    children: [
                        "/guide/api",
                        "/guide/debugging",
                        "/guide/freezing",
                        "/guide/security",
                        "/guide/virtualenv",
                        "/guide/renderer",
                    ]
                }
            ],
            "/examples/": [
                "change_url",
                "css_load",
                "debug",
                "destroy_window",
                "frameless",
                "fullscreen",
                "get_current_url",
                "html_load",
                "js_evaluate",
                "js_api",
                "loading_animation",
                "localization",
                "min_size",
                "multiple_windows",
                "open_file_dialog",
                "open_url",
                "quit_confirm",
                "save_file_dialog",
                "toggle_fullscreen",
                "window_title_change",
                "use_cef"
            ],

            "/contributing/": [
                "development",
                "bug_reporting",
                "donating",
                "documentation"
            ]
        },
        locales: {
            "/": {
                label: "English",
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                }
            },
            "/zh/": {
                selectText: "选择语言",
                label: "简体中文",
                editLinkText: "在 GitHub 上编辑此页",
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },
                nav: [{
                        text: "指南",
                        link: "/zh/guide/"
                    },
                    {
                        text: "示例",
                        link: "/zh/examples/"
                    },
                    {
                        text: "贡献",
                        link: "/zh/contributing/"
                    },
                    {
                        text: "Changelog",
                        link: "https://github.com/r0x0r/pywebview/blob/master/CHANGELOG.md"
                    },
                ],
                sidebar: {
                    "/zh/guide/": [{
                            title: "Basics",
                            collapsable: false,
                            children: [
                                "/zh/guide/installation",
                                "/zh/guide/usage"
                            ]
                        },
                        {
                            title: "Development",
                            collapsable: false,
                            children: [
                                "/zh/guide/api",
                                "/zh/guide/debugging",
                                "/zh/guide/freezing",
                                "/zh/guide/security",
                                "/zh/guide/virtualenv",
                                "/zh/guide/renderer",
                            ]
                        }
                    ],
                    "/zh/examples/": [
                        "open_url",
                        "html_load",
                        "change_url",
                        "css_load",
                        "debug",
                        "destroy_window",
                        "frameless",
                        "fullscreen",
                        "get_current_url",
                        "js_evaluate",
                        "js_api",
                        "loading_animation",
                        "localization",
                        "min_size",
                        "multiple_windows",
                        "open_file_dialog",
                        "quit_confirm",
                        "save_file_dialog",
                        "toggle_fullscreen",
                        "window_title_change",
                        "use_cef"
                    ],
                    "/zh/contributing/": [
                        "development",
                        "bug_reporting",
                        "donating",
                        "documentation"
                    ]
                },
            }
        }
    },
    locales: {
        "/": {
            lang: "en-US"
        },
        "/zh/": {
            lang: "zh-CN",
            title: "pywebview 中文文档",
            description: "使用 JavaScript，HTML 和 CSS 为您的 Python 程序构建 GUI"
        }
    }
}