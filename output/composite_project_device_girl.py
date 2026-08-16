from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter, ImageDraw


ROOT = Path(r"C:\D\git repositories\personal_design")
DEVICE_PATH = ROOT / "output" / "project-device-01-simplified.png"
GIRL_PATH = Path(r"C:\Users\zengge\OneDrive\Desktop\image 28367.png")
OUT_PATH = ROOT / "output" / "project-device-01-girl-transparent.png"


def remove_connected_black_background(image: Image.Image, threshold: int = 18, soft: int = 28) -> Image.Image:
    rgba = image.convert("RGBA")
    # Compute connectivity on a smaller proxy for speed, then upscale the mask.
    proxy_scale = 0.28
    proxy = rgba.resize((max(1, int(rgba.width * proxy_scale)), max(1, int(rgba.height * proxy_scale))), Image.Resampling.BOX)
    arr_proxy = np.array(proxy)
    rgb_proxy = arr_proxy[:, :, :3].astype(np.int16)
    h, w = arr_proxy.shape[:2]

    dark = np.max(rgb_proxy, axis=2) <= soft
    seed = np.max(rgb_proxy, axis=2) <= threshold
    visited = np.zeros((h, w), dtype=bool)
    q = deque()

    def push(y, x):
        if not visited[y, x] and seed[y, x]:
            visited[y, x] = True
            q.append((y, x))

    for x in range(w):
        push(0, x)
        push(h - 1, x)
    for y in range(h):
        push(y, 0)
        push(y, w - 1)

    while q:
        y, x = q.popleft()
        for ny, nx in ((y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)):
            if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx] and dark[ny, nx]:
                visited[ny, nx] = True
                q.append((ny, nx))

    bg_small = Image.fromarray((visited * 255).astype("uint8"), "L")
    bg = bg_small.resize(rgba.size, Image.Resampling.BILINEAR).filter(ImageFilter.GaussianBlur(1.0))

    arr = np.array(rgba)
    rgb = arr[:, :, :3].astype(np.int16)
    bg_arr = np.array(bg).astype(np.float32) / 255.0

    alpha = arr[:, :, 3].astype(np.float32)
    alpha *= 1.0 - bg_arr

    near_black = np.max(rgb, axis=2)
    fringe = np.clip((near_black - threshold) / max(1, soft - threshold), 0, 1)
    alpha = np.where(bg_arr > 0.96, 0, alpha)
    edge = (bg_arr > 0) & (bg_arr < 1)
    alpha[edge] *= fringe[edge] * 0.85 + 0.15

    arr[:, :, 3] = np.clip(alpha, 0, 255).astype("uint8")
    return Image.fromarray(arr, "RGBA")


def crop_to_alpha(image: Image.Image, pad: int = 10) -> Image.Image:
    bbox = image.getchannel("A").getbbox()
    if not bbox:
        return image
    left, top, right, bottom = bbox
    left = max(0, left - pad)
    top = max(0, top - pad)
    right = min(image.width, right + pad)
    bottom = min(image.height, bottom + pad)
    return image.crop((left, top, right, bottom))


def add_cyan_contact_glow(base: Image.Image, center_x: int, center_y: int, width: int, height: int) -> None:
    glow = Image.new("RGBA", base.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(glow)
    box = (
        center_x - width // 2,
        center_y - height // 2,
        center_x + width // 2,
        center_y + height // 2,
    )
    d.ellipse(box, fill=(80, 235, 255, 80))
    glow = glow.filter(ImageFilter.GaussianBlur(16))
    base.alpha_composite(glow)


def main():
    device = remove_connected_black_background(Image.open(DEVICE_PATH), threshold=14, soft=30)
    girl = remove_connected_black_background(Image.open(GIRL_PATH), threshold=12, soft=34)
    girl = crop_to_alpha(girl, pad=8)

    # Fit the girl as the focal figure standing on the platform. The staff can extend naturally.
    target_h = int(device.height * 0.58)
    scale = target_h / girl.height
    girl = girl.resize((int(girl.width * scale), target_h), Image.Resampling.LANCZOS)

    canvas = Image.new("RGBA", device.size, (0, 0, 0, 0))
    canvas.alpha_composite(device)

    platform_center_x = device.width // 2
    foot_y = int(device.height * 0.78)
    x = platform_center_x - girl.width // 2 + int(device.width * 0.015)
    y = foot_y - girl.height

    add_cyan_contact_glow(canvas, platform_center_x, foot_y - 10, int(device.width * 0.20), int(device.height * 0.045))
    canvas.alpha_composite(girl, (x, y))

    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(OUT_PATH)
    print(OUT_PATH)


if __name__ == "__main__":
    main()
