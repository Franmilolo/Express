const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "contact.html"));
});

app.get("/faq", (req, res) => {
  res.sendFile(path.join(__dirname, "faq.html"));
});

app.get("/feature", (req, res) => {
  res.sendFile(path.join(__dirname, "feature.html"));
});

app.get("/roadmap", (req, res) => {
  res.sendFile(path.join(__dirname, "roadmap.html"));
});

app.get("/service", (req, res) => {
  res.sendFile(path.join(__dirname, "service.html"));
});

app.get("/token", (req, res) => {
  res.sendFile(path.join(__dirname, "token.html"));
});

app.get("/404", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});


app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
