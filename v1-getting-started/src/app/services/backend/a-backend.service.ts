import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Adata } from '../../entity/table/a-data';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

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
    /**
     * for PUT/POST/PATCH prepare payload for data
     * e.g. payload is of shape
     * ```
     * {
     *  nodeName: string,
     *  version: string
     * }
     * ```
     * 
     * payload will be prepared as 
     * 
     * const { nodeName, version } = col; // $> since nodeName and version are properties of col object we can destrucure the object col
     * 
     * const payload = { nodeName, version }; // $> creating a new object by structuring nodeName and version constants
     * 
     * return this.http.put<Adata[]>(this.UPGRADE_LIST_ITEMS, payload);
     * ----or-----
     * return this.http.post<Adata[]>(this.UPGRADE_LIST_ITEMS, payload);
     * ----or----
     * return this.http.patch<Adata[]>(this.UPGRADE_LIST_ITEMS, payload);
     */
    return Observable.create((source) => {
      /**
       * let's provide 1.5 seconds delay for this mock api
       */
      // to fail for string 2
      setTimeout(() => {
        if (col.nodeName === 'string 1') {
          source.error('err');
        } else {
          source.next(col);
        }
        source.complete();
      }, 1500);
    });
  }
}
