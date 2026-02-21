import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: 'income' | 'expense';

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column()
  category: string;

  @Column()
  date: Date;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  budget: number;
}
