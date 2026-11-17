/**
 * 生成占位图。跑一次就够：node tools/make-placeholders.mjs
 * 换成真图时，直接用同名文件覆盖 public/works/ 下的文件即可（.jpg/.png 都行，
 * 记得同步改 src/data.js 里的 image 后缀）。
 */
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const outDir = join(here, '..', 'public', 'works')
mkdirSync(outDir, { recursive: true })

const palettes = [
  ['#06101a', '#0e2b3c', '#35d6c8'],
  ['#080a18', '#1a1440', '#8b7bff'],
  ['#05131a', '#0f3440', '#4de1d0'],
  ['#0a0b1e', '#221a4a', '#a48bff'],
  ['#07080f', '#1b1d30', '#cdd6ff'],
  ['#08101a', '#132a44', '#5b9dff'],
  ['#061315', '#123b38', '#38d9a9'],
  ['#09090f', '#261a3d', '#c77bff'],
  ['#071018', '#121a2b', '#7aa2f7'],
  ['#090c18', '#291f45', '#b39bff'],
]

const labels = [
  '海外漫剧',
  'AI 短片',
  '毕业片',
  '数字人',
  '微电影',
  '晚会现场',
  '商业摄影',
  '三维建模',
  'Unity',
  '电商视觉',
]

const grain = `
  <filter id="grain">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/>
    <feColorMatrix type="saturate" values="0"/>
  </filter>`

const defs = (id, a, b, c) => `
  <defs>
    <linearGradient id="g-${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${a}"/>
      <stop offset="58%" stop-color="${b}"/>
      <stop offset="100%" stop-color="${a}"/>
    </linearGradient>
    <radialGradient id="r-${id}" cx="0.72" cy="0.26" r="0.62">
      <stop offset="0%" stop-color="${c}" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="${c}" stop-opacity="0"/>
    </radialGradient>
    ${grain}
  </defs>`

const makeWork = (index, [a, b, c], label) => {
  const id = String(index + 1).padStart(2, '0')
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="1600" height="1000" role="img" aria-label="${label} 占位图">
  ${defs(id, a, b, c)}
  <rect width="1600" height="1000" fill="url(#g-${id})"/>
  <rect width="1600" height="1000" fill="url(#r-${id})"/>
  <g fill="none" stroke="#ffffff" stroke-opacity="0.07" stroke-width="1.5">
    <circle cx="800" cy="500" r="420"/>
    <circle cx="800" cy="500" r="300"/>
    <circle cx="800" cy="500" r="180"/>
    <path d="M0 760 C 320 700, 520 860, 800 800 S 1320 690, 1600 750"/>
  </g>
  <rect width="1600" height="1000" filter="url(#grain)" opacity="0.16"/>
  <text x="800" y="470" text-anchor="middle" fill="#ffffff" fill-opacity="0.92" font-family="Segoe UI, PingFang SC, Microsoft YaHei, sans-serif" font-size="150" font-weight="600" letter-spacing="-3">${label}</text>
  <text x="800" y="556" text-anchor="middle" fill="#ffffff" fill-opacity="0.55" font-family="Segoe UI, PingFang SC, Microsoft YaHei, sans-serif" font-size="34" letter-spacing="8">WORK ${id}</text>
  <text x="800" y="620" text-anchor="middle" fill="#ffffff" fill-opacity="0.3" font-family="Segoe UI, PingFang SC, Microsoft YaHei, sans-serif" font-size="24" letter-spacing="2">占位图 · 替换 public/works/work-${id}.jpg</text>
</svg>
`
}

palettes.forEach((palette, index) => {
  writeFileSync(join(outDir, `work-${String(index + 1).padStart(2, '0')}.svg`), makeWork(index, palette, labels[index]), 'utf8')
})

// 头像占位（4:5）
writeFileSync(
  join(outDir, 'portrait.svg'),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 800" width="640" height="800" role="img" aria-label="头像占位图">
  ${defs('p', '#080b14', '#1b2338', '#35d6c8')}
  <rect width="640" height="800" fill="url(#g-p)"/>
  <rect width="640" height="800" fill="url(#r-p)"/>
  <circle cx="320" cy="330" r="104" fill="#ffffff" fill-opacity="0.12"/>
  <path d="M120 800c0-124 90-206 200-206s200 82 200 206Z" fill="#ffffff" fill-opacity="0.12"/>
  <rect width="640" height="800" filter="url(#grain)" opacity="0.14"/>
  <text x="320" y="752" text-anchor="middle" fill="#ffffff" fill-opacity="0.5" font-family="Segoe UI, PingFang SC, Microsoft YaHei, sans-serif" font-size="24" letter-spacing="3">替换为你的照片</text>
</svg>
`,
  'utf8',
)

// 站点图标：XTD 字标（青紫描边）
writeFileSync(
  join(here, '..', 'public', 'favicon.svg'),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <defs>
    <linearGradient id="x" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#35d6c8"/>
      <stop offset="100%" stop-color="#8b7bff"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="#05060b"/>
  <rect x="2" y="2" width="60" height="60" rx="12.5" fill="none" stroke="url(#x)" stroke-width="2" opacity="0.9"/>
  <text x="32" y="41" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="25" font-weight="700" letter-spacing="0.5" fill="url(#x)">XTD</text>
</svg>
`,
  'utf8',
)

console.log('占位图已生成：public/works/（9 张作品图 + 头像）与 public/favicon.svg')
