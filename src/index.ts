import { Payload } from 'entity/payload';
import fastify from 'fastify';
import { FromSchema } from "json-schema-to-ts";
import payloadHandler from './module/routes';
import db from './plugins/db';
import validator from './validator';
import * as dotenv from 'dotenv';
dotenv.config();

const server = fastify()

server.register(db);

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.setValidatorCompiler(({ schema, method, url, httpPart }) => {
  return validator.compile(schema);
});

server.register(payloadHandler);

server.listen({ host: "0.0.0.0" ,port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
