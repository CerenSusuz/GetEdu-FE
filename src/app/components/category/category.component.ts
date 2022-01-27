import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']

})
export class CategoryComponent {
  public get categoryService(): CategoryService {
    return this._categoryService;
  }
  public set categoryService(value: CategoryService) {
    this._categoryService = value;
  }

  categories!: Category[];
  currentCategory!: Category;

  parentFilter!: number;

  basePath = environment.baseURL;

  constructor(
    private _categoryService: CategoryService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.activatedRoute.params.subscribe(params=>{
      if (params['parentCategoryId'] === null) {
          this.getTopCategories()
        }else if(params['parentCategoryId'] > 0){
          this.getCategoriesByParentId(params["parentCategoryId"])
        }
    })
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response.data;
    })
  }

  getTopCategories() {
    this.categoryService.getTopCategories().subscribe(response => {
      this.categories = response.data;
    })
  }

  getCategoriesByParentId(id:number) {
    this.categoryService.getCategoriesByParentId(id).subscribe(response => {
      this.categories = response.data;
    })
  }

  getCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return "table-warning cursorPointer"
    }
    else {
      return "cursorPointer"
    }
  }

  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }

  getSelectedCategory(categoryId:number){
    if (this.parentFilter == categoryId) {
      return true;
    }else{
      return false;
    }
  }






}
