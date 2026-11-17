# 部署到 GitHub Pages（网页上传版）

不需要装 git，全部在浏览器里完成。全程约 10 分钟。

---

## 第 0 步：先确认仓库是公开的

GitHub Pages 在**免费账号**上只能发布**公开仓库**的内容。

- 私有仓库 + 免费账号 → Pages 会报 "Your site is not being published"，怎么点都没用。
- 所以这个作品集仓库请设为 **Public**。

作品集本来就是给人看的，公开没有损失；但如果里面有不想公开的素材，先把它们从 `public/` 里删掉再上传。

---

## 第 1 步：新建仓库

1. 打开 https://github.com/new
2. **Repository name** 填 `portfolio`（或任意名字，后面 URL 会用到）
3. 选 **Public**
4. **不要**勾选 "Add a README file"（我们已经有了，勾了会冲突）
5. 点 **Create repository**

创建完页面会显示 "Quick setup"，忽略它，直接看第 2 步。

---

## 第 2 步：上传文件

1. 解压 `portfolio-source.zip`，得到 `portfolio` 文件夹
2. 在刚建好的仓库页面点 **uploading an existing file**（或者地址栏加 `/upload/main`）
3. 把文件夹里**所有内容**（不是文件夹本身）拖进上传框
   - 包括 `.github` 文件夹。它是隐藏目录，`Ctrl+H` 才看得到；如果拖不进去，见下面的「备选：命令上传」
4. 等进度条走完，底部 Commit changes 里填一句 `init portfolio`，点 **Commit changes**

> 一次拖太多文件时浏览器可能卡住。如果超过 100 个文件，分两三次提交也行，GitHub 会累加。

---

## 第 3 步：打开 Pages

1. 仓库页 → **Settings**（顶部右侧）
2. 左侧栏 → **Pages**
3. **Source** 选 **GitHub Actions**（不要选 "Deploy from a branch"）
4. 不用点 Save，选完即生效

---

## 第 4 步：看它构建

1. 点仓库顶部的 **Actions** 标签
2. 应该能看到一条 `Deploy to GitHub Pages` 的 workflow 正在跑（黄点）
3. 等 1–3 分钟，变成绿色对勾

如果第一次没自动跑：在该页面点 `Deploy to GitHub Pages` → **Run workflow** → 选 `main` → 运行。

---

## 第 5 步：拿到地址

回到 **Settings → Pages**，顶部会显示：

```
Your site is live at https://<你的用户名>.github.io/portfolio/
```

这个地址就是可以直接发人的链接。

---

## 出问题时

| 现象 | 原因 | 处理 |
| --- | --- | --- |
| Actions 里没有 workflow | `.github/workflows/deploy.yml` 没上传成功 | 重新上传 `.github` 目录，或改用下面的命令上传 |
| Actions 红了，报 npm 错误 | 依赖装不上 | 点开日志看具体报错，把日志发我 |
| Pages 页显示 not published | 仓库还是 Private | 改成 Public（Settings → General → 最底部 Danger Zone → Change visibility） |
| 打开是 404 | 构建还没完成，或 Source 选错了 | 等一分钟再刷新；确认 Source 是 GitHub Actions |
| 页面出来了但没样式 | `base` 配置问题 | 我们的 `vite.config.js` 已经是 `base: './'`，正常不会出 |

---

## 备选：用命令上传（如果网页拖拽不顺手）

装好 Git 后，在 `portfolio` 文件夹里执行：

```sh
git init
git add .
git commit -m "init portfolio"
git branch -M main
git remote add origin https://github.com/<用户名>/portfolio.git
git push -u origin main
```

`.gitignore` 已经排除了 `node_modules/`、`dist/`、`.shots/`，不会把依赖推上去。

---

## 更新内容以后

改完 `src/data.js` 或换完图片，再上传一次（网页端同样操作，或 `git push`），Actions 会自动重新构建部署，**不用再进 Settings**。
