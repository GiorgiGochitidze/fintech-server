import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './entities/transactions.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction) private repo: Repository<Transaction>,
  ) {}

  async getTotalIncome(): Promise<number> {
    const result = await this.repo
      .createQueryBuilder('t')
      .select('SUM(t.amount)', 'total')
      .where('t.type = :type', { type: 'income' })
      .getRawOne<{ total: string }>();
    return parseFloat(result?.total ?? '0');
  }

  async getTotalExpenses(): Promise<number> {
    const result = await this.repo
      .createQueryBuilder('t')
      .select('SUM(t.amount)', 'total')
      .where('t.type = :type', { type: 'expense' })
      .getRawOne<{ total: string }>();
    return parseFloat(result?.total ?? '0');
  }

  async getNetAmount(): Promise<number> {
    const income = await this.getTotalIncome();
    const expense = await this.getTotalExpenses();
    return income - expense;
  }
}
