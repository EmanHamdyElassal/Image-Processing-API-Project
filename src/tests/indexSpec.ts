import supertest from 'supertest';
import app from '../index';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { resizeImage, newPath } from '../Utils/imageResize';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import express from 'express';
const request = supertest(app);
const URLIMAGE = '/api/images?originalimage=fjord&height=200&width=200';
describe('Rubric conatin at least 1 test per endpoint ', () => {
  it('test api endpoint', async (): Promise<void> => {
    const res = await request.get('/api');
    expect(res.statusCode).toBe(200);
  });
  it('gets the images endpoint', async () => {
    const res = await request.get(URLIMAGE);
    expect(res.statusCode).toBe(200);
  });
});
it('at least one test for image processing', async () => {
  const response = await request.get(URLIMAGE);
  expect(async () => {
    resizeImage(
      response.body.width,
      response.body.height,
      response.body.filename
    );
  }).not.toThrow();
});
