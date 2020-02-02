import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { DialogData } from '../../homepage/introduction/introduction.component';
import { PriceService } from '../../../shared/services/price.service';
import { Price } from '../../../shared/models/price';
import { FormBuilder } from '@angular/forms';
import { CategoryPrice } from '../../../shared/models/category-price';
import { CategoryPriceService } from '../../../shared/services/category-price.service';

@Component({
  selector: 'app-modal-update-prices',
  templateUrl: './modal-update-prices.component.html',
  styleUrls: ['./modal-update-prices.component.scss']
})
export class ModalUpdatePricesComponent implements OnInit {

  priceToUpdate: Price;

  priceIdToUpdate: number;

  // to open updating form
  updatingPriceFormOpened = false;

  updatingPriceForm = this.fb.group({
    id: [''],
    categoryPrice: [''],
    period: [''],
    amount: ['']
  });

  // new price
  newPriceCategoryId: number;
  newPriceWeek = false;
  newPriceWeekEnd = false;
  newPriceSpecialEvent = false;
  newPriceAmount: number;

  // categories available
  pricesCategoriesAvailable: CategoryPrice[];
  categoryToCreate;

  // to add a new category
  inputNewCategoryOpened = false;

  // delete a category
  categoryToDelete: CategoryPrice;
  deleteCategoryOpened = false;

  constructor(public dialogRef: MatDialogRef<ModalUpdatePricesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private priceService: PriceService,
    private fb: FormBuilder,
    private categoriesService: CategoryPriceService) { }

  ngOnInit() {
    console.log(this.data);

    // get price categories
    this.categoriesService.getAll().subscribe((data: CategoryPrice[]) => {
      this.pricesCategoriesAvailable = data;
    });

  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  openUpdatingForm(id) {
    if (id) {
      this.updatingPriceFormOpened = true;
      this.priceService.getOnePrice(id).subscribe((data: Price) => {
        console.log(data);
        this.priceToUpdate = data;

      });
    }
  }

  categorySelected() {
    if (this.updatingPriceForm.value.categoryPrice) {
      this.newPriceCategoryId = this.updatingPriceForm.value.categoryPrice;
    } else {
      this.newPriceCategoryId = this.priceToUpdate.categoryPriceId;
    }
  }

  periodSelected() {
    console.log(this.updatingPriceForm.value.period);
    if (this.updatingPriceForm.value.period === 1) {
      this.newPriceWeek = true;
    }
    if (this.updatingPriceForm.value.period === 2) {
      this.newPriceWeekEnd = true;
    }
    if (this.updatingPriceForm.value.period === 3) {
      this.newPriceSpecialEvent = true;
    }
  }


  onSubmit() {
    const newPrice = {
      amount: this.updatingPriceForm.value.amount,
      id: this.priceIdToUpdate,
      week: this.newPriceWeek,
      weekEnd: this.newPriceWeekEnd,
      specialEvent: this.newPriceSpecialEvent,
      categoryPrice: this.newPriceCategoryId
    };
    console.log(newPrice);
    this.updatePrice(this.priceIdToUpdate, newPrice);

  }

  updatePrice(id: number, price: Price) {
    this.priceService.update(id, price).subscribe((data) => {
      if (data) {
        this.dialogRef.close();
      }
    });
  }


  // add a new category

  openNewCategoryInput() {
    this.inputNewCategoryOpened = true;
  }

  addNewCategory() {
    if (this.categoryToCreate) {
      this.categoriesService.postCategory({ name: this.categoryToCreate }).subscribe((data: CategoryPrice) => {
        this.pricesCategoriesAvailable.push(data);
        if (data) {
          this.dialogRef.close();
        }
      });
    }
  }


  // Delete a category

  openDeleteCategorySelect() {
    this.deleteCategoryOpened = true;
  }

  deleteCategory() {
    if (this.categoryToDelete) {
      this.categoriesService.delete(this.categoryToDelete).subscribe((data) => {
        this.deleteCategoryOpened = false;
      });

    }
  }

}
