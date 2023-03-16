import { Flavor } from './src/coffees/entities/flavor.entity';
import { Coffee } from './src/coffees/entities/coffee.entity';
import { CoffeeRefactor1678938387315 } from './src/migrations/1678938387315-CoffeeRefactor';
import { DataSource } from 'typeorm';
import { SchemaSync1678938985181 } from 'src/migrations/1678938985181-SchemaSync';

export default new DataSource({
    type: 'postgres', // type of our database
    host: 'localhost', // database host
    port: 5432, // database host
    username: 'postgres', // username
    password: 'pass123', // user password
    database: 'postgres', // name of our database,
    entities: [Coffee, Flavor],
    migrations: [CoffeeRefactor1678938387315, SchemaSync1678938985181],
});