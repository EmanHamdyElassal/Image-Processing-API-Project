import express from 'express';
import images from './api/APIimages';
const routes = express.Router();

routes.get(
  '/',
  (request: express.Request, response: express.Response): void => {
    response.send('Image Processing API');
  }
);
routes.use('/images', images);
export default routes;
