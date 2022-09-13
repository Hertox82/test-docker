import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({
    database: 'test_docker',
    name: 'payload'
})
export class Payload {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 191 })
    sender: string;

    @Column({
        type: 'simple-json',
        transformer: {
            to: (value: any) => {
                return JSON.stringify(value);
            },
            from: (value: string) => {
                return JSON.parse(value);
            }
        }
    })
    message: {[key: string]: any};

    @Column({
        type: 'int',
        width: 11
    })
    ts: number

 
    @Column({type: 'int'})
    priority: number
}