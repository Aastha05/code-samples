import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Adata } from '../../entity/table/a-data';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ABackendService {

  private readonly GET_LIST_ITEMS: string = 'https://api.something.com/v1/list/items';
  private readonly UPGRADE_LIST_ITEMS: string = 'https://api.something.com/v1/list/items/upgrade';

  constructor(
    private http: HttpClient
  ) { }

  getListItems(): Observable<Adata[]> {
    // return this.http.get<Adata[]>(this.GET_LIST_ITEMS);
    return Observable.create((source) => {
      source.next([
        {
          nodeName: 'string',
          version: 'string',
          updated: 'string',
          status: 'string',
          another: 'string',
        },
        {
          nodeName: 'string 1',
          version: 'string 2',
          updated: 'string 3',
          status: 'string 4',
          another: 'string 5',
        }
      ]);
      source.complete();
    });
  }

  performUpgrade(col: Adata): Observable<Adata> {
    // return this.http.put<Adata[]>(this.UPGRADE_LIST_ITEMS);
    return Observable.create((source) => {
      // to fail for string 2
      if (col.nodeName === 'string 1') {
        Observable.throw('ohhh'); // to fail uncomment me
      }
      source.next(col);
      source.complete();
    });
  }
}
