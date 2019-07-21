import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (
        configService: ConfigService
      ): Promise<MongooseModuleOptions> => {
        return {
          uri: configService.dbhost,
          useNewUrlParser: true
        };
      },
      inject: [ConfigService]
    }),
    ConfigModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
