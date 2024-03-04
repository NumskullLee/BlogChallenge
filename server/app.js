import  express  from "express";
import cors from 'cors'
import { PORT } from "./config.js";
import indexRoutes from './routes/index.routes.js'
import postsRoutes from './routes/posts.routes.js'


const app = express();
app.use(cors());
app.use(express.json());
app.use(indexRoutes);
app.use(postsRoutes);
app.listen(PORT);

console.log(`Server is running on ${PORT}`);

export default app;