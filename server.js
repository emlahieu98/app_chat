import express from "express" ;
const app = express();

const HOSTNAME = 'localhost';
const PORT = 3000;
app.get("/hello", (req, res) => {
  res.send('hel');
});

app.listen(PORT, HOSTNAME ,() => {
  console.log(`Server started on ${HOSTNAME}: ${PORT}`);
});
