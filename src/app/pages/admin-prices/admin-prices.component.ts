import { Component, OnInit, Inject } from '@angular/core';
import { PriceService } from '../../shared/services/price.service';
import { Price } from '../../shared/models/price';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalUpdatePricesComponent } from './modal-update-prices/modal-update-prices.component';

// test model update Price
export interface DialogData {
  categoryPrice: number;
  week: boolean;
  weekEnd: boolean;
  specialEvent: boolean;
  amount: number;
  id: number;
  prices: Price[];
}



@Component({
  selector: 'app-admin-prices',
  templateUrl: './admin-prices.component.html',
  styleUrls: ['./admin-prices.component.scss']
})
export class AdminPricesComponent implements OnInit {


  // test update modal
  categoryPrice: number;
  week: boolean;
  weekEnd: boolean;
  specialEvent: boolean;
  amount: number;
  id: number;

  priceSelectedToUpdate: Price;
  priceReceivedToUpdate: Price;


  prices: Price[];
  displayedColumns: string[] = ['id', 'categoryPrice', 'week', 'weekEnd', 'specialEvent', 'amount'];



  constructor(private priceService: PriceService, public dialog: MatDialog) { }

  ngOnInit() {
    this.priceService.getAllPrices().subscribe((data: Price[]) => {
      console.log(data);
      this.prices = data;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalUpdatePricesComponent, {
      width: '250px',
      data: {
        prices: this.prices
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.priceReceivedToUpdate = result;

    });
  }

}
