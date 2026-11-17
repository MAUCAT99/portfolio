"""把取到的帧裁成 3:4 封面写进 public/works。取景偏上，保人脸。"""
from PIL import Image
import os

SRC = r"E:\dsh\portfolio\.frames"
OUT = r"E:\dsh\portfolio\public\works"

# 项目名 -> 取帧文件名（两条用了备选时间点）
PICKS = {
    "trash-millions": "trash-millions.png",
    "hidden-heir-wife": "hidden-heir-wife.png",
    "christmas-daddy": "christmas-daddy.png",
    "faceblind-bride": "faceblind-bride.png",
    "assassin-twin": "assassin-twin-b.png",
    "animal-girl": "animal-girl.png",
    "swapped-faces": "swapped-faces.png",
    "monster-talents": "monster-talents-b.png",
}

for name, file in PICKS.items():
    path = os.path.join(SRC, file)
    im = Image.open(path).convert("RGB")
    w, h = im.size
    target_ratio = 3 / 4
    if w / h > target_ratio:
        new_w = int(h * target_ratio)
        left = (w - new_w) // 2
        im = im.crop((left, 0, left + new_w, h))
    else:
        new_h = int(w / target_ratio)
        top = int((h - new_h) * 0.18)  # 偏上取景，避免切头
        im = im.crop((0, top, w, top + new_h))

    # 保持原始像素宽度（不放大），只做轻微锐化
    dst = os.path.join(OUT, name + ".jpg")
    im.save(dst, quality=84, optimize=True, progressive=True)
    print(f"{name:18s} {im.width}x{im.height}  {round(os.path.getsize(dst)/1024)} KB")
