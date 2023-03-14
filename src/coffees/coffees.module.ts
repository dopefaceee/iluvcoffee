import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesService } from './coffees.service';
import { CoffeesController } from './coffees.controller';
import { Module } from '@nestjs/common';
import { Coffee } from './entities/coffee.entitiy';

@Module({
    controllers: [CoffeesController],
    providers: [CoffeesService],
    imports: [TypeOrmModule.forFeature([Coffee]),],
})
export class CoffeesModule {}
