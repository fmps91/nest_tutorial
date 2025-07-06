import { Module } from '@nestjs/common';
import { UsersModule} from "./users/user.module";
import { AuthModule } from './auth/auth.module';
import { HelloController } from './hello/hello.controller';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [AuthModule,UsersModule, PaymentsModule],
  controllers: [HelloController],
})
export class AppModule {}
