# thirdsystem-vue-vite-js-nodejs-express
三系统的主题是英语学习!总之先定下主题了.
1.在Vue 3中，计算属性在模板中被自动解包，也就是说在模板中可以直接访问它的值，而不是.ref对象。这就是你可能没有看到.value这个属性，但仍然可以正常工作的原因。
然而，在JavaScript或者TypeScript代码中，事情就有所不同了。在这些脚本块中，访问计算属性实际上会返回一个ComputedRef对象。要获取计算属性的值，就必须通过这个ComputedRef对象的.value属性。这是Vue 3的响应性系统的一部分，使得可以追踪和响应计算属性值的变化。
换句话说，如果你在模板中，可以直接使用计算属性的名称获取其值，不需要附加.value。但在JavaScript或TypeScript代码块中，你需要使用.value来访问其值。
2.如果是这样写const getwordApi = (params) => post('http://localhost:5000/getword', params);就是直接返回的是吧
是的，你是对的。在你的这个 `getwordApi` 函数中，由于箭头函数后面立即跟随的就是 `post` 方法的调用，所以 `post` 方法的返回值将直接作为 `getwordApi` 函数的返回值。这是箭头函数的简写形式，当箭头函数的函数体只有一条语句，且该语句的结果就是函数的返回值时，可以省略花括号和 `return` 关键字。
因此，你的这个 `getwordApi` 函数写法是正确的。当调用 `getwordApi` 函数时，会直接返回 `post` 方法的返回值，也就是一个 Promise 对象。
const getwordApi = (params) => post('http://localhost:5000/getword', params);
这个的意思是：定义一个名为 `getwordApi` 的函数，接受一个参数 `params`，函数体执行 `post('http://localhost:5000/getword', params)` 方法，然后返回其结果。
3.服务器配置的时候记得加一个base:/
```
thirdsystem-vue-vite-js-nodejs-express
├─ .git
│  ├─ COMMIT_EDITMSG
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
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 01
│  │  │  └─ ebd1d95c0e3ae39bf23afd5d61de07c701ee4e
│  │  ├─ 02
│  │  │  └─ b721b281f00388dad83ff37789f172a2e77d6f
│  │  ├─ 03
│  │  │  └─ 5954350d345d45597d224057c278ee2aeb3033
│  │  ├─ 09
│  │  │  └─ d4c18cc1c1b1846e57bd4215c21e9de026ab22
│  │  ├─ 0b
│  │  │  ├─ df713a602805982dd1ca2257110ba034ac5b44
│  │  │  ├─ e704d99fc7b974ae0b6b7ae73357960e419add
│  │  │  └─ f466830304d86e1cf1ea098a13188d3bbd4553
│  │  ├─ 11
│  │  │  └─ 841733c93871ca3f6368cf43826558e6059f04
│  │  ├─ 13
│  │  │  └─ cbe572dcf791bc3040a71aca3b75ac26cd6afe
│  │  ├─ 14
│  │  │  └─ 872edb893a01ca8f2d83f9e31b4126f890cac7
│  │  ├─ 18
│  │  │  ├─ 7bf160d561d2b37ef632a6cf62fec40a4aeef8
│  │  │  └─ a4eebce26074eebf6d96ec568355dc5280c0c9
│  │  ├─ 19
│  │  │  └─ 7cec5961290fbabba832d21e63e84149c6da13
│  │  ├─ 1b
│  │  │  └─ 23cbbd31b4c12d31dd79ecb0c7654494a1cff0
│  │  ├─ 1f
│  │  │  └─ b1f9509bc4f330d62d3115df1e6a2f4e6d4325
│  │  ├─ 21
│  │  │  └─ 81e72a36e4293ce0e8d8c9c9b6b63e14c53b09
│  │  ├─ 27
│  │  │  ├─ 197977af6c4d78c78bd0127d01a1487c6f9c51
│  │  │  └─ fcaba7ffd6ceecb67bf156bf6aa3b78c2aea73
│  │  ├─ 28
│  │  │  └─ e358a5fa91c8ab7a027cb5cb377df00226f106
│  │  ├─ 2a
│  │  │  ├─ 13125b359ee23383cd841e1530089cc8f5038f
│  │  │  └─ 211de1b47d3655540470a82a8ee8450a758afe
│  │  ├─ 2b
│  │  │  └─ 72194cc70623949bc3531ce573467f434fb0ec
│  │  ├─ 2e
│  │  │  └─ b672318a6d49be4f90ecb8714caea92f3477ec
│  │  ├─ 30
│  │  │  └─ 5b9b28c5653dec119ae743ad9607fc57adb66d
│  │  ├─ 37
│  │  │  └─ 373f4a6fa15b0f79481b13fe3173901ed80384
│  │  ├─ 38
│  │  │  ├─ c46a70a4c77e5681d773702d304289947d854e
│  │  │  └─ cc4c923f6521c6c848151203b2832e9e87ae7d
│  │  ├─ 3c
│  │  │  └─ 8b4009f71f60884eec0119ef7d6c154c252cd2
│  │  ├─ 3e
│  │  │  └─ c5bfefad6a61c9b36ee8620c45ec674e616972
│  │  ├─ 40
│  │  │  └─ 73bae1edddfad214376f6ce17aac7d194c3d9e
│  │  ├─ 42
│  │  │  └─ ef5fa62200a0da88c545995bab32525c408dad
│  │  ├─ 43
│  │  │  └─ 80cd883ccb5d34470a7805251d2289795afc71
│  │  ├─ 47
│  │  │  └─ 51b9353fb64655db7a6c6e538c8c2c097381d7
│  │  ├─ 48
│  │  │  ├─ 30f71d4216953451ebca2b2d06e5b33ca613d1
│  │  │  └─ 82e2982f3cafd0034de0f139e21a34e9fe0fe0
│  │  ├─ 49
│  │  │  └─ 35f9fb1cc6e6d0c22688f15602c356340c062b
│  │  ├─ 4f
│  │  │  └─ 6cad15ba3d821272957a0d2702d7c9fdd0e7c7
│  │  ├─ 50
│  │  │  ├─ a091da4cb6c0e662d486ff2cf3a1e9e7c495af
│  │  │  └─ dbfd73f3ab002c16585eb425c4f1fe02f190ef
│  │  ├─ 51
│  │  │  └─ 294ab8ec963dd7a3f1fe370a9632ff14be5a8d
│  │  ├─ 55
│  │  │  ├─ 21f2f02e26a3c8df51cdefce73479425df16f8
│  │  │  ├─ 37ee357daf6b4aeaabcee69e1558d4cd4d5be5
│  │  │  ├─ 76d79f3212c1d699d5311703fe4df727cf5bdf
│  │  │  └─ 7b37c44d5cb352ff331f90e7fba0189cdfa65e
│  │  ├─ 57
│  │  │  └─ 9c8b26cd1f4df67bab262cf072ee2f2036b0d3
│  │  ├─ 59
│  │  │  └─ 863cbc04acecbcacc2e738a3f68e4b231fdefc
│  │  ├─ 5b
│  │  │  └─ 0255a40c6104eb37f959dcadc62d615af6446d
│  │  ├─ 5c
│  │  │  ├─ 2db4ef20bf34b83697fdd2761b91e38bc9a72b
│  │  │  └─ 4bed52e2388b6342d3541903660801f3993e01
│  │  ├─ 5f
│  │  │  └─ f6cccf0f8fc9aba094ccd2e311f07be38e9f60
│  │  ├─ 61
│  │  │  ├─ a232b76b69bfbd64ef9831e68e60eae5f7b67b
│  │  │  └─ ec9004860d1174deecbb0808e8b19d67340022
│  │  ├─ 62
│  │  │  └─ a39e82830f4bca0a85d3690c7f4dc5b2b8a253
│  │  ├─ 64
│  │  │  └─ ad930bb5f039edf98505aa50d8bc448bbb8159
│  │  ├─ 67
│  │  │  ├─ ce2f80dc8c70bdb2cac885f5894d6edd0b17c0
│  │  │  └─ dd3975c42069ab5eac07fd09c2a937d841085c
│  │  ├─ 69
│  │  │  └─ e4853e8a735721e53fff2ff4f82d334b6df6ed
│  │  ├─ 6b
│  │  │  ├─ 98ec2f3cb701cb721f536c065d18eb161ebfe2
│  │  │  └─ a4f885351c65dc97370a26ae62d1475a5b8500
│  │  ├─ 6e
│  │  │  └─ 44b23c53a22b400f4ac2b6681d9a8a62330301
│  │  ├─ 71
│  │  │  ├─ 1df801c49c391993f5640ac9d4ced6ca1e3f8c
│  │  │  └─ 2944d5d25d9cc818b293366abbf6224c19fc43
│  │  ├─ 75
│  │  │  └─ 6740498e41127c284c5ef2c7a9d956dc4962a3
│  │  ├─ 77
│  │  │  └─ 0e9d333ee70e75fe7c0bad7fb13e4f6ed4627a
│  │  ├─ 7a
│  │  │  └─ 767da62a621e5ce4c090bfdca7e2f1ec27c8d0
│  │  ├─ 7d
│  │  │  └─ 4868e9366e7c8a60547984c1aa2f4fc983568a
│  │  ├─ 7f
│  │  │  └─ 0579afdc04271cf30b414bab5b184f981bc424
│  │  ├─ 83
│  │  │  ├─ 88c4bb136ea674b07747cc20b113af58222ffe
│  │  │  └─ d9a8defb52bb60613fc913fd09d6a90d708e7c
│  │  ├─ 86
│  │  │  └─ f1f17abcf8c7ae52453b36635b46ead36c5b0d
│  │  ├─ 8b
│  │  │  └─ 2f758e033461cd8507cf12832be511c946c796
│  │  ├─ 91
│  │  │  └─ b4cf406b583848cf439b000d42efa791c6dba5
│  │  ├─ 94
│  │  │  └─ b78655ab782fa1721ae5cc34900202fa497192
│  │  ├─ 96
│  │  │  └─ a56b8effd876339f4f7c0467ec22e5e7a1fd76
│  │  ├─ 9a
│  │  │  └─ dcff68ac856acb894eebe5ffd18a67971047fc
│  │  ├─ 9c
│  │  │  └─ 59f90ef508288ae6ae0391111c295b9e177d33
│  │  ├─ 9e
│  │  │  └─ 7b8013015472bcf273eaed94f83cd600242df9
│  │  ├─ a0
│  │  │  └─ f24d0bb455b0ccc1731a60ce1066ffabf92074
│  │  ├─ a6
│  │  │  └─ 1dcc463c2d8f5a3984efa70142e6b23925180c
│  │  ├─ a7
│  │  │  └─ 6ac9bb69fed38f31cd1052d89788363420c67d
│  │  ├─ aa
│  │  │  └─ d2d54facba9213ae424c46a3ed93d6af68dd97
│  │  ├─ ad
│  │  │  └─ b83a4ba30b248685522112764496e68b531eb3
│  │  ├─ ae
│  │  │  └─ 0066da69bde88241cc1f02fe683ad6c48f1a32
│  │  ├─ b0
│  │  │  ├─ b84d10e5dfe7a6a0e00af40c3a733ee52a2d14
│  │  │  └─ ebb1a52a2defec681780658a0a88d31196cdb3
│  │  ├─ b1
│  │  │  └─ 94521157b1e50bdee0239972ba855ce295baaf
│  │  ├─ b3
│  │  │  ├─ 91a2d52e8efdf88d6dd407808466c136f42840
│  │  │  └─ fa297cdfbcf13de3f2a4d5064252150b183123
│  │  ├─ b4
│  │  │  └─ 3bab31d0ae814b23d55da59b2db0e827ef63ca
│  │  ├─ b7
│  │  │  └─ f59b5bcb157bee912c308a639d13f9a092f3f0
│  │  ├─ b8
│  │  │  ├─ 2ccc2f95b5d76632c60087ba0156d7420213de
│  │  │  └─ 60f5c740304cee3cb814a0e7cad07ffc59aa62
│  │  ├─ b9
│  │  │  └─ a23e809f672a60452a794fc1242bd5118a4d08
│  │  ├─ bb
│  │  │  ├─ 131d6b8fe5d93269c14fac087a104cc94af508
│  │  │  └─ e82eef816d7aa4491cc6b4627c078260698e32
│  │  ├─ bc
│  │  │  ├─ 402c9dc45a8289167f275c6018d73c48089551
│  │  │  ├─ 9bd6b12ae0c6f3a01cab00dfe7c0329797a080
│  │  │  ├─ b594ed7a07e400a50cb437b9889506d4c5bc21
│  │  │  └─ f7f67c331fde7364abc03398401e825dc0297b
│  │  ├─ be
│  │  │  └─ 5fafebe45ce08f6249b86de2fd22d65e79633b
│  │  ├─ c1
│  │  │  └─ d7a2caa70a2906747b290ed7dfc53f0adc09bb
│  │  ├─ c2
│  │  │  └─ b8bb2205730146487d6edafbc115cd0dfa96cf
│  │  ├─ c7
│  │  │  ├─ 0c5231dc59fa8ba9165758862e13c73226250e
│  │  │  ├─ 5304e60c7fed3f5ee4c58e1683c2494588a6ec
│  │  │  └─ dec4c993ca1d0089794f1b4e750966ab6746af
│  │  ├─ cd
│  │  │  └─ 5e8a16203ce5810d32c65024b91b53b5e92b4d
│  │  ├─ ce
│  │  │  └─ 8619e038d3e4f7c454ee5485e6602d30c27e8f
│  │  ├─ cf
│  │  │  ├─ 1c7252fd6b6d88a86259337d8ffd5a5b601aa8
│  │  │  └─ 231f3b120bdbd683ebfed3fea66fbcf658307b
│  │  ├─ d0
│  │  │  └─ c444eca196ed1e6fec9a46f051597f1f3605ad
│  │  ├─ d2
│  │  │  └─ 3afe954363b7880874f1ebc75386331c4606f0
│  │  ├─ d6
│  │  │  └─ 27068a5dfa59c5b1c7eb043617b7488fc2747d
│  │  ├─ d8
│  │  │  ├─ c8011d0d2788fd2772323df597e197fc104fdb
│  │  │  └─ f6d8a33d295766db7c4323d76a802b2a7c7ada
│  │  ├─ d9
│  │  │  └─ cef3d0f6c50f6a3b3458b365076ea0381edf4f
│  │  ├─ e0
│  │  │  └─ acb37376374d154634b355cc7f2e47410fb1ae
│  │  ├─ e1
│  │  │  └─ 105c8e3738eba72e98a71b5c60cf43215316f8
│  │  ├─ e3
│  │  │  └─ 4c446d6f75333ef0ef684f76799981c1ffe19e
│  │  ├─ e4
│  │  │  ├─ 4aee3134a65cb7bbca4dcc47145d5a9c79e201
│  │  │  └─ 7df564cb7dbb260c14a158893a0c277b0e7d52
│  │  ├─ e5
│  │  │  └─ db9a3b6e160252b099824c0557a8a7d04cfbfd
│  │  ├─ e7
│  │  │  ├─ 1c5eac44f2f731aa035579ed78b8ed4a1b44f5
│  │  │  └─ b8dfb1b2a60bd50538bec9f876511b9cac21e3
│  │  ├─ ed
│  │  │  └─ 5cd17f94ba2921e955663b271fef9f2507cda0
│  │  ├─ ef
│  │  │  └─ 2f08efb9ab4b0d54cf4ace34295e9348008d45
│  │  ├─ f0
│  │  │  └─ 1eba00e9e5e77347fee4da4bce2c0bbc0b5927
│  │  ├─ f1
│  │  │  └─ 8abb7e0fef7e4e9c50dabfd197256791bbef4d
│  │  ├─ f3
│  │  │  └─ fde5171d86585a78717b4630cbf7739e5aeadc
│  │  ├─ f4
│  │  │  └─ 72e9b04329b56c2c3f34961bb881177034ba38
│  │  ├─ f8
│  │  │  └─ 72d0527db29327d96ca73c8d65983acf6b5fb5
│  │  ├─ fa
│  │  │  └─ 02b7ea6edb7b32dc9cdc980dda89792e287839
│  │  ├─ fb
│  │  │  └─ fada40e6d727a5ccd26e657d5a181d8d6b0e87
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-1125955f41443e12344e2afeaf6ebf3fe0d405ef.idx
│  │     └─ pack-1125955f41443e12344e2afeaf6ebf3fe0d405ef.pack
│  ├─ ORIG_HEAD
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ backend
│  ├─ .gitignore
│  ├─ app.js
│  ├─ modle
│  │  └─ getword.js
│  ├─ package-lock.json
│  ├─ package.json
│  └─ README.md
├─ dataloader
│  ├─ .gitignore
│  ├─ app.js
│  ├─ GRE_2.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ TOEFL_2.json
│  └─ TOEFL_3.json
├─ README.md
└─ thirdsystem
   ├─ .gitignore
   ├─ .vscode
   │  └─ extensions.json
   ├─ index.html
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  └─ vite.svg
   ├─ README.md
   ├─ src
   │  ├─ api
   │  │  └─ getword.js
   │  ├─ App.vue
   │  ├─ assets
   │  │  └─ vue.svg
   │  ├─ components
   │  │  ├─ chosewindow.vue
   │  │  ├─ countpage.vue
   │  │  └─ typePart.vue
   │  ├─ http
   │  │  ├─ newAxios.js
   │  │  └─ request.js
   │  ├─ main.js
   │  ├─ store
   │  │  └─ index.js
   │  ├─ style.css
   │  └─ view
   │     └─ main.vue
   └─ vite.config.js

```