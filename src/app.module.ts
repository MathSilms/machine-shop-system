
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AdressModule } from './adress/adress.module';
import { StudentsModule } from './students/student.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig), 
    UserModule, 
    StudentsModule, 
    AdressModule, 
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}