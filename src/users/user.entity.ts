// src/users/user.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Task } from '../tasks/task.entity';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn({ name: 'userid' })
  UserID: number;

  @Column({ name: 'username', length: 50, nullable: false })
  Username: string;

  @Column({ name: 'password', length: 255, nullable: false })
  Password: string;

  @Column({ name: 'email', length: 100, nullable: false })
  Email: string;

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];
}
