
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { StudentsModule } from './students/student.module';
import { AdressModule } from './adress/adress.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), StudentsModule, AdressModule, UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}