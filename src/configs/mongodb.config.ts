import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongDBConfig = async (configService: ConfigService): Promise<TypegooseModuleOptions> => {
    return {
        uri: configService.get('MONGODB_URI'),
    }
}
