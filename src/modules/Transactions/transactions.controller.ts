import { Controller, Get } from '@nestjs/common';
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
}
