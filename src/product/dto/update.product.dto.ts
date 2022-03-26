import { IsDate, IsString } from 'class-validator';

export class UpdateProductDto {
    @IsString()
    name?: string;

    @IsDate()
    expiration_date?: Date;
}
