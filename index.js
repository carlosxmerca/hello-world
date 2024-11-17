const express = require("express");
const app = express();

app.get("/", (_, res) => {
  res.send("Hello World by carlosxmerca!");
});

module.exports = app;

if (require.main === module) {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
  });
}
