import 'reflect-metadata';
import fp from 'fastify-plugin';
import { dataSource } from './datasource';
import { Payload } from '../entity/payload';


export default fp(async server => {
    try {
        dataSource.initialize();
        server.decorate("db", {
            payload: dataSource.getRepository(Payload)
        })
    } catch (error) {
        console.log(error);
    }
});