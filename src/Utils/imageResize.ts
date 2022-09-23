import sharp from 'sharp';
import path from 'path';
const newPath = (
  originalimage: string,
  height: number,
  width: number
): string => {
  const resizedpath = `images/resizedImages/${originalimage}${width}x${height}.jpg`;
  return resizedpath;
};
const resizeImage = (
  height: number,
  width: number,
  originalimage: string
): Promise<Buffer> => {
  const imageoriginalpath = `images/original/${originalimage}.jpg`;

  return sharp(path.resolve(imageoriginalpath))
    .resize({
      width: width,
      height: height,
      fit: sharp.fit.cover,
    })
    .toBuffer();
};
export { resizeImage, newPath };
