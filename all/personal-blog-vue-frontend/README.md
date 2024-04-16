本项目已部署至服务器，并已经申请了域名备案，目前的域名是chenjinxu.top
# demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### tips
1.当然可以。在 Vue.js 中，`:key` 是一个特殊的属性，Vue 使用它来追踪每个节点的唯一性。这样当数据变更的时候，只有改变的那一部分再次被渲染，而不是全部重新渲染。按照你的代码，音乐文件的 URL 在 Axios 的异步请求完成之后才会被设定。但是，页面在此之前就已经完成了加载，也就是说，`<audio>` 标签在没有设定 `musicurl` 的情况下就已经被渲染了。由于 URL 在初次渲染时是未定义的，所以音乐播放器无法播放任何音频。当 `musicurl` 从 Axios 获取成功后，它会更新，但是 `<audio>` 标签并不会立即更新。这是因为 Vue 认为 `<audio>` 标签已经被渲染过，因此即便 `musicurl` 发生了改变，Vue 也不会触发重新渲染。当你为 `<audio>` 标签添加 `:key` 属性时，您告诉 Vue 追踪这个标签的状态，并在检测到 `:key` 变化时重新渲染。所以，当你将 `musicurl` 设为 `:key` 的值，每次 `musicurl` 变化时 Vue 就会重新渲染 `<audio>` 标签。这确保播放器的源 URL 总是最新的，也使得音乐播放器可以正常工作。

```
personal-blog-vue-frontend
├─ .browserslistrc
├─ .eslintrc.js
├─ .git
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           └─ HEAD
│  ├─ objects
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-86997cd53ef12bd3f5cbb8274bd2cfeb80ae81ff.idx
│  │     └─ pack-86997cd53ef12bd3f5cbb8274bd2cfeb80ae81ff.pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ HEAD
│     └─ tags
├─ .gitignore
├─ babel.config.js
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ public
│  ├─ badend.wav
│  ├─ favicon.ico
│  ├─ index.html
│  └─ yuanshen.mp4
├─ README.md
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  ├─ background.jpg
│  │  ├─ blacktiane.jpg
│  │  ├─ blog.jpg
│  │  ├─ diary.jpg
│  │  ├─ kafuka.png
│  │  ├─ learn.jpg
│  │  ├─ lrosrick.jpg
│  │  ├─ password.png
│  │  ├─ personal.jpg
│  │  ├─ refresh.svg
│  │  ├─ shibao.jpg
│  │  ├─ starhunter.png
│  │  ├─ trueback.jpg
│  │  └─ yaya.png
│  ├─ components
│  │  └─ backItem.vue
│  ├─ logs
│  │  ├─ 3.15
│  │  ├─ 3.17
│  │  ├─ 3.21
│  │  └─ 3.23
│  ├─ main.js
│  ├─ router
│  │  └─ index.js
│  ├─ store
│  │  └─ index.js
│  └─ views
│     ├─ animationPage.vue
│     ├─ Blog
│     │  └─ blogPage.vue
│     ├─ camera
│     │  └─ cameraPage.vue
│     ├─ crazy
│     │  └─ crazyPage.vue
│     ├─ diaryPage.vue
│     ├─ game
│     │  ├─ endPage.vue
│     │  ├─ enterPage.vue
│     │  ├─ gamePage.vue
│     │  └─ winPage.vue
│     ├─ HomePage.vue
│     ├─ learnPage.vue
│     ├─ mainPage.vue
│     ├─ musicPage.vue
│     ├─ navigatePage.vue
│     └─ personal
│        ├─ passwordPage.vue
│        └─ personalPage.vue
├─ video
│  ├─ 初步.mp4
│  └─ 启动.mp4
└─ vue.config.js

```