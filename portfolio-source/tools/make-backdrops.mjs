/**
 * 生成电影感氛围底图（青紫）。
 *
 * 为什么不是真照片：这些是「占位氛围」，等你把素材放进来后，
 * 直接用同名文件覆盖 public/backdrops/ 下的文件（.jpg 也行，改一下 index.html 的 src 后缀）
 * 就能换成真实剧照/空镜。建议用你自己拍的夜景、雾、霓虹、漏光——
 * 既合法又有辨识度，比网图更值钱。
 *
 * 跑法：node tools/make-backdrops.mjs
 */
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const outDir = join(here, '..', 'public', 'backdrops')
mkdirSync(outDir, { recursive: true })

const W = 1920
const H = 1200

const grain = `
    <filter id="grain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>`

const soft = (id, blur) => `
    <filter id="soft-${id}" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="${blur}" />
    </filter>`

const frame = ({ id, top, bottom, blobs, streak, vignette = 0.85 }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="电影感氛围底图">
  <defs>
    <linearGradient id="base-${id}" x1="0" y1="0" x2="0.7" y2="1">
      <stop offset="0%" stop-color="${top}" />
      <stop offset="100%" stop-color="${bottom}" />
    </linearGradient>
    <radialGradient id="vig-${id}" cx="0.5" cy="0.46" r="0.78">
      <stop offset="52%" stop-color="#000" stop-opacity="0" />
      <stop offset="100%" stop-color="#000" stop-opacity="${vignette}" />
    </radialGradient>
    ${blobs.map((_, i) => soft(`${id}-${i}`, 150)).join('')}
    ${grain}
  </defs>

  <rect width="${W}" height="${H}" fill="url(#base-${id})" />

  ${blobs
    .map(
      (b, i) => `<ellipse cx="${b.x}" cy="${b.y}" rx="${b.rx}" ry="${b.ry}" fill="${b.color}"
      opacity="${b.opacity}" filter="url(#soft-${id}-${i})" transform="rotate(${b.rotate ?? 0} ${b.x} ${b.y})" />`,
    )
    .join('\n  ')}

  <ellipse cx="${streak.x}" cy="${streak.y}" rx="${streak.rx}" ry="${streak.ry}"
    fill="${streak.color}" opacity="${streak.opacity}" transform="rotate(${streak.rotate} ${streak.x} ${streak.y})"
    filter="url(#soft-${id}-0)" />

  <rect width="${W}" height="${H}" fill="url(#vig-${id})" />
  <rect width="${W}" height="${H}" filter="url(#grain)" opacity="0.13" style="mix-blend-mode:screen" />
</svg>
`

const scenes = [
  {
    // 夜色 + 霓虹冷光
    file: 'atmosphere-01.svg',
    id: 'a',
    top: '#04060e',
    bottom: '#0a0716',
    blobs: [
      { x: 1450, y: 320, rx: 560, ry: 420, color: '#7b6bff', opacity: 0.5, rotate: -18 },
      { x: 380, y: 860, rx: 620, ry: 380, color: '#1fb8c9', opacity: 0.4, rotate: 12 },
      { x: 980, y: 640, rx: 320, ry: 240, color: '#2a1f5e', opacity: 0.55 },
    ],
    streak: { x: 1200, y: 520, rx: 760, ry: 46, color: '#bff3ff', opacity: 0.12, rotate: -14 },
    vignette: 0.9,
  },
  {
    // 雾 + 青紫渐层
    file: 'atmosphere-02.svg',
    id: 'b',
    top: '#050a12',
    bottom: '#080611',
    blobs: [
      { x: 640, y: 380, rx: 700, ry: 300, color: '#36d6c8', opacity: 0.3, rotate: -8 },
      { x: 1500, y: 820, rx: 720, ry: 340, color: '#5b4bff', opacity: 0.34, rotate: 10 },
      { x: 1060, y: 240, rx: 480, ry: 220, color: '#123a52', opacity: 0.6 },
    ],
    streak: { x: 520, y: 720, rx: 620, ry: 30, color: '#c8f7ff', opacity: 0.1, rotate: 6 },
    vignette: 0.82,
  },
  {
    // 胶片漏光 + 底片黑
    file: 'atmosphere-03.svg',
    id: 'c',
    top: '#03040a',
    bottom: '#0b0512',
    blobs: [
      { x: 260, y: 180, rx: 420, ry: 300, color: '#ff7bd5', opacity: 0.16, rotate: -24 },
      { x: 1180, y: 900, rx: 760, ry: 360, color: '#2ad9d0', opacity: 0.26, rotate: 8 },
      { x: 1700, y: 220, rx: 380, ry: 280, color: '#6b5cff', opacity: 0.3 },
    ],
    streak: { x: 1500, y: 560, rx: 520, ry: 22, color: '#ffd9f4', opacity: 0.14, rotate: -32 },
    vignette: 0.92,
  },
]

for (const scene of scenes) {
  writeFileSync(join(outDir, scene.file), frame(scene), 'utf8')
  console.log('backdrop:', scene.file)
}
