import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CartsModule } from './carts/carts.module';
import { ProductsModule } from './products/products.module';
import GlobalMiddlewares from './middlewares/global.middlewares';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { TicketsModule } from './tickets/tickets.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/.env.${
        process.env.NODE_ENV || 'development'
      }.local`,
      isGlobal: true,
    }),
    MailerModule.forRoot({
      transport: {
        service: process.env.MAILER_SERVICE,
        host: process.env.MAILER_HOST,
        secure: true,
        port: 465,
        auth: {
          user: process.env.MAILER_USER,
          pass: process.env.MAILER_PWD,
        },
      },
    }),
    DatabaseModule,
    UsersModule,
    CartsModule,
    ProductsModule,
    AuthModule,
    TicketsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(GlobalMiddlewares).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
