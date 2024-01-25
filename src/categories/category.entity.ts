// src/categories/category.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Task } from '../tasks/task.entity';

@Entity('Categories')
export class Category {
  @PrimaryGeneratedColumn({ name: 'categoryid' })
  CategoryID: number;

  @Column({ name: 'categoryname', length: 50, nullable: false })
  CategoryName: string;

  @OneToMany(() => Task, (task) => task.category)
  tasks: Task[];
}
