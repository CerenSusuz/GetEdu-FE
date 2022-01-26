import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ItemResponseModel } from '../models/itemResponseModel';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  apiURL = environment.apiURL+'Categories';

  constructor(private httpClient: HttpClient) { }

  getCategories():Observable<ListResponseModel<Category>>{
    let newPath = this.apiURL+"/getCategories";
    return this.httpClient.get<ListResponseModel<Category>>(newPath);
  }

  getCategoriesByParentId(id:number):Observable<ListResponseModel<Category>>{
    if (id !== undefined) {
      let newPath = this.apiURL+"?id="+id;
      return this.httpClient.get<ListResponseModel<Category>>(newPath);
    }
    let path = this.apiURL;
    return this.httpClient.get<ListResponseModel<Category>>(path);
  }

  getTopCategories():Observable<ListResponseModel<Category>>{
    let path = this.apiURL;
    return this.httpClient.get<ListResponseModel<Category>>(path);
  }


}
