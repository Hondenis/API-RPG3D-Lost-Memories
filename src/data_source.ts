import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database:"phpproject",
    synchronize: true,
    logging: true, // Verificar esse parametro
    entities: ["src/entity/**.ts"],
    dropSchema: true,
    //subscribers: [],
    //migrations: [],
})