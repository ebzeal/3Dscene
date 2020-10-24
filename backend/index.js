import express from 'express';
import env from 'dotenv';
import {ApolloServer, gql} from 'apollo-server-express';
import cors from 'cors';
// import routes from './api/routes';

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

env.config();

const port = process.env.PORT || 5000;

// mongoose
//   .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
//   .then(() => {
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
// })
// .catch(err => {
//   console.log(`db connection error ${err}`);
// });
