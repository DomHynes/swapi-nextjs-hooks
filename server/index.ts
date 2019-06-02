import * as express from "express";
const next = require("next");

const port = process.env.PORT || 3001;
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  server.get("/films/:id", (req, res) => {
    const page = "/films";
    console.log(req.params);

    app.render(req, res, page, req.params);
  });
  server.get("*", (req, res) => handle(req, res));

  await server.listen(port);
  console.log(`🚀 Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
