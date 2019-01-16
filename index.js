const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const config = require("./config");

// app.get('/', (req, res) => res.send('Hello World!'))
// app.use('/test', express.static(path.join(__dirname, "build"))) // 满足使用条件
app.use(config.basePath, express.static(path.join(__dirname, "build"))); // 满足使用条件
// app.use(express.static(path.join(__dirname, 'build')));

app.get(`${config.basePath}/*`, function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
