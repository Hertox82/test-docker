import { Payload } from "../entity/payload";
import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';
dotenv.config();

export const dataSource = new DataSource({
    type: 'mysql',
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    port: 3306,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    entities: [Payload]
});
