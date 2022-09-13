
# Test Node.js web app written in typescript

In order to launch the test-docker web app you can run this command before run docker-compose up

```bash
$ npm install
```

after npm installation run

```bash
$ npm run build
```

after build is complete finally you can run

```bash
$ docker compose up
```

When all is ready you can hit http://localhost:3000/test method POST and send a payload in order to save the payload into MySQL DB.

The app is written with Fastify in Typescript, using TypeORM for MYSQL.
