/**
 * 站点内容都在这个文件里改。
 * 换文案、换作品、换链接，都不需要动 index.html 或 JS。
 */

export const site = {
  name: '謝添德',
  latin: 'XIE TIANDE',
  /* 字标：XTD 用在页头、标签页与图标上 */
  monogram: 'XTD',
  /* 品牌别名：取「添」，配影像最小单位「幀」——添一幀 */
  alias: '添幀',
  aliasLatin: 'TIANZHEN',
  role: 'AIGC 内容生成 · 編導 · 後期',
  greeting: '你好，我是',
  location: '杭州 · 27 届 · 可实习',
  tagline:
    '数字媒体技术本科在读，做 AI 漫剧、AI 视频与商业短片。从脚本、分镜、生成、拍摄到剪辑调色，一条链路自己走完；也看得懂投流数据，知道内容为什么起量。',
  email: '2605544146@qq.com',
  year: 2026,
  /* 首屏背景：换成自己的剧照/空镜，放进 public/backdrops/ 再改这里的路径 */
  backdrops: ['./backdrops/atmosphere-01.svg', './backdrops/atmosphere-02.svg'],
  stats: [
    { value: '1200 万', label: '海外漫剧播放' },
    { value: '20+', label: 'AI 商业视频交付' },
    { value: '70+', label: '统筹过的运营团队' },
    { value: '3 年', label: '拍摄与剪辑' },
  ],
  marquee: [
    'AI 漫剧',
    'AI 短视频',
    '数字人',
    '分镜与编导',
    '剪辑调色',
    '三维建模',
    '商业摄影',
    '电商视觉',
  ],
  about: [
    '我是謝添德，泉州师范学院数字媒体技术 2027 届本科生。方向是 AIGC 内容生成：用 AI 把脚本变成能播的片子，也用剪映、PR、AE 把片子救回来。',
    '做过海外漫剧，单条播放 1200 万；也做过毕业晚会和商业活动现场的拍摄与编导。习惯一个人把「策划—脚本—生成—拍摄—剪辑—分发」整条链路跑通，再拿投流数据回头改内容。',
  ],
  skills: [
    {
      group: '生成式 AI',
      items: ['GPT / Claude', 'Midjourney', '可灵 · 小云雀', '扣子 Coze', '角色一致性', '提示词设计'],
    },
    {
      group: '视频后期',
      items: ['DaVinci Resolve', '剪映', 'Premiere Pro', 'After Effects', '调色', '字幕与本地化'],
    },
    {
      group: '动画与三维',
      items: ['Blender', 'Unity', 'Adobe Animate', '轻量三维场景'],
    },
    {
      group: '拍摄与运营',
      items: ['单反 / 微单', '活动跟拍', '电商视觉', '投流数据复盘'],
    },
  ],
  timeline: [
    {
      period: '2026.06 — 2026.09',
      title: '杭州百言科技 · AI 运营实习生',
      detail:
        '独立交付 20+ 条定制 AI 数字人与 AI 视频商单；为电商达人做的 AI 引流视频，投流消耗量、互动率、完播率均为当期最高。',
    },
    {
      period: '2025.08 — 2025.09',
      title: '泉州远大建材 · 电商运营实习生',
      detail: '负责店铺日常运营与销售数据复盘，参与 618 大促落地、A/B 测试与商品结构优化，日均处理 20+ 客户咨询。',
    },
    {
      period: '2024.09 — 至今',
      title: '泉州师范学院融媒体运营中心 · 主任',
      detail:
        '统筹 70+ 人内容团队并建立三级审核流程，累计产出官网新闻 205 篇、公众号推文 511 篇，负责大型校园活动后台与视频组协同。',
    },
  ],
  socials: [
    { label: '抖音', href: '#' },
    { label: '哔哩哔哩', href: '#' },
    { label: '小红书', href: '#' },
  ],
}

/**
 * 作品列表。
 * image 指向 public/works/ 下的文件：换成自己的图后改后缀即可（建议 1600×1000）。
 * metric 会显示在卡片图片右上角，没有就删掉这个字段。
 * featured: true 的项目进「精选」，最多 3 个。
 */
export const projects = [
  {
    id: 'noble-game',
    title: "Noble Game: Commoner's Heir",
    subtitle: '贵族游戏：庶民继承人',
    category: 'AI 漫剧',
    year: 2026,
    featured: true,
    portrait: true,
    metric: '1200 万播放',
    platform: '海外短剧 · 60 集 / 69 分钟',
    image: './works/noble-game-poster.jpg',
    summary: '海外上线的 AI 漫剧，单条播放 1200 万，60 集全流程跟进。',
    description:
      '我目前最有说服力的一条作品：海外上线的 AI 漫剧，单条播放 1200 万，全剧 60 集、共 69 分钟，第 9 集卡点、第 10 集开始付费。流程上先锁死人物定妆——同一角色跨 60 集不能变脸，靠的是固定参考图与生成参数；再拆成分镜脚本逐镜生成画面，最后在 DaVinci Resolve 里做节奏、字幕与调色。交付按平台要求同时出完整版、无字幕版、无音乐无字幕版三套，外加 srt 字幕，方便本地化团队接手。',
    tags: ['AI 漫剧', '60 集', '角色一致性', 'DaVinci Resolve'],
    caseStudy: [
      {
        heading: '项目背景',
        body: [
          '海外短剧平台需要持续上新的竖屏漫剧：一集 60～90 秒，整季 60 集。真人拍摄的成本和周期撑不住这种上新节奏，所以整条生产线改用 AI 生成加后期合成。',
          '我负责把「剧本 → 可播成片」这条链路单独跑通，并且保证同一个角色在 60 集里不崩脸。',
        ],
      },
      {
        heading: '我的角色',
        body: ['定妆、分镜、AI 生成、剪辑、字幕、多版本交付，全流程独立完成。'],
      },
      {
        heading: '设计与推进过程',
        body: ['我把流程拆成四段，每段都留了可复用的资产：'],
        items: [
          '定妆先行：每个角色先出一张正脸加一张全身参考，锁定提示词与生成参数，后面所有镜头都从这里出发。',
          '分镜按 chXX-clipXXX + 英文场景名命名（例如「萨里郡教区公墓」），海外后期接手时不用再猜。',
          '在 DaVinci Resolve 里做节奏、调色与字幕，把生成素材剪成有起伏的成片。',
          '交付三套：完整版、无字幕版、无音乐无字幕版，外加 srt，方便本地化团队二次处理。',
        ],
      },
      {
        heading: '当前结果',
        body: [
          '全剧 60 集、共 69 分钟，第 9 集卡点、第 10 集开始付费。上线后单条播放 1200 万。',
        ],
      },
      {
        heading: '复盘',
        body: [
          '真正的瓶颈不是画质，是一致性：模型能生成好看的单帧，但很难连续 60 集都长得像同一个人。所以时间主要花在重生成和修脸上，而不是写提示词。',
          '下一步我会把定妆板和分镜模板沉淀成可复用的资产库，让新剧集的启动成本降下来。',
        ],
      },
    ],
    gallery: [
      { src: './works/noble-game-resolve.jpg', caption: 'DaVinci Resolve 时间线：视频、调色与音频分轨' },
      { src: './works/noble-game-storyboard.jpg', caption: '分镜工程：按集拆解镜头与节奏' },
      { src: './works/noble-game-char-lead.jpg', caption: '男主定妆：同一角色的正脸与全身参考' },
      { src: './works/noble-game-char-felix.jpg', caption: '男二定妆：跨集保持形象一致' },
    ],
    links: [{ label: '观看作品', href: '#' }],
  },
  {
    id: 'trash-millions',
    title: 'Trash to Millions: The Doubling Pot',
    subtitle: '从收废铁到百万富翁：我的翻倍壶',
    category: 'AI 漫剧',
    year: 2025,
    platform: '海外短剧 · 男频逆袭',
    image: './works/trash-millions.jpg',
    video: './works/clips/trash-millions.mp4',
    summary: '男频爽剧：一个翻倍壶把废铁变成家产。',
    description:
      '男频逆袭题材，靠一个「翻倍」的设定撑起全集节奏。分镜表按 chXX-clipXXX + 英文场景名命名（比如「萨里郡教区公墓」），方便海外后期团队直接接手；成片同时出完整版、无字幕版与无音乐无字幕版。',
    tags: ['AI 漫剧', '男频', '分镜', '多版本交付'],
    links: [{ label: '观看作品', href: '#' }],
  },
  {
    id: 'hidden-heir-wife',
    title: "The Hidden Heir's Fighting Wife",
    subtitle: '隐藏身份的双强夫妇',
    category: 'AI 漫剧',
    year: 2025,
    platform: '海外短剧 · 双强',
    image: './works/hidden-heir-wife.jpg',
    video: './works/clips/hidden-heir-wife.mp4',
    summary: '双强夫妇互相藏身份，一路打到摊牌。',
    description:
      '双主角设定，两个人都藏着身份，靠一场场对峙把信息一点点漏给观众。这类戏最难的是节奏——每集结尾必须留钩子，所以我先把「卡点」标出来再倒推分镜。',
    tags: ['AI 漫剧', '双强', '节奏设计'],
    links: [{ label: '观看作品', href: '#' }],
  },
  {
    id: 'christmas-daddy',
    title: 'A Christmas Wish for a Daddy',
    subtitle: '圣诞爸爸',
    category: 'AI 漫剧',
    year: 2025,
    platform: '海外短剧 · 节日档',
    image: './works/christmas-daddy.jpg',
    summary: '圣诞档温情向：一个孩子许愿要一个爸爸。',
    description:
      '节日档的温情题材，配色和光都比常规剧集更暖。AI 生成在这种片子上要格外注意人物表情的稳定性，尤其是小孩的镜头，一旦脸崩整条情绪就断了，所以每个角色的参考图都单独锁了一份。',
    tags: ['AI 漫剧', '节日档', '角色一致性'],
    links: [{ label: '观看作品', href: '#' }],
  },
  {
    id: 'faceblind-bride',
    title: "The Vampire's Face-Blind Bride",
    subtitle: '吸血鬼的脸盲新娘',
    category: 'AI 漫剧',
    year: 2025,
    platform: '海外短剧 · 奇幻',
    image: './works/faceblind-bride.jpg',
    summary: '奇幻设定：新娘认不出人脸，血族婚礼开场。',
    description:
      '奇幻题材，世界观成本最高的一部：血族婚礼、古堡、多角色同框，靠场景提示词把美术基调先定死，再逐镜生成。群像镜头里 AI 最容易串脸，我的做法是把每个角色的定妆图拼成参考板，同框时一起喂进去。',
    tags: ['AI 漫剧', '奇幻', '群像', '定妆'],
    links: [{ label: '观看作品', href: '#' }],
  },
  {
    id: 'assassin-twin',
    title: 'The Assassin Twin Takes On Three Rebellious Heirs',
    subtitle: '刺客双生',
    category: 'AI 漫剧',
    year: 2026,
    platform: '海外短剧 · 古装 / 校园',
    image: './works/assassin-twin.jpg',
    video: './works/clips/assassin-twin.mp4',
    summary: '刺客姐姐冒充双胞胎妹妹，进豪门教三个继承做人。',
    description:
      '一人分饰两角的设定，最考验一致性：姐姐和妹妹必须长得一样但气质不同。我的处理是把两人当作同一个角色建模，只改服装、妆容和体态，让 AI 在「同脸不同人」上少犯错。',
    tags: ['AI 漫剧', '一人两角', '角色一致性'],
    links: [{ label: '观看作品', href: '#' }],
  },
  {
    id: 'animal-girl',
    title: 'The Little Girl Who Talks to Animals',
    subtitle: '会说话的小女孩',
    category: 'AI 漫剧',
    year: 2026,
    platform: '海外短剧 · 萌宠',
    image: './works/animal-girl.jpg',
    summary: '会跟动物说话的小女孩，带着一群动物解决问题。',
    description:
      '萌宠 + 儿童题材，动物镜头全靠生成，难点是「动物要像真的但不能吓人」。这条线的调色我压得比其他剧更亮，饱和度略降，避免 AI 画面那种塑料感。',
    tags: ['AI 漫剧', '萌宠', '调色'],
    links: [{ label: '观看作品', href: '#' }],
  },
  {
    id: 'swapped-faces',
    title: 'She Swapped Faces and Wed Into My Dynasty',
    subtitle: '换脸嫁入豪门',
    category: 'AI 漫剧',
    year: 2026,
    platform: '海外短剧 · 豪门',
    image: './works/swapped-faces.jpg',
    video: './works/clips/swapped-faces.mp4',
    summary: '换脸替嫁进豪门，主角靠一张新脸翻盘。',
    description:
      '换脸设定天然适合 AI 生成——同一张脸出现在两个身份上。室内戏多，光比较稳，所以我把重点放在服装与首饰的连续性上，避免同一个角色在不同集数里戴不同的项链。',
    tags: ['AI 漫剧', '豪门', '连续性'],
    links: [{ label: '观看作品', href: '#' }],
  },
  {
    id: 'monster-talents',
    title: '我能夺取怪兽天赋',
    subtitle: 'I Can Steal Monster Talents',
    category: 'AI 漫剧',
    year: 2026,
    platform: '海外短剧 · 男频玄幻',
    image: './works/monster-talents.jpg',
    summary: '男频玄幻：夺取怪兽天赋，一关一关往上打。',
    description:
      '男频玄幻，设定是「打赢就夺取对方天赋」，天然适合做成关卡式的升级节奏。怪兽与战斗场面对生成模型要求最高，我的做法是先把战斗拆成「起手—压制—反杀」三个镜头模板，再逐集套用。',
    tags: ['AI 漫剧', '玄幻', '战斗分镜'],
    links: [{ label: '观看作品', href: '#' }],
  },
  {
    id: 'ai-ops-workbench',
    title: 'AI 运营工作台',
    subtitle: '抖音 / 小红书内容运营智能体',
    category: 'AI 产品',
    year: 2026,
    metric: '17 个工作台入口',
    platform: '产品负责人 · 可运行 MVP',
    image: './works/product-workbench.svg',
    summary: '把内容记录、数据分析、经验沉淀、生成与发布前检查连成一条流程。',
    description:
      '运营人员常在平台后台、表格和 AI 对话之间反复切换：历史数据难积累，表现好的内容经验难复用，AI 生成的文案还可能偏离商品事实。我规划了一套面向抖音与小红书运营团队的工作台，把这条断掉的链路接起来。',
    tags: ['产品设计', 'AI 工作流', '信息架构'],
    caseStudy: [
      {
        heading: '项目背景',
        body: [
          '已有工具通常只解决「生成」或「排期」中的一环，剩下的拼接仍然靠人。运营的真实痛点是：数据散、经验留不下来、生成内容不可信。',
        ],
      },
      {
        heading: '我的角色',
        body: [
          '产品负责人：从真实运营经历里提炼需求、划定范围、设计信息结构与人工确认规则，并把需求拆成可以独立验收的任务。开发与文档整理用 Codex 协作完成。',
        ],
      },
      {
        heading: '设计与推进过程',
        body: ['先把分散的动作收敛成一条主线：'],
        items: [
          '导入内容与数据 → 发现问题 → 沉淀有效经验与商品事实 → 生成新内容 → 发布前检查 → 人工确认 → 数据回流。',
          '围绕主线分四类入口：运营、创作、资产、管理，让使用者先知道「下一步做什么」。',
          '不追求全自动：数据导入、爆款候选、商品事实与高风险操作都必须先预览再确认。',
          '生成时优先使用已确认的商品事实、账号风格和历史结构；资料不足就提示补充，而不是编一个看起来完整的结果。',
        ],
      },
      {
        heading: '当前结果',
        body: [
          '形成一套可本地运行的高完成度 MVP，17 个正式工作台入口，覆盖桌面与移动端，另有只读公开 Demo；保留了任务记录、权限区分、备份恢复与异常提示。',
        ],
      },
      {
        heading: '边界与下一步',
        body: [
          '页面里的账号、内容与指标都是合成演示数据。它证明流程和交互能跑通，但真实用户样本、平台兼容性与生产效果尚未验证。下一步要请真实运营人员走完整任务，看数据导入是否顺畅、建议是否可执行、生成内容是否真的减少返工。',
        ],
      },
    ],
    links: [{ label: '公开 Demo', href: '#' }],
  },
  {
    id: 'baiyan-geo',
    title: '百言 GEO 内容增长系统',
    subtitle: '从选题到发布的内容工作台',
    category: 'AI 产品',
    year: 2026,
    metric: '70 篇 / 45 篇已发布',
    platform: '方法与产品策划负责人',
    image: './works/geo-system.svg',
    summary: '公司此前没做过 GEO，我从零搭了一套从选题到多平台发布的流程。',
    description:
      '实际动手时我发现，问题研究、资料整理、内容生产、审核和多平台发布分散在不同工具里，人工切换频繁，也很难保证每篇文章都用到经过确认的企业事实。于是我规划了这套 GEO 内容增长系统：先服务公司自身的品牌内容，再把成熟流程用于客户项目。',
    tags: ['GEO', '内容工作台', '多平台发布'],
    caseStudy: [
      {
        heading: '项目背景',
        body: ['公司此前没有开展 GEO，没有方法、没有流程、也没有可复用的企业事实库。'],
      },
      {
        heading: '我的角色',
        body: [
          'GEO 方法与产品策划负责人：方法调研、需求拆解、功能优先级、产品流程、质量标准与项目验收。品牌表达、质量门槛和发布策略由我判断，AI 负责开发协助与内容任务执行。',
        ],
      },
      {
        heading: '设计与推进过程',
        body: ['把人工方法固化成可重复的五步：'],
        items: [
          '研究用户问题 → 准备企业事实 → 设计直接答案 → 分发到合适渠道 → 持续记录收录与品牌提及。',
          '把这五步落到主题、内容活动、知识库、文章工作台和任务记录五个产品模块里。',
          '内容生成后检查事实、来源、重复度与风险；条件不足时进入人工审核，不直接发布。',
          '参与改造 Wechatsync-auto-publish：复用本机 Chrome 已登录状态，把文章同步成草稿、人工确认后再公开发布，并记录失败与恢复状态。覆盖官网、知乎、百家号、公众号、今日头条与 B 站。',
        ],
      },
      {
        heading: '当前结果',
        body: [
          '系统已在公司内部投入使用：19 个内容活动、158 个覆盖单元、125 条知识、70 篇文章，其中 45 篇已发布。研究、知识准备、生成、审核与多平台发布能在同一条流程里推进。',
        ],
      },
      {
        heading: '复盘与下一步',
        body: [
          '项目证明知识库加质量检查能减少信息遗漏，也让任务失败能回到具体步骤定位。仍需验证三件事：任务运行是否稳定、文章是否被持续收录和引用、相近选题是否有足够的信息差异。',
          '下一阶段的重心从「生产了多少内容」转向「哪些内容被找到、被引用并带来有效询盘」。',
        ],
      },
    ],
    links: [{ label: '了解方案', href: '#' }],
  },
  {
    id: 'ai-film-quanzhou',
    title: 'AI 短片《半城烟火，千年泉州》',
    category: 'AI 视频',
    year: 2025,
    featured: true,
    metric: '校级赛道入选',
    platform: 'AI 视频短片',
    image: './works/work-02.svg',
    summary: '用扣子生成画面素材，再用 AE 关键帧补上镜头运动与转场。',
    description:
      '独立完成的 AI 短片：AI 素材生成 + 动态合成。画面素材用扣子（Coze）工作流生成，之后在 After Effects 里用关键帧做镜头推拉、转场与节奏控制，让静态的 AI 画面有真正的运镜感。作品入选校级「数媒科技赛」AI 视频赛道。',
    tags: ['扣子 Coze', 'AI 生成', 'AE 合成', '运镜设计'],
    links: [{ label: '观看作品', href: '#' }],
  },
  {
    id: 'graduation-film',
    title: '毕业视频《夏日落幕，我们毕业再见》',
    category: '影视短片',
    year: 2026,
    featured: true,
    metric: '校内播放 1.5 万+',
    platform: '校园放映',
    image: './works/work-03.svg',
    summary: '总导演 / 后期负责人，统筹 2 人团队完成分镜、拍摄与后期。',
    description:
      '担任总导演与后期负责人，从主题策划、分镜脚本、现场拍摄到最终成片全程负责。团队 2 人，用剪映与 After Effects 完成节奏剪辑、转场与特效合成，校内播放 1.5 万+。这条片子练的是「在有限人手和有限时间里，把情绪节奏做对」。',
    tags: ['总导演', '分镜策划', '现场拍摄', 'AE 特效'],
    links: [{ label: '观看成片', href: '#' }],
  },
  {
    id: 'digital-human',
    title: 'AI 数字人商业视频',
    category: 'AI 视频',
    year: 2026,
    metric: '20+ 条交付',
    platform: '商单 / 投流素材',
    image: './works/work-04.svg',
    summary: '为科技达人与电商达人定制 AI 数字人视频，跑在投流里。',
    description:
      '实习期独立交付 20+ 条定制 AI 视频：用 GPT、Claude 辅助脚本与提示词设计，结合 Midjourney、小云雀、可灵完成图像、数字人与视频生成。为电商达人做的 AI 引流视频，投流消耗量、互动率与完播率均为当期最高。核心不是「生成得像」，而是前三秒能不能留住人。',
    tags: ['AI 数字人', '提示词设计', '投流素材', '数据复盘'],
    links: [{ label: '案例片段', href: '#' }],
  },
  {
    id: 'micro-films',
    title: '微电影《高考》《听说》',
    category: '影视短片',
    year: 2025,
    metric: '2 部作品',
    platform: '剧情短片',
    image: './works/work-05.svg',
    summary: '编剧 / 剪辑，用 Premiere Pro 完成剪辑、调色与音画对位。',
    description:
      '参与剧本撰写与全片后期：分场结构、对白打磨，以及用 Premiere Pro 完成剪辑、调色与音画对位。两部片子是叙事型短视频的基本功——什么时候该留白、什么时候该切，都是在剪辑台上学会的。',
    tags: ['编剧', 'PR 剪辑', '调色', '音画对位'],
    links: [{ label: '观看片段', href: '#' }],
  },
  {
    id: 'campus-event',
    title: '毕业晚会与校园活动拍摄',
    category: '影视短片',
    year: 2025,
    metric: '多机位现场',
    platform: '活动记录 / 编导',
    image: './works/work-06.svg',
    summary: '晚会与大型校园活动的现场拍摄、编导与成片。',
    description:
      '毕业晚会等大型活动的现场拍摄与编导：提前踩点定机位，现场跟拍关键流程，活动结束后按节奏剪成回顾片。这类活儿的难点是一次过——灯光、机位、人员调度都得在开始前想清楚。',
    tags: ['现场编导', '多机位', '跟拍', '活动回顾'],
    links: [{ label: '观看回顾片', href: '#' }],
  },
  {
    id: 'photo-commercial',
    title: '商业摄影与活动跟拍',
    category: '摄影',
    year: 2025,
    metric: '商单',
    platform: '人像 / 活动 / 产品',
    image: './works/work-07.svg',
    summary: '外出接单的人像、活动现场与产品拍摄，含后期。',
    description:
      '外出接的商业摄影单：活动现场跟拍、人像与产品。拍摄之外也负责选片与后期，交付给客户的是能直接用的图，不是一堆原片。摄影训练的是构图和光线的判断力，这部分能力会反过来影响我拍视频时的画面意识。',
    tags: ['人像', '活动跟拍', '产品', '后期修图'],
    links: [{ label: '看图集', href: '#' }],
  },
  {
    id: 'blender-3d',
    title: 'Blender 三维建模与场景',
    category: '三维与游戏',
    year: 2026,
    metric: '轻量场景',
    platform: '三维 / 道具 / 场景',
    image: './works/work-08.svg',
    summary: '道具与轻量场景建模，用于短片画面与电商视觉。',
    description:
      '用 Blender 做道具与轻量场景建模：先出低模定比例，再补材质与灯光渲染。实际用途是给短片补 AI 生成不了的具体物件，以及给电商视觉做产品展示角度。',
    tags: ['Blender', '建模', '材质灯光', '渲染'],
    links: [{ label: '看模型', href: '#' }],
  },
  {
    id: 'unity-interactive',
    title: 'Unity 交互场景与游戏原型',
    category: '三维与游戏',
    year: 2025,
    metric: '课程作品',
    platform: 'Unity / 交互',
    image: './works/work-09.svg',
    summary: '用 Unity 搭的可交互场景原型，配合 Adobe Animate 做二维动画。',
    description:
      '课程与自主练习中的交互场景：Unity 里搭场景、写基础交互逻辑，配合 Adobe Animate 做二维动画部分。这类项目让我对「镜头之外的时间轴」有了另一层理解——交互里没有剪辑点，只有玩家的操作。',
    tags: ['Unity', '交互逻辑', 'Animate', '二维动画'],
    links: [{ label: '看演示', href: '#' }],
  },
  {
    id: 'ecommerce-visual',
    title: '电商视觉与详情页',
    category: '电商视觉',
    year: 2025,
    metric: 'A/B 测试迭代',
    platform: '店铺 / 详情页 / 主图',
    image: './works/work-10.svg',
    summary: '详情页、主图与引流短视频，配合 A/B 测试持续优化。',
    description:
      '电商运营实习期间的视觉产出：详情页、主图与引流短视频素材，配合 A/B 测试看点击与转化，再回头改版式与文案。这段经历让我习惯用数据判断一个画面好不好，而不是只凭感觉。',
    tags: ['详情页', '主图', '短视频素材', 'A/B 测试'],
    links: [{ label: '看案例', href: '#' }],
  },
]

/** 「精选」区块显示哪些（按 featured 标记取前 3 个） */
export const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)
