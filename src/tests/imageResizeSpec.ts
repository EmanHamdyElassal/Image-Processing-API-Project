/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { resizeImage } from '../Utils/imageResize';

describe(' at least one test for the image processing ', () => {
  it('input image error', async (): Promise<void> => {
    await expectAsync(resizeImage(200, 200, 'test')).toBeRejectedWithError(
      Error
    );
  });
  it('original image exists', async (): Promise<void> => {
    await expectAsync(resizeImage(200, 200, 'fjord')).toBeResolved();
  });
});
