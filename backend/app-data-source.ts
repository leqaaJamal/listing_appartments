import { DataSource } from "typeorm"
import * as fs from "fs";
const ormConfigFile = fs.readFileSync("ormconfig.json", "utf8");

const AppDataSource = new DataSource(JSON.parse(ormConfigFile))

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export { AppDataSource }