import { ApiPostComponent } from './../api-post/api-post.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Interface } from 'readline';
import { concatMap, from, map, mergeMap, Observable, toArray } from 'rxjs';

interface User{
  id: number;
  name:string;
}

interface Post{
  id:number;
  userID:number;
  title:string;
}

interface Product{
  id:number;
  name:string;
}

interface Category{
  id:number;
  name:string;
  categoryId:number;
}


@Injectable({
  providedIn: 'root'
})
export class ApiChaningService  {

  constructor(private http:HttpClient) { }

  getUser(userID: number): Observable<User>{
    return this.http.get<User>(`/api/users/${userID}`);
  }

  getPostByUser(userID:number):Observable<Post[]>{
    return this.http.get<Post[]>(`/api/posts?userID=${userID}`);
  }

  getPostForSpecificUser(userID:number):Observable<Post[]>{
    return this.getUser(userID).pipe(
      concatMap((user:User)=>{
        //user details available here user user.id for next api call
        return this.getPostByUser(user.id);
      })
    )
  }


  getProductsWithCategories(): Observable<Category[]> {
  return this.http.get<Product[]>('/api/products').pipe(
    mergeMap((products: any) =>
      // Convert product list into a stream of individual products
      products.pipe(
        // For each product, fetch its category
        mergeMap((product:any) =>
          this.http.get<Category>(`/api/categories/${product.categoryId}`).pipe(
            map((category: any) => ({
              ...product,
              category
            }))
          )
        ),
        // After processing all items, reassemble into an array
        toArray()
      )
    )
  );
}





}
