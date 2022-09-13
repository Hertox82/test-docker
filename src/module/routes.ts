import { Payload } from "../entity/payload";

const test = {
    type: "object",
    additionalProperties: false,
    properties: {
      ts: { type: "string", isUnix: {response: true}},
      sender: { type: "string"},
      message: { 
        type: "object",
        minProperties: 1
      },
      "sent-from-ip": { type: "string", format: 'ipv4'},
      priority: { type: "number" }
    },
    required: ["ts", "sender", "message"],
    
  } as const;


export default function payloadHandler(server: any, options: any, next: any) {
    server.post(
        '/test',
        {
          schema: {
            body: test,
            response: {
              201: {
                type: "string"
              }
            }
          }
        },
        async( request: any, reply: any) => {
          const input = request.body;
          const payload: Payload = new Payload();
          payload.sender = input.sender;
          payload.message = input.message;
          payload.ts = +input.ts;
          payload.priority = input.priority!
          const p = await server.db.payload.save(payload);

          reply.send({message: 'success'});
        }
      );

      next();
}