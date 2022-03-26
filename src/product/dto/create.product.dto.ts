import { IsDate, IsString } from 'class-validator';

export class CreateProductDto {
    @IsString()
    name: string;

    @IsDate()
    expiration_date: Date;
}
