---
title: 外置登录
date: 2021-03-28 00:20:12
permalink: /guide/authlib-injector
categories:
  - authlib-injector
tags:
  - Minecraft
---

# 外置登录

[< 返回目录](/tree)

## 前言

::: warning 注意

阅读本文章前，你所使用的 Minecraft 启动器必须要支持 `外置登录 (authlib-injector)`。

支持外置的热门启动器有 [HMCL](https://hmcl.huangyuhui.net/download "HMCL 官方网站")、[PCL2](https://afdian.net/@LTCat "请龙猫喝杯茶") 等。

<mark>**!! 本文章只适用于 [LittleSkin](https://mcskin.littleservice.cn/ "LittleSkin 官网")、[MineStar Skin Site](https://skin.minestar.top/) 等基于 `Blessing Skin` 的皮肤站与 HMCL 启动器的配置 !!**</mark>

:::

## 什么是外置登录？

**外置登录**，技术支持来自于 [authlib-injector](https://github.com/yushijinhun/authlib-injector "GitHub 项目链接") 项目。这是一个开源的项目，旨在劫持 Minecraft 游戏中对 Mojang 正版验证服务器的访问，重定向至自定义的第三方正版验证服务器。

也就是说，**外置登录** 可以用来凭空造出一个 `正版` 出来。通过 **外置登录**，你可以直接像正版玩家一样，可以直接进入有着同样 **外置登录** 的服务器进行验证并直接登录。

## 为什么选择外置登录？

**外置登录** 为我们提供了除 `正版登录`、`离线登录` 以外的全新登录方式，同时可以在不使用任何 `Mod`、`插件` 的情况下实现更换皮肤和披风。极大方便了没有 `正版` 但又想有皮肤而不想使用 `Mod`、`插件` 的玩家。

## 如何使用外置登录？

### 客户端 (玩家使用)

1. 准备一个可以正常接收邮件的邮箱 (如 QQMail，163Mail，GMail 等)；
2. 进入 [LittleSkin 官网](https://mcskin.littleservice.cn/ "LittleSkin 官网")、[MineStar Skin Site](https://skin.minestar.top/) 等之类的你想要注册的皮肤站；
3. 点击 **`现在注册`** 按钮，填入你的信息 `电子邮件`、`密码`，在 `昵称` 一栏填入你的游戏名，点击 **`注册`** 按钮；
4. 查看邮箱邮件箱，找到 `LittleSkin <no-reply@littlesk.in>` 发送来的邮件，打开邮件内的链接；
5. 返回仪表盘，在左侧找到 **`角色管理`** 并点击。点击 **`＋添加新角色`** 蓝色按钮，输入你的游戏名并点击 **`确定`** 按钮；

---

6. 设置皮肤或披风：

- 自定义皮肤或披风：返回仪表盘，在左侧找到 **`我的衣柜`** 并点击，点击 **`上传材质`**，填写完毕即可点击 **`确认上传`** 按钮。点击 **`立即使用`** 按钮，选择角色；

- 或者，在 `皮肤库` 中寻找你喜欢的皮肤或披风：返回仪表盘，在左侧找到 **`皮肤库`** 并点击。在新弹出的页面上寻找你喜欢的皮肤并点击，点击 **`添加至衣柜`** 按钮，点击 **`确认`** 按钮，点击 **`立即使用`** 按钮，选择角色；

---

::: tip 提示

如果你是第一次使用 `HMCL`，可能会弹出 `新建账户` 的窗口，点击 `取消` 按钮即可。

:::

7. 返回皮肤站的 `仪表盘`，打开 `HMCL`；
8. 点击 HMCL 左侧的添加游戏账户，点击右下角的加号。接着，使用鼠标拖动 LittleSkin 仪表盘的 **`将此按钮拖动至启动器`** 按钮到 HMCL 的界面上即可。如果不出意外的话，HMCL 会弹出一个 `添加认证服务器` 的窗口，点击 `完成`；

::: note 没有弹出 `添加认证服务器` 的窗口怎么办？

你可能使用的旧版 `HMCL`，你可以这样添加认证服务器：

1. 点击左上角的添加游戏账户，点击右下角的加号。登录方式选择 `外置登录 (authlib-injector)`，在认证服务器那里点击右边的加号，然后将外置服务器 API 地址复制进去：[外置服务器的 API 地址在哪里看？](#外置服务器的-api-地址在哪里看)；
2. 点击 `下一步`，`完成`；
3. 接下来与下面的内容一致，请从第 9 步继续阅读。

:::

9. 登录方式选择 `外置登录 (authlib-injector)`，认证服务器选择皮肤站的名字（如 `LittleSkin`、`MineStar Skin` 等；即你刚才添加的皮肤站名字），**用户名填写你注册皮肤站时的邮箱**，**密码同样**；
10. 在 HMCL 中确保账户当前选择的是刚才添加的外置账户，返回主页，启动游戏即可。

### 服务端 (服主使用)

::: warning 注意

~~`Geyser` 服务端目前并不支持 `外置登录 (authlib-injector)`，请 `Geyser` 服主使用正版登录或离线登录！~~

目前 `Geyser` 服务端支持 `外置登录 (authlib-injector)`，详见 [https://www.bilibili.com/video/BV1rK411c7rN](https://www.bilibili.com/video/BV1rK411c7rN)。

:::

1. 准备一个服务端，如 `Paper`、`Spigot` 等均可；
2. 从官网获得 [authlib-injector.jar](https://authlib-injector.yushi.moe/) 或在 [GitHub](https://github.com/yushijinhun/authlib-injector/releases) 下载；如果你认为下载速度太慢，可以使用 **BMCLAPI** 提供的镜像服务下载：[BMCLAPI apiDoc](https://bmclapidoc.bangbang93.com/#api-Mirrors-Mirrors_authlib_injector) <Badge text="API 文档"/>。
3. 在服务端的 **启动命令** 的 `-jar` 前添加 `-javaagent:{A}={B}` 参数。

其中，将 `{A}` 改为你刚才下载的 authlib-injector 的文件名；`B` 改为外置服务器的 API 地址；如果你不知道地址，请看 [外置服务器的 API 地址在哪里看？](#外置服务器的-api-地址在哪里看))。最后的启动命令 **差不多应该像这样**：

```bash
java -javaagent:authlib-injector-1.xx.xx.jar=https://skin.example.com/api/yggdrasil -jar server_file.jar
```

4. 打开服务器的配置文件 `server.properties`，将 `online-mode` 设置为 `true`；
5. 启动服务器。

### 外置服务器的 API 地址在哪里看？

在皮肤站的 `仪表盘` 页面的左下方有个 `快速配置启动器`，其中的 `本站的 Yggdrasil API 认证服务器地址` 即为 `外置服务器 API 地址`。


## 特别感谢

::: cardList
```yaml
- name: yushijinhun
  desc: authlib-injector 的作者
  bgColor: '#FCDBA0'
  textColor: '#A05F2C'
  link: https://github.com/yushijinhun
- name: LittleSkin
  desc: 提供了稳定 Yggdrasil API
  bgColor: '#718971'
  textColor: '#FFFFFF'
  link: https://mcskin.littleservice.cn/
- name: blessing-skin-server
  desc: Github 开源 PHP Minecraft 皮肤站
  bgColor: '#FF6000'
  textColor: '#FFFFFF'
  link: https://github.com/bs-community/blessing-skin-server
```
:::

-------------
引用文章：
1. [知乎问答](https://www.zhihu.com/question/441838192)
2. [MoeDev の 悄悄话](https://moedev.net/authlib-injector/)
