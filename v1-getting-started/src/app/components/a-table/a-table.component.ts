import { Component, OnInit } from '@angular/core';
import { ABackendService } from '../../services/backend/a-backend.service';
import { Adata } from '../../entity/table/a-data';

@Component({
  selector: 'app-a-table',
  templateUrl: './a-table.component.html',
  styleUrls: ['./a-table.component.css']
})
export class ATableComponent implements OnInit {

  tableData: Adata[] = [];

  constructor(
    private backend: ABackendService
  ) { }

  ngOnInit() {
    this.loadListData();
  }

  loadListData() {
    this.backend.getListItems().subscribe(res => {
      this.tableData = res;
    }, error => {
      console.log(error);
      alert('API FAILED');
    });
  }

  handleUpgrade(col: Adata) {
    console.log(col);
    this.backend.performUpgrade(col).subscribe(res => {
      alert('action performed');
      this.loadListData();
    }, err => {
      console.log(err);
      alert('API FAILED');
    })
  }

}
