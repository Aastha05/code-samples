import { Component, OnInit } from '@angular/core';
import { ABackendService } from '../../services/backend/a-backend.service';
import { Adata } from '../../entity/table/a-data';

declare const CarbonComponents;

@Component({
  selector: 'app-a-table',
  templateUrl: './a-table.component.html',
  styleUrls: ['./a-table.component.css']
})
export class ATableComponent implements OnInit {

  tableData: Adata[] = [];
  isSuccess: boolean = false;
  toastTitle: string = "";
  toastBody: string = "";
  isFailure: boolean = false;

  constructor(
    private backend: ABackendService
  ) { }

  ngOnInit() {
    this.loadListData();
  }

  loadListData() {
    this
      .backend
      .getListItems()
      .subscribe(res => {
        this.tableData = res;
        setTimeout(() => {
          this.reInitCarbonDropDown();
        });
      }, error => {
        console.log(error);
        alert('API FAILED');
      });
  }

  handleUpgrade(col: Adata) {
    col.isLoading = true;
    this
      .backend
      .performUpgrade(col)
      .subscribe(res => {
        this.loadListData();
        this.showToast('Success', `${col.nodeName} updated`);
        col.isLoading = false;
      }, err => {
        console.log(err);
        this.showToastFailure('Error', `${col.nodeName} not updated`);
        col.isLoading = false;
      })
  }

  showToast(title: string, body: string) {
    this.isSuccess = true;
    this.toastTitle = title;
    this.toastBody = body;
    setTimeout(() => {
      this.isSuccess = false;
    }, 2000);
  }

  showToastFailure(title: string, body: string) {
    this.isFailure = true;
    this.toastTitle = title;
    this.toastBody = body;
    setTimeout(() => {
      this.isFailure = false;
    }, 2000);
  }

  reInitCarbonDropDown() {
    const dropDownList = document.getElementsByClassName('bx--overflow-menu');
    for (const index in dropDownList) {
      new CarbonComponents.OverflowMenu(dropDownList[index]);
    }
  }
}
