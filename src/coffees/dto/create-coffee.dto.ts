import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCoffeeDto {
    @ApiProperty({description: 'the name of coffee'})
    @IsString()
    readonly name: string;

    @ApiProperty({description: 'the brand of coffee'})
    @IsString()
    readonly brand: string;

    @ApiProperty({description: 'the flavors of coffee', example: []})
    @IsString({ each: true })
    readonly flavors: string[];
}  