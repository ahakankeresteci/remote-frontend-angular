import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jobad } from '../../models/jobad';
import { JobadProcessResult } from '../../models/jobad-process-result';
import { JobadService } from '../../shared/services/jobad.service';

@Component({
  selector: 'app-jobad-list',
  templateUrl: './jobad-list.component.html',
  styleUrls: ['./jobad-list.component.scss']
})
export class JobadListComponent implements OnInit {

  
  jobads: Jobad[] = []
  currenCategoryId!: String 
  isSearching: Boolean = false
  
  pageNumber: number = 1
  pageSize: number = 10
  totalElements: number =0

  prevCategoryId!: String 
  previousKeyword!: string 

  constructor(private jobadListService: JobadService,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) document:Document) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listJobads();
    })
  }

  listJobads() {
    this.isSearching= this.route.snapshot.paramMap.has('keyword');
    console.log(`isSearching: ${this.isSearching}`)
    
    if(this.isSearching){
      this.handleSearchJobads();
    }
    else{
      this.handleListJobads();
    }

  }

  handleListJobads(){
    var hasCategory: boolean = this.route.snapshot.paramMap.has('name');
    console.log(`hasCategory: ${hasCategory}`)
    if(hasCategory){
      this.currenCategoryId = this.route.snapshot.paramMap.get('name')!;
    }else{
      this.currenCategoryId="";
    }


    //kategori değiştiğinde page 1'e getir
    if(this.prevCategoryId != this.currenCategoryId){
      this.pageNumber=1;
    }
    this.prevCategoryId=this.currenCategoryId;
    console.log(`currentCategory=${this.currenCategoryId}, pageNum=${this.pageNumber}`)


    this.jobadListService.getJobadListPagination
    (this.currenCategoryId, this.pageNumber-1,this.pageSize).subscribe(this.processResult())
  }
  processResult(){
    return (data: JobadProcessResult) => {

      this.jobads = data.jobads;
      this.pageNumber = data.page.number + 1;
      this.pageSize = data.page.size;
      this.totalElements = data.page.totalElements;

    }
  }

  updatePageSize(updatedPageSize:number){
    
    console.log(updatedPageSize)
    this.pageSize = updatedPageSize;
    this.pageNumber=1;
    this.listJobads();
  }

  handleSearchJobads(){
    const keyword: string = this.route.snapshot.paramMap.get('keyword')!;
    console.log(`keyword: ${keyword}`)

    if(this.previousKeyword!=keyword){
      this.pageNumber=1;
    }
    this.previousKeyword=keyword;

    console.log(`keyword=> ${keyword} pageNum=> ${this.pageNumber}`)
    this.jobadListService.searchJobadsPagination(keyword, 
      this.pageNumber-1,
      this.pageSize).subscribe(this.processResult()
    );
  }



}
