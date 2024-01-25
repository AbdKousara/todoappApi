// src/tasks/task.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Category } from '../categories/category.entity';

export enum TaskStatus {
  Pending = 'Pending',
  InProgress = 'InProgress',
  Completed = 'Completed',
}

@Entity('Tasks')
export class Task {
  @PrimaryGeneratedColumn({ name: 'taskid' })
  TaskID: number;

  @Column({ name: 'userid' })
  UserID: number;

  @Column({ name: 'categoryid' })
  CategoryID: number;

  @Column({ name: 'tasktitle', length: 100, nullable: false })
  TaskTitle: string;

  @Column('text', { name: 'description', nullable: true })
  Description: string;

  @Column({ type: 'date', name: 'duedate', nullable: true })
  DueDate: string;

  @Column({ name: 'priority' })
  Priority: number;

  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.Pending,
    name: 'status',
  })
  Status: TaskStatus;

  @ManyToOne(() => User, (user) => user.tasks)
  @JoinColumn({ name: 'userid' })
  user: User;

  @ManyToOne(() => Category, (category) => category.tasks)
  @JoinColumn({ name: 'categoryid' })
  category: Category;
}
