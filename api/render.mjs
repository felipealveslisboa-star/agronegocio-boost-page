import server from "../.output/server/index.mjs";

async function readRequestBody(req) {
  if (req.method === "GET" || req.method === "HEAD") return undefined;
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  return chunks.length > 0 ? Buffer.concat(chunks) : undefined;
}

export default async function handler(req, res) {
  const host = req.headers.host || "localhost";
  const url = new URL(req.url, `https://${host}`);

  const request = new Request(url.toString(), {
    method: req.method,
    headers: req.headers,
    body: await readRequestBody(req),
  });

  const context = {
    waitUntil: () => {},
  };

  const response = await server.fetch(request, {}, context);
  const rawHeaders = response.headers.raw ? response.headers.raw() : {};

  for (const [name, value] of Object.entries(rawHeaders)) {
    res.setHeader(name, value);
  }

  res.statusCode = response.status;

  if (response.body === null) {
    return res.end();
  }

  const body = Buffer.from(await response.arrayBuffer());
  res.end(body);
}
