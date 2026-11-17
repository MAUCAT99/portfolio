"""把本地素材压成网页尺寸。源文件不动，只读。"""
from PIL import Image
import os

SRC = r"E:\工作内容\爆款1200万播放量"
OUT = r"E:\dsh\portfolio\public\works"
os.makedirs(OUT, exist_ok=True)


def export(src, name, width, quality=82):
    im = Image.open(os.path.join(SRC, src)).convert("RGB")
    if im.width > width:
        im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    dst = os.path.join(OUT, name)
    im.save(dst, quality=quality, optimize=True, progressive=True)
    print(f"{name:34s} {im.width}x{im.height}  {round(os.path.getsize(dst)/1024)} KB")


export(r"海报\竖版810x1170.png", "noble-game-poster.jpg", 900)
export(r"5.工程截图\剪辑\1.png", "noble-game-resolve.jpg", 1600, 80)
export(r"5.工程截图\分镜\1.png", "noble-game-storyboard.jpg", 1600, 80)
export(r"6.角色定妆\男主埃利奥特\1.png", "noble-game-char-lead.jpg", 800)
export(r"6.角色定妆\男二菲力克斯\1.png", "noble-game-char-felix.jpg", 800)
