import './style.css'
import { site, projects, featuredProjects } from './data.js'

/* ------------------------------------------------------------------ *
 * 小工具
 * ------------------------------------------------------------------ */
const $ = (sel, root = document) => root.querySelector(sel)
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)]

const el = (tag, className, text) => {
  const node = document.createElement(tag)
  if (className) node.className = className
  if (text != null) node.textContent = text
  return node
}

/** 图片加载失败时保留渐变底，不留破图图标 */
const guardImage = (img) => {
  img.addEventListener(
    'error',
    () => {
      img.closest('.media')?.classList.add('is-missing')
      img.setAttribute('aria-hidden', 'true')
    },
    { once: true },
  )
}

/** 逐个揭示：给同一批元素排一个递增延迟 */
const stagger = (nodes, step = 70) =>
  nodes.forEach((node, i) => node.style.setProperty('--delay', `${i * step}ms`))

/* ------------------------------------------------------------------ *
 * 主题：跟随系统，可手动切换并记住
 * ------------------------------------------------------------------ */
const THEME_KEY = 'portfolio-theme'
const root = document.documentElement

const applyTheme = (theme) => {
  root.dataset.theme = theme
  $('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f6f5f2' : '#0c0c10')
  $('#theme-toggle')?.setAttribute('aria-label', theme === 'light' ? '切换到深色主题' : '切换到浅色主题')
}

const storedTheme = (() => {
  try {
    return localStorage.getItem(THEME_KEY)
  } catch {
    return null
  }
})()

/** 分享预览时可以用 ?theme=light / ?theme=dark 强制主题（不写入本地存储） */
const urlTheme = new URLSearchParams(window.location.search).get('theme')
const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'

applyTheme(
  urlTheme === 'light' || urlTheme === 'dark' ? urlTheme : storedTheme || systemTheme,
)

$('#theme-toggle')?.addEventListener('click', () => {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light'
  applyTheme(next)
  try {
    localStorage.setItem(THEME_KEY, next)
  } catch {
    /* 隐私模式下写不进去，忽略 */
  }
})

/* ------------------------------------------------------------------ *
 * 文本与数据渲染
 * ------------------------------------------------------------------ */
$('#brand-name').textContent = site.name
$('#brand-alias').textContent = site.alias
$('#footer-name').textContent = site.name
$('#footer-alias').textContent = site.alias
$('#year').textContent = String(site.year)
$('#hero-location').textContent = site.location
$('#hero-tagline').textContent = site.tagline
$('#hero-greeting').textContent = `${site.greeting}${site.name}`

/* 身份行按「·」拆成不可断词的片段，窄屏只在片段之间换行，
   不会出现「内容生 / 成」这种断在词中间的情况 */
const roleParts = site.role.split('·').map((part) => part.trim())
$('#hero-role').replaceChildren(
  ...roleParts.flatMap((part, index) => {
    const isLast = index === roleParts.length - 1
    const span = el('span', 'role-part', isLast ? part : `${part} ·`)
    return index === 0 ? [span] : [document.createTextNode(' '), span]
  }),
)

$('#hero-stats').append(
  ...site.stats.flatMap(({ value, label }) => [
    (() => {
      const wrap = el('div', 'stat')
      wrap.append(el('dt', null, value), el('dd', null, label))
      return wrap
    })(),
  ]),
)

$('#marquee-track').append(
  ...[...site.marquee, ...site.marquee].map((word) => el('span', 'marquee-item', word)),
)

const mail = $('#contact-mail')
mail.href = `mailto:${site.email}`
mail.textContent = site.email

$('#socials').append(
  ...site.socials.map(({ label, href }) => {
    const link = el('a', 'social', label)
    link.href = href
    link.target = '_blank'
    link.rel = 'noreferrer noopener'
    return link
  }),
)

$('#skills').append(
  ...site.skills.map(({ group, items }) => {
    const block = el('div', 'skill-group')
    block.append(el('h3', 'skill-group-title', group))
    const list = el('ul', 'tags')
    list.append(...items.map((item) => el('li', 'tag', item)))
    block.append(list)
    return block
  }),
)

$('#timeline').append(
  ...site.timeline.map(({ period, title, detail }) => {
    const item = el('li', 'timeline-item')
    item.append(
      el('p', 'timeline-period', period),
      el('h3', 'timeline-title', title),
      el('p', 'timeline-detail', detail),
    )
    return item
  }),
)

$('#about-prose').append(...site.about.map((paragraph) => el('p', null, paragraph)))

/* ------------------------------------------------------------------ *
 * 精选作品
 * ------------------------------------------------------------------ */
const buildTags = (tags, className = 'tags') => {
  const list = el('ul', className)
  list.append(...tags.map((tag) => el('li', 'tag', tag)))
  return list
}

const featuredHost = $('#featured')
featuredHost.append(
  ...featuredProjects.map((project, index) => {
    const article = el('article', 'feature reveal')
    if (project.portrait) article.classList.add('is-poster')
    article.dataset.id = project.id

    const media = el('div', 'feature-media media')
    const img = el('img')
    img.src = project.image
    img.alt = `${project.title} 预览图`
    img.width = 1600
    img.height = 1000
    img.loading = index === 0 ? 'eager' : 'lazy'
    guardImage(img)

    const openButton = el('button', 'media-hit')
    openButton.type = 'button'
    openButton.dataset.open = project.id
    openButton.setAttribute('aria-label', `查看 ${project.title} 详情`)
    media.append(img, el('span', 'feature-num', String(index + 1).padStart(2, '0')), openButton)
    if (project.metric) media.append(el('span', 'media-badge', project.metric))

    const body = el('div', 'feature-body')
    body.append(
      el('p', 'feature-meta', `${project.category} · ${project.year}`),
      el('h3', 'feature-title', project.title),
    )
    if (project.subtitle) body.append(el('p', 'feature-subtitle', project.subtitle))
    body.append(
      el('p', 'feature-summary', project.summary),
      buildTags(project.tags),
    )
    const more = el('button', 'link-button', '看详情')
    more.type = 'button'
    more.dataset.open = project.id
    more.append(el('span', 'arrow', '→'))
    body.append(more)

    article.append(media, body)
    return article
  }),
)

/* ------------------------------------------------------------------ *
 * 全部作品 + 分类筛选
 * ------------------------------------------------------------------ */
const categories = ['全部', ...new Set(projects.map((p) => p.category))]

const filtersHost = $('#filters')
const gridHost = $('#grid')
const emptyState = $('#empty-state')

filtersHost.append(
  ...categories.map((name, index) => {
    const chip = el('button', 'chip', name)
    chip.type = 'button'
    chip.dataset.filter = name
    chip.setAttribute('aria-pressed', String(index === 0))
    return chip
  }),
)

gridHost.append(
  ...projects.map((project) => {
    const card = el('button', 'card reveal')
    card.type = 'button'
    card.dataset.open = project.id
    card.dataset.category = project.category
    card.setAttribute('aria-label', `${project.title}，${project.category}，${project.year}`)

    const media = el('span', 'card-media media')
    const img = el('img')
    img.src = project.image
    img.alt = ''
    img.width = 1600
    img.height = 1000
    img.loading = 'lazy'
    guardImage(img)
    media.append(img)
    if (project.metric) media.append(el('span', 'media-badge', project.metric))
    if (project.video) media.append(el('span', 'card-play', '▶'))

    const body = el('span', 'card-body')
    body.append(
      el('span', 'card-meta', `${project.category} · ${project.year}`),
      el('span', 'card-title', project.title),
      el('span', 'card-summary', project.summary),
    )

    card.append(media, body)
    return card
  }),
)

const cards = $$('.card', gridHost)
const chips = $$('.chip', filtersHost)

const applyFilter = (name) => {
  let visible = 0
  cards.forEach((card) => {
    const match = name === '全部' || card.dataset.category === name
    card.hidden = !match
    if (match) visible += 1
  })
  chips.forEach((chip) => chip.setAttribute('aria-pressed', String(chip.dataset.filter === name)))
  emptyState.hidden = visible > 0
}

filtersHost.addEventListener('click', (event) => {
  const chip = event.target.closest('.chip')
  if (!chip) return
  applyFilter(chip.dataset.filter)
})

/* ------------------------------------------------------------------ *
 * 详情弹窗
 * ------------------------------------------------------------------ */
const dialog = $('#detail')
const detailImage = $('#detail-image')

/** 让每个作品详情都有可分享的链接：#work-<id> */
const syncHash = (id) => {
  const base = window.location.pathname + window.location.search
  window.history.replaceState(null, '', id ? `${base}#work-${id}` : base)
}

const openDetail = (id) => {
  const project = projects.find((p) => p.id === id)
  if (!project || !dialog) return

  detailImage.src = project.image
  detailImage.alt = `${project.title} 预览图`
  detailImage.closest('.media')?.classList.remove('is-missing')
  detailImage.closest('.detail-media')?.classList.toggle('is-poster', Boolean(project.portrait))

  /* 有视频就播放，没有就回到封面 */
  const videoNode = $('#detail-video')
  const mediaBox = detailImage.closest('.detail-media')
  if (project.video) {
    videoNode.src = project.video
    videoNode.poster = project.image
    videoNode.hidden = false
    mediaBox?.classList.add('has-video')
  } else {
    videoNode.pause()
    videoNode.removeAttribute('src')
    videoNode.load()
    videoNode.hidden = true
    mediaBox?.classList.remove('has-video')
  }
  $('#detail-category').textContent = project.category
  $('#detail-year').textContent = String(project.year)
  $('#detail-title').textContent = project.title
  const subtitleNode = $('#detail-subtitle')
  subtitleNode.textContent = project.subtitle ?? ''
  subtitleNode.hidden = !project.subtitle
  $('#detail-summary').textContent = project.summary
  $('#detail-desc').textContent = project.description

  const caseHost = $('#detail-case')
  const sections = project.caseStudy ?? []
  caseHost.replaceChildren(
    ...sections.map(({ heading, body, items }) => {
      const section = el('section', 'case-section')
      section.append(el('h3', 'case-heading', heading))
      ;(body ?? []).forEach((paragraph) => section.append(el('p', 'case-body', paragraph)))
      if (items?.length) {
        const list = el('ul', 'case-list')
        list.append(...items.map((item) => el('li', null, item)))
        section.append(list)
      }
      return section
    }),
  )
  caseHost.hidden = sections.length === 0

  const galleryHost = $('#detail-gallery')
  galleryHost.replaceChildren(
    ...(project.gallery ?? []).map(({ src, caption }) => {
      const figure = el('figure', 'gallery-item')
      const image = el('img')
      image.src = src
      image.alt = caption
      image.loading = 'lazy'
      figure.append(image, el('figcaption', null, caption))
      return figure
    }),
  )
  galleryHost.hidden = !(project.gallery ?? []).length

  const metricLine = [project.platform, project.metric].filter(Boolean).join(' · ')
  const metricNode = $('#detail-metric')
  metricNode.textContent = metricLine
  metricNode.hidden = metricLine === ''

  const tags = $('#detail-tags')
  tags.replaceChildren(...project.tags.map((tag) => el('li', 'tag', tag)))

  const links = $('#detail-links')
  links.replaceChildren(
    ...project.links.map(({ label, href }) => {
      const link = el('a', 'button ghost small', label)
      link.href = href
      if (href.startsWith('http')) {
        link.target = '_blank'
        link.rel = 'noreferrer noopener'
      }
      return link
    }),
  )

  dialog.showModal()
  document.body.classList.add('is-locked')
  syncHash(project.id)
}

const closeDetail = () => {
  const videoNode = $('#detail-video')
  if (videoNode) {
    videoNode.pause()
    videoNode.removeAttribute('src')
    videoNode.load()
  }
  dialog?.close()
  document.body.classList.remove('is-locked')
  syncHash(null)
}

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-open]')
  if (trigger) {
    event.preventDefault()
    openDetail(trigger.dataset.open)
    return
  }
  if (event.target === dialog) closeDetail()
})

$('#detail-close').addEventListener('click', closeDetail)
dialog?.addEventListener('close', () => document.body.classList.remove('is-locked'))

/* 卡片支持 Enter / 空格（button 原生支持，这里只是兜底） */
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && dialog?.open) closeDetail()
})

/* ------------------------------------------------------------------ *
 * 顶部导航：滚动后加背景、锚点平滑滚动
 * ------------------------------------------------------------------ */
const header = $('.site-header')
const onScroll = () => header.dataset.elevated = String(window.scrollY > 12)
onScroll()
window.addEventListener('scroll', onScroll, { passive: true })

/* ------------------------------------------------------------------ *
 * 滚动揭示
 * ------------------------------------------------------------------ */
const revealNodes = $$('.reveal')
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

stagger(revealNodes)

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealNodes.forEach((node) => node.classList.add('in-view'))
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      })
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  )
  revealNodes.forEach((node) => observer.observe(node))
}

/* 首帧就把首屏内容放出来，避免白屏等待观察器 */
requestAnimationFrame(() => {
  $$('.hero .reveal').forEach((node) => node.classList.add('in-view'))
})

/* 直接打开某个作品的深链：#work-<id> */
const deepLink = window.location.hash.match(/^#work-(.+)$/)
if (deepLink) openDetail(decodeURIComponent(deepLink[1]))
