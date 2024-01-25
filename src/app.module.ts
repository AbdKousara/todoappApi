// src/app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { TasksModule } from './tasks/tasks.module';
import { User } from './users/user.entity';
import { Category } from './categories/category.entity';
import { Task } from './tasks/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'abd1234',
      database: 'todoapp',
      entities: [User, Category, Task],
      synchronize: true,
    }),
    UsersModule,
    CategoriesModule,
    TasksModule,
  ],
})
export class AppModule {}
