const nav = require('./config/nav.js');

module.exports = {
    title: 'MineStar Studio 文档',
    description: 'MineStar Studio 文档',
    head: [
        ['link', { rel: 'icon', href: 'https://img.wenhairu.com/images/2021/05/17/att66.png' }],
        ['link', { rel: 'stylesheet', href: 'https://cdn.bootcdn.net/ajax/libs/firacode/5.2.0/fira_code.css', type: 'text/css' }]
    ],
    base: '/',
    markdown: {
        lineNumbers: true
    },
    theme: 'vdoing',
    themeConfig: {
        nav,
        sidebarDepth: 2,
        logo: '/bk.png',
        lastUpdated: '上次更新',
        sidebar: { mode: 'structuring', collapsable: false },
        updateBar: {
            showToArticle: false
        },
        category: false,
        tag: false,
        author: {
            name: 'WindLeaf'
        },
        footer: {
            createYear: 2021,
            copyrightInfo: 'MineStar Studio | Copyright © 2020'
        }
    },

    plugins: [ // 插件
        // [require('./plugins/love-me'), { // 鼠标点击爱心特效
        //   color: '#11a8cd', // 爱心颜色，默认随机色
        //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
        // }],
    
        ['thirdparty-search', { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
          thirdparty: [ // 可选，默认 []
            {
              title: '在 GitHub 中搜索',
              frontUrl: 'https://github.com/search?q=', // 搜索链接的前面部分
              behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
            },
            {
              title: '在 npm 中搜索',
              frontUrl: 'https://www.npmjs.com/search?q=',
            },
            {
              title: '在 Bing 中搜索',
              frontUrl: 'https://cn.bing.com/search?q='
            }
          ]
        }],
    
        [
          'vuepress-plugin-baidu-tongji', // 百度统计
          {
            hm: '01293bffa6c3962016c08ba685c79d78'
          }
        ],
    
        ['one-click-copy', { // 代码块复制按钮
          copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
          copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
          duration: 1000, // prompt message display time.
          showInMobile: false // whether to display on the mobile side, default: false.
        }],
        ['demo-block', { // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
          settings: {
            // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
            // cssLib: ['http://xxx'], // 在线示例中的css依赖
            // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
            jsfiddle: false, // 是否显示 jsfiddle 链接
            codepen: true, // 是否显示 codepen 链接
            horizontal: false // 是否展示为横向样式
          }
        }],
        [
          'vuepress-plugin-zooming', // 放大图片
          {
            selector:'.theme-vdoing-content img:not(.no-zoom)',
            options: {
              bgColor: 'rgba(0,0,0,0.6)'
            },
          },
        ],
        [
          '@vuepress/last-updated', // "上次更新"时间格式
          {
            transformer: (timestamp, lang) => {
              const dayjs = require('dayjs') // https://day.js.org/
              return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
            },
          }
        ]
      ],

};