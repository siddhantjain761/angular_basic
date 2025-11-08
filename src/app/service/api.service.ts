import { HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { catchError,tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /* url='https://newsapi.org/v2/everything?q=tesla&from=2022-01-10&sortBy=publishedAt&apiKey=45098b4e99b945558555bb7e229e9165' */
  url='http://localhost:9500/ftr/terminals'
/* api */
  constructor(private http:HttpClient) { }  /* to get api data use "private http:HttpClient" */


  /*news_data():Observable<any>{  /* fuction to store api data */
  /* The HTTP module uses observables to handle AJAX requests and responses
     return this.http.get(this.url).pipe(
      tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))),
      catchError(this.errorHandler));
  } */

  news_data():Observable<any>{  /* fuction to store api data */
  // The HTTP module uses observables to handle AJAX requests and responses
     return this.http.get(this.url).pipe(
      tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))),
      catchError(this.errorHandler));
  }

  insert_data(c:any){      /*  to insert data into api  */
    return this.http.post(this.url,c, {responseType: 'text'})
  }
  update_data(a:any){      /*  to insert data into api  */
    return this.http.put(this.url +'/'+a.terminalId+'/'+a.capacity,a, {responseType: 'text'})
  }
  delete_record(id:any){
    return this.http.delete(this.url +'/'+id,{responseType: 'text'}).pipe(catchError(this.errorHandler));

  }

  /* errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(()=>error);
  }
} */



    private  errorHandler(err: HttpErrorResponse): Observable<any> {
    let errMsg = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', err.error.message);
      errMsg = err.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${err.status}`);
      errMsg = err.error.status;
    }
    return throwError(()=>errMsg);
  }
}

