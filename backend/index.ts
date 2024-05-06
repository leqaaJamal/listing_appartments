export {};
import express, { Request, Response } from 'express';
import appartmentRoutes from "./src/routes/appartments.routes";

const app = express();
const cors = require('cors');
app.use(cors({ origin: '*'}));
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from backend!');
});

app.use(express.json());
app.use('/appartments', appartmentRoutes)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});