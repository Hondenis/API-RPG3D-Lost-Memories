import "reflect-metadata";
import express from 'express';
import attributeRouter from "./router/attribute";
import characterRouter from "./router/character";
import characterItemRouter from "./router/characterItem";
import itemRouter from "./router/item";
import { AppDataSource } from "./data_source";

const app = express();
app.use(express.json());

app.get("/api_lostmemories", (req, res) => {
    res.send("");
});

app.use("/api/attributes", attributeRouter);
app.use("/api/characters", characterRouter);
app.use("/api/character-items", characterItemRouter);
app.use("/api/items", itemRouter);
const porta = 3000;

app.listen(porta, async() =>{

AppDataSource.initialize()
.then(() => {
    console.log("Conexão com o banco de dados efetuada com sucesso.")
})

.catch((error) => console.log("Erro ao inicializar o banco de dados:", error));

console.log("Servidor rodando na porta 3000");

});