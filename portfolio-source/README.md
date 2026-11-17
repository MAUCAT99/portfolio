# 谢添德 · 作品集站

面向 AIGC 内容生成 / AI 视频 / 编导后期方向的个人作品集。
纯静态，Vite 构建，无运行时框架依赖，构建产物可直接部署到任何静态托管。

- 深色 / 浅色双主题，默认跟随系统，可切换并记住
- 作品详情用原生 `<dialog>` 弹窗，支持 `#work-<id>` 深链分享
- 分类筛选（AI 漫剧 / AI 视频 / 影视短片 / 摄影 / 三维与游戏 / 电商视觉）
- 作品卡上的播放量、交付量标签（数据来自 `metric` 字段）
- 简历 PDF 随站点一起发布，联系区一键下载
- 响应式（手机 / 平板 / 桌面），尊重 `prefers-reduced-motion`
- 图片缺失时自动退回渐变色块，不会出现破图

## 快速开始

```bash
npm install        # 或 pnpm install
npm run dev        # 本地开发，默认 http://localhost:5173
npm run build      # 产出 dist/
npm run preview    # 预览构建产物
```

> 用 pnpm 时若提示 `Ignored build scripts: esbuild`，执行一次 `pnpm approve-builds` 允许它运行安装脚本。

## 目录结构

```
index.html                    页面结构
src/data.js                   ← 所有文案、作品、经历，改这一个文件就够
src/main.js                   渲染、筛选、弹窗、主题、滚动揭示
src/style.css                 样式与设计变量（配色在顶部 :root）
public/works/                 作品图片（旗舰项目已是真实海报/工程截图）
public/works/clips/           可播放的片段（4 条，共 ~20MB）
public/backdrops/             首屏氛围底图（可换成自己的空镜）
public/resume.pdf             简历（联系区「下载简历 PDF」）
public/favicon.svg            站点图标
tools/import-assets.py        把本地素材压成网页尺寸
tools/make-backdrops.mjs      重新生成氛围底图
tools/make-placeholders.mjs   重新生成占位图
dist/                         构建产物（部署这个目录）
```

## 品牌：謝添德 · XTD · 添幀

视觉方向是**青紫电影感**：接近黑的底色、冷调文字、青绿→紫罗兰的渐变强调色，加上银幕暗角与胶片颗粒。

- **中文名用繁体「謝添德」**：繁体字重更接近片头字幕的质感，跟简体正文形成「署名 vs 内容」的层次。
- **字标 XTD**：三字母缩写放在页头的小方块里、标签页标题、favicon——像场记板上贴的标签，短、硬、好记。
- **品牌别名「添幀」**：取姓名里的「添」，配影像的最小单位「幀」——添一幀，比别人多做的那么一步。
- **用法**：页头 `XTD + 謝添德 + 添幀`（窄屏收起别名）；页脚 `謝添德 · 添幀`；标签页 `謝添德 XTD｜AIGC 内容生成 · 編導 · 後期`。

规则只有一条：**姓名与身份行用繁体，正文保持简体**。这样既保留签名感，又不影响阅读。

改品牌要动的地方：

| 想改什么 | 改哪里 |
| --- | --- |
| 名字 / 别名 / 缩写 | `src/data.js` 的 `name` / `alias` / `aliasLatin` / `monogram` |
| 页头那个 XTD 小方块 | `index.html` 里的 `.brand-monogram` |
| 浏览器标签图标 | `public/favicon.svg` |
| 配色 | `src/style.css` 顶部 `:root` 与 `[data-theme="light"]` 的 `--accent` / `--accent-2` / `--bg` |

## 首屏背景图

首屏现在是两层「氛围底」交叉淡入（`public/backdrops/`，由 `tools/make-backdrops.mjs` 生成），叠一层压暗遮罩保证文字可读，外加缓慢呼吸的推镜和全局暗角。

**换成真实剧照最值钱**——你自己拍的夜景、雾、霓虹、漏光，既是原创又不会有版权问题：

1. 图片放进 `public/backdrops/`，建议 1920×1200 或更大，压到 400KB 以内；
2. 把 `index.html` 里 `.hero-backdrop` 两个 `<img src>` 换成你的文件名（`.jpg` 也行）；
3. 想只留一张就删掉第二个 `<img>`，CSS 会自动退化成静态底 + 推镜。

网图不是不能用，但要注意授权：Unsplash / Pexels 的免费授权可以商用于个人站，仍需按它们的条款署名或不暗示代言。更稳的做法还是用自己的空镜——那是别人抄不走的部分。

## 现在的内容来自哪儿

内容全部根据简历整理，数字都对得上：

| 站点位置 | 内容 |
| --- | --- |
| 首屏四个数字 | 1200 万海外漫剧播放 / 20+ AI 商业视频 / 70+ 统筹团队 / 3 年拍摄剪辑 |
| 精选 3 条 | Noble Game（60 集 / 1200 万播放）、AI 短片《半城烟火，千年泉州》、毕业视频《夏日落幕，我们毕业再见》 |
| 全部作品 20 条 | 9 部 AI 漫剧（全部真封面）+ 2 个 AI 产品案例 + AI 短片、数字人商单、毕业片、微电影、晚会现场、商业摄影、Blender、Unity、电商视觉 |
| 关于 | 泉州师范学院数字媒体技术 2027 届；百言科技、远大建材、校融媒体中心三段经历 |

**还缺的两件事**：

1. 海外漫剧的平台与总数据（除旗舰那条，其余 8 部只有剧名和题材）——有的话每条都能多一行硬指标。
2. 作品的实际链接（TikTok / YouTube / 抖音 / B 站）——所有 `links` 现在都是 `#`，点开是空跳转。

## 已经接入的真实素材

旗舰项目 **Noble Game: Commoner's Heir**（《贵族游戏：庶民继承人》）已经用真素材：

| 素材 | 文件 | 来源 |
| --- | --- | --- |
| 竖版海报 810×1170 | `public/works/noble-game-poster.jpg` | `E:\工作内容\爆款1200万播放量\海报\竖版810x1170.png` |
| DaVinci 时间线截图 | `public/works/noble-game-resolve.jpg` | `…\5.工程截图\剪辑\1.png` |
| 分镜工程截图 | `public/works/noble-game-storyboard.jpg` | `…\5.工程截图\分镜\1.png` |
| 男主定妆 | `public/works/noble-game-char-lead.jpg` | `…\6.角色定妆\男主埃利奥特\1.png` |
| 男二定妆 | `public/works/noble-game-char-felix.jpg` | `…\6.角色定妆\男二菲力克斯\1.png` |

转换脚本在 `tools/import-assets.py`：只读源文件、输出压到网页尺寸（海报 900 宽 159KB，截图 1600 宽约 150KB）。

素材里两个最值钱的信息：工程截图证明是真在 **DaVinci Resolve** 里剪的（不只是「会 AI 生成」），角色定妆成套，正好对应「跨 60 集不变脸」这个最难的卖点。

## 素材取舍

`E:\工作内容` 下 21 个项目，9 个已上线（见上节），12 个暂缓。暂缓的判断标准：

1. 中文工作名不适合出现在对外作品集里；
2. 题材偏擦边，放进求职站点收益小于风险；
3. 与已上线的项目重复（比如 `正太` 和旗舰 `爆款1200万播放量` 是同一个故事）。

客户信息仍要注意：商单截图里的品牌名、账号名，公开前建议打码或取得授权。

## 已上线的 8 部漫剧

从 `E:\工作内容` 里挑了 8 部能公开的（外加旗舰 Noble Game，共 9 部 AI 漫剧）。原则：**对外只用英文发行名**，中文名作为副标题保留。

| 海外发行名 | 中文名 | 源文件夹 |
| --- | --- | --- |
| Trash to Millions: The Doubling Pot | 从收废铁到百万富翁：我的翻倍壶 | `男频破铁虎` |
| The Hidden Heir's Fighting Wife | 隐藏身份的双强夫妇 | `拳击手泰森夫妇` |
| A Christmas Wish for a Daddy | 圣诞爸爸 | `圣诞` |
| The Vampire's Face-Blind Bride | 吸血鬼的脸盲新娘 | `狼人爱上瞎了眼的公主` |
| The Assassin Twin Takes On Three Rebellious Heirs | 刺客双生 | `霸气老妈护儿子` |
| The Little Girl Who Talks to Animals | 会说话的小女孩 | `芝士雪豹` |
| She Swapped Faces and Wed Into My Dynasty | 换脸嫁入豪门 | `换脸1000次AAA勾引总裁` |
| I Can Steal Monster Talents（暂译，待换正式名） | 我能夺取怪兽天赋 | `怪兽` |

**封面怎么来的**：这些项目只有 mp4、没有海报。机器的 shell 出不了网也没有 ffmpeg，所以我用无头浏览器加载视频、seek 到 42%（个别换到 72% / 90%）再截图，取帧脚本是 `tools/import-frames.py` 的上游步骤（`grab.mjs`，一次性工具）。

因此封面是 **480×640 的视频截帧**，卡片上够用，但**有官方海报时建议替换**：直接覆盖 `public/works/<id>.jpg` 即可，尺寸 2:3 或 3:4、200KB 以内最好。

**没放进来的**：`tfboys`、`公爵`、`小孩`、`女同`、`女同修改`、`死南通`、`正太`（内容与旗舰重复）、`被捅了1000次…`、`重生之女帝归来`、`鉴宝`、`雪地`、`骚福瑞`。原因三类：中文工作名不适合公开、内容偏擦边、或与已有项目重复。要用的话告诉我，补一张封面就能上。

## 案例详情支持五段结构

项目详情除了「一句话 + 说明」，还可以写完整案例。数据里加 `caseStudy` 即可，弹窗会在海报与图库之间渲染：

```js
caseStudy: [
  { heading: '项目背景', body: ['一段背景', '另一段'] },
  { heading: '我的角色', body: ['我负责什么'] },
  { heading: '设计与推进过程', body: ['先看主线：'], items: ['步骤一', '步骤二'] },
  { heading: '当前结果', body: ['已经跑出来的数字'] },
  { heading: '复盘', body: ['瓶颈在哪、下一步做什么'] },
]
```

目前写了完整案例的三条：Noble Game（漫剧）、AI 运营工作台、百言 GEO 内容增长系统。后两条来自 GitHub 仓库 `axbgs123/personal-portfolio` 的项目正文，**封面是占位图**——那里有产品截图（webp），但这台机器下载不了图片，需要你把截图放进 `public/works/` 后替换。

## 让人看到作品：三条路

站上默认只放封面。要真的能看，有三条路，成本和适用场景不一样：

| 方式 | 怎么做 | 代价 |
| --- | --- | --- |
| 自托管片段 | 把 mp4 放进 `public/works/clips/`，数据里加 `video: './works/clips/x.mp4'` | 简单、可控；但视频进仓库，100MB 一集不现实，只能放短片段 |
| 平台外链 | 传 TikTok / YouTube / B 站，把地址写进 `links` | 最推荐：不占带宽，播放数据还能当证据 |
| 对象存储 + CDN | 视频传 OSS / R2，`video` 写完整 URL | 适合放完整 60 集，但要配置 CORS 和防盗链 |

现在站上 4 条已经接了**片段**（各 4–6MB，共约 20MB，放在 `public/works/clips/`）：Trash to Millions、The Hidden Heir's Fighting Wife、She Swapped Faces… 、The Assassin Twin…。卡片右上角有 ▶ 的就能点开看。

**注意**：这 4 个 mp4 会让 `dist/` 变大 20MB，部署到 GitHub Pages 这类有仓库体积限制的地方时，建议先删掉 `clips/` 或换成外链。

## 怎么给别人看

三种方式，按「多快能发出去」排序。

### 1. 同一个局域网（现在就能看）

在本机跑一个静态服务，绑到所有网卡：

```sh
python -m http.server 8080 --bind 0.0.0.0 --directory dist
```

然后同一 Wi-Fi 下的手机 / 同事电脑打开 `http://<本机内网IP>:8080/`。

- 内网 IP 用 `ipconfig` 查（当前这台是 `10.176.114.62`，换了网络会变）。
- 打不开多半是 Windows 防火墙拦了 8080：在「允许应用通过防火墙」里放行 Python，或临时关掉防火墙测一次。
- 这种地址只在同一网络有效，发给校外的人打不开。

### 2. 拖一个文件夹上线（零安装，两分钟）

已经打好包：`portfolio-dist.zip`（21.5MB，含 4 个片段）。

1. 解压成文件夹；
2. 打开 [app.netlify.com/drop](https://app.netlify.com/drop)，把**文件夹**拖进去；
3. 立刻得到一个 `https://xxx.netlify.app` 地址。

Cloudflare Pages 的「Direct Upload」同理。适合马上发给 HR 或贴在微信里。缺点是以后改了内容要重新拖一次。

### 3. GitHub Pages（推一次，以后自动更新）

仓库里已经放好 `.github/workflows/deploy.yml`：推到 `main` 就自动构建并部署。

1. 把这个项目推到 GitHub（这台机器没装 git，可以装 Git / GitHub Desktop，或用网页版上传整个文件夹）；
2. 仓库 **Settings → Pages → Source** 选 **GitHub Actions**；
3. 等 Actions 跑完，地址是 `https://<用户名>.github.io/<仓库名>/`。

`base` 已设为 `./`（相对路径），所以放在子路径下也能正常加载样式和图片。

**体积提醒**：`dist/` 现在 21.6MB，主要是 `public/works/clips/`。要更轻就把片段换成平台外链，或直接删掉 `clips/` 与 `video` 字段。

## 换图片的规则

| 位置 | 建议尺寸 |
| --- | --- |
| 漫剧海报（竖版） | 2:3，810×1170 或 900×1350，压到 200KB 以内 |
| 普通作品卡 | 3:4 竖版也能用，卡片会自动裁切 |
| 详情页图库 | 16:9 / 16:10，1600 宽，200KB 以内 |
| 个人形象照 | 4:5 竖图，替换 `index.html` 里 `portrait` 的 `src` |

## 换成自己的内容

### 基本信息 `site`

| 字段 | 说明 |
| --- | --- |
| `name` / `role` | 名字、身份（首屏两行大标题，`role` 用 `·` 分隔会自动处理窄屏换行） |
| `alias` / `aliasLatin` | 品牌别名与英文拼写（页头、页脚署名） |
| `location` | 首屏那个带绿点的小胶囊 |
| `tagline` | 一段自我介绍 |
| `email` | 联系区邮箱（自动生成 `mailto:`） |
| `stats` | 首屏数字，建议 4 个以内（手机端自动两列） |
| `marquee` · `skills` · `timeline` · `about` | 滚动文字条、技能分组、经历、关于段落 |
| `socials` | 社交链接，现在都是 `#`，换成真实主页 |

### 作品 `projects`

```js
{
  id: 'noble-game',                    // 唯一英文 id，也是深链锚点（#work-noble-game）
  title: "Noble Game: Commoner's Heir", // 对外用英文发行名
  subtitle: '贵族游戏：庶民继承人',       // 可选：详情页里的小字中文名
  category: 'AI 漫剧',                  // 同名会自动聚合成筛选按钮
  year: 2026,
  featured: true,                      // true 的进「精选」，最多 3 个
  portrait: true,                      // 可选：竖版 2:3 海报，精选区会收窄媒体列
  metric: '1200 万播放',                // 可选：卡片图上的数据标签
  platform: '海外短剧 · 60 集 / 69 分钟', // 可选：详情页里和数据并排
  image: './works/noble-game-poster.jpg',
  video: './works/clips/xxx.mp4',       // 可选：详情页直接播放，卡片会出现 ▶
  summary: '一句话说明',                // 卡片与精选区显示
  description: '详情里的完整说明',
  tags: ['AI 漫剧', '60 集'],
  gallery: [                           // 可选：详情页底部的证据图，带说明
    { src: './works/noble-game-resolve.jpg', caption: 'DaVinci 时间线' },
  ],
  links: [{ label: '观看作品', href: 'https://...' }],
}
```

`category` 换成新名字就会自动多出一个筛选按钮；把某条作品删掉，对应按钮也会消失。

### 配色与字体

`src/style.css` 顶部的 `:root` 与 `[data-theme="light"]`：

- `--accent` / `--accent-2` 强调色（现在是青绿 → 紫罗兰渐变）
- `--bg` / `--surface` / `--text` 底色与文字色
- `--font-sans` 字体栈，默认系统字体，无外部字体请求

改完想同步占位图配色：编辑 `tools/make-placeholders.mjs` 里的 `palettes` 和 `labels`，再跑 `node tools/make-placeholders.mjs`。

## 部署

`base` 已设为 `./`（相对路径），放根目录或子路径都能跑。

- **GitHub Pages**：构建后把 `dist/` 推到 `gh-pages` 分支，或用 Actions 自动构建
- **Netlify / Vercel / Cloudflare Pages**：构建命令 `npm run build`，发布目录 `dist`
- **自己的服务器 / OSS**：把 `dist/` 里所有文件拷过去

## 两个小技巧

- 分享单个作品：链接加锚点，如 `https://你的域名/#work-manju-overseas`
- 强制主题（截图或分享预览用）：`?theme=light` / `?theme=dark`

## 预览

`previews/` 是实际渲染出来的截图（不是设计稿）：

| 文件 | 内容 |
| --- | --- |
| `desktop-hero-dark.jpg` | 深色首屏（青紫 + 电影感底图） |
| `desktop-featured.jpg` | 精选区：真海报 + 数据标签 |
| `desktop-grid.jpg` | 全部作品网格 |
| `detail-dialog.jpg` | 作品详情：海报 + 工程截图 + 定妆图库 |
| `mobile.jpg` | 手机端 |

## 无障碍与兼容

- 语义化标签、`aria-pressed` 筛选态、`aria-label` 图标按钮、键盘可操作
- 顶部「跳到主要内容」跳转链接
- 目标浏览器：最近两年的 Chrome / Edge / Safari / Firefox（`color-mix()` 在较旧 Safari 上会退化，不影响布局）
