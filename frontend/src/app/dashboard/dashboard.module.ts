import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { StockCardComponent } from './stock-card/stock-card.component';

@NgModule({
  declarations: [DashboardPageComponent, StockCardComponent],
  imports: [CommonModule, HttpClientModule],
})
export class DashboardModule {}
