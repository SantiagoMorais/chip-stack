import fastify from "fastify";

export const app = fastify();
const port = 3333;

app.listen({ port }).then(() => {
  console.log(`"HTTP server is running at http://localhost:${port}`);
});
