import { Controller, Get, Param } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get('total-income')
  async getTotalIncome() {
    const total = await this.transactionsService.getTotalIncome();
    return { total };
  }

  @Get('total-expense')
  async getTotalExpenses() {
    const total = await this.transactionsService.getTotalExpenses();
    return { total };
  }

  @Get('net-amount')
  async getNetAmount() {
    const netAmount = await this.transactionsService.getNetAmount();
    return { netAmount };
  }

  @Get('budget-left')
  async getBudgetLeft() {
    const budgetLeft = await this.transactionsService.getBudgetLeft();
    return { budgetLeft };
  }

  @Get()
  async getAllTransactions() {
    return await this.transactionsService.getAllTransactions();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.transactionsService.getById(Number(id));
  }
}
