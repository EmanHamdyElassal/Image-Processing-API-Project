import express, { Application } from 'express';
const app: Application = express();
const port = 8000;
import routes from './routes';
app.use('/api', routes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server is ready for run ${port}`);
});

export default app;
