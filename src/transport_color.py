# 将图片中的纯白转为透明
import os
from PIL import Image

def convert_pixels_to_transparent(image_path, output_path, target_color):
    image = Image.open(image_path)
    image = image.convert("RGBA")

    pixels = image.load()
    width, height = image.size

    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]

            if abs(r - target_color[0]) == 0 and \
               abs(g - target_color[1]) == 0 and \
               abs(b - target_color[2]) == 0:
                pixels[x, y] = (r, g, b, 0)

    image.save(output_path)

def process_directory(input_directory, output_directory, target_color=(255, 255, 255)):
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)

    for filename in os.listdir(input_directory):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            input_path = os.path.join(input_directory, filename)
            output_path = os.path.join(output_directory, filename)
            convert_pixels_to_transparent(input_path, output_path, target_color)

input_directory = "old"
output_directory = "new"
process_directory(input_directory, output_directory)
