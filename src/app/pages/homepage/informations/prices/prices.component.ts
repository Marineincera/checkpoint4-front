import { Component, OnInit } from '@angular/core';
import { PriceService } from '../../../../shared/services/price.service';
import { Price } from '../../../../shared/models/price';
import { CategoryPriceService } from '../../../../shared/services/category-price.service';
import { CategoryPrice } from '../../../../shared/models/category-price';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

  constructor(private pricesService: PriceService, private categoriesService: CategoryPriceService) { }

  prices: Price[];
  categories: CategoryPrice[];


  ngOnInit() {
    this.getAllPrices();
    this.getAllCategoriesPrices();
  }

  getAllPrices() {
    this.pricesService.getAllPrices().subscribe((data: Price[]) => {
      this.prices = data;
      console.log(this.prices);
    });
  }

  getAllCategoriesPrices() {
    this.categoriesService.getAll().subscribe((data: CategoryPrice[]) => {
      this.categories = data;
      console.log(this.categories);

    });
  }
}
