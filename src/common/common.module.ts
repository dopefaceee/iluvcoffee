import { LoggingMiddleware } from './middleware/logging/logging.middleware';
import { ConfigModule } from '@nestjs/config';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ApiKeyGuard } from './guards/api-key/api-key.guard';

@Module({
    imports: [ConfigModule],
    providers: [
        {
            provide: APP_GUARD,
            useClass: ApiKeyGuard
        }
    ]
})
export class CommonModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggingMiddleware).forRoutes('*');
    }
}
