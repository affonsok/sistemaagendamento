import sequelize from "sequelize";
import Sequelize from "sequelize";
import User from "../app/models/User";
import databaseConfig from "../config/database";

const models = [User];

class Database {
    constructor(){
        this.init();
    }

    init(){
        this.connection = new Sequelize
        (databaseConfig);

        models.map ( model => models.init ( this.connection ) );
    }
}

export default new Database();

