import express from 'express';
import { promises as fsPromises } from 'fs';
import { resizeImage, newPath } from '../../Utils/imageResize';
import path from 'path';
import fs from 'fs';
const images = express.Router();
const name: string[] = [
  'encenadaport',
  'fjord',
  'icelandwaterfall',
  'palmtunnel',
  'santamonica',
];

images.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<any> => {
    try {
      const originalimage: string = req.query.originalimage as string;
      if (!name.includes(originalimage)) {
        return res.status(200).json({ message: 'image notfound in file' });
      }

      const height: number = parseInt(req.query.height as string);
      if (Number.isNaN(height) || height < 0 || height == 0) {
        return res
          .status(200)
          .json({ message: 'please enter valid number for height' });
      }

      const width: number = parseInt(req.query.width as string);
      if (Number.isNaN(width) || width < 0 || width == 0) {
        return res
          .status(200)
          .json({ message: 'please enter valid number for width' });
      }

      const resizedimages: string = newPath(originalimage, height, width);
      if (!fs.existsSync(resizedimages)) {
        const resizedImage = await resizeImage(height, width, originalimage);
        await fsPromises.writeFile(resizedimages, resizedImage);
      }

      if (
        req.query.originalimage?.length == 0 ||
        req.query.width?.length == 0 ||
        req.query.height?.length == 0
      ) {
        return res
          .status(200)
          .json({ message: 'enter the image name, hieght and width' });
      }

      return res.status(200).sendFile(path.resolve(resizedimages));
    } catch (error: any) {
      throw new Error(error as string);
    }
  }
);

export default images;
