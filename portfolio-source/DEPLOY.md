# 部署笔记（当前状态，2026-11-17）

## 现状

- 仓库：https://github.com/MAUCAT99/portfolio （Public）
- 代码实际在**子目录** `portfolio-source/` 里（上传时把文件夹本身拖进去了）
- 根目录有 `.github/workflows/deploy.yml`，已针对子目录配置 `working-directory`
- Pages：**站点尚未创建**（API `/repos/MAUCAT99/portfolio/pages` 返回 404）

## 第一次运行失败的原因

Run #1（2026-11-17 08:01 UTC）在 `actions/configure-pages@v5` 这一步失败：

```
npm install      ✅
npm run build    ✅
configure-pages  ❌  ← 这一步
upload-artifact  ⏭ 跳过
```

原因：仓库还没有 Pages 站点，`configure-pages` 默认只做配置、不创建站点。

## 修复（两种，选一）

### A. 给 workflow 加 enablement（推荐）

`configure-pages` 那一步改成：

```yaml
      - uses: actions/configure-pages@v5
        with:
          enablement: true
```

提交后会触发新一次运行，这一步会顺手把 Pages 站点创建出来。

### B. 先手动创建 Pages 站点再重跑

设置 → Pages → Source 选 `GitHub Actions` → 保存后再点 Actions → Re-run all jobs。

## 怎么判断成功

1. Actions 里两次 job（build / deploy）都变绿；
2. `https://api.github.com/repos/MAUCAT99/portfolio/pages` 返回 200 而不是 404；
3. 打开 `https://maucat99.github.io/portfolio/`。

## 临时公网地址（GitHub 修好之前可用）

```powershell
E:\dsh\tools\cloudflared.exe tunnel --url http://127.0.0.1:8080 --no-autoupdate
```

会输出一个 `https://xxx.trycloudflare.com` 地址，**进程关掉就失效**，只适合临时给人看。

## 顺便修掉的一个问题

`index.html` 里有几处从模板继承下来的静态兜底文案（首屏姓名、地点、邮箱都是别人的）。
浏览器里 JS 会覆盖，但爬虫、微信分享预览、禁用 JS 的场景会直接读到这些内容。
已改成谢添德本人的信息，`dist/index.html` 现在无残留。
