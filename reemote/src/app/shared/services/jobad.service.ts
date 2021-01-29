import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobad } from '../../models/jobad';
import { map } from 'rxjs/operators';
import { JobadProcessResult } from '../../models/jobad-process-result';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';


@Injectable()
export class JobadService {


  private baseUrl = 'http://localhost:3000/api/jobAdvertisements'

  private config = new MatSnackBarConfig()

  constructor(private httpClient: HttpClient, private router: Router, private snackBar: MatSnackBar) {
    this.config.horizontalPosition = "end"
    this.config.verticalPosition = "bottom"
    this.config.duration = 5000
  }

  createJobad(jobad: Object) {

    try {
      this.httpClient.post<Jobad>(this.baseUrl + '/create', jobad).subscribe(
        res => {
          console.info("İlan Kaydedildi")
          this.router.navigateByUrl('/jobads/' + res._id)

          this.snackBar.open("İlan Yayınlandı", '', this.config)
        },
        err => {
          console.error("İlan Kaydedilemedi: " + err)
          this.snackBar.open("İlan Yayınlanamadı", '', this.config)
        }
      )
    } catch (err) {
      console.error("İlan Kaydedilemedi: " + err)
      this.snackBar.open("İlan Yayınlanamadı", '', this.config)
    }
  }

  updateJobad(jobad: Jobad) {
    try {
      this.httpClient.put<Jobad>(this.baseUrl + '/update', jobad).subscribe(
        res => {
          console.info("İlan Güncellendi")
          this.router.navigateByUrl('/jobads/' + res._id)
          this.snackBar.open("İlan Güncellendi", '', this.config)
        },
        err => {
          console.error("İlan Güncellenemedi: " + err)
          this.snackBar.open("İlan Güncellenemedi", '', this.config)
        }
      )
    }
    catch (err) {
      //toast error
      console.error("İlan Güncellenemedi: " + err)
      this.snackBar.open("İlan Güncellenemedi", '', this.config)
    }
  }

  deleteJobad(jobadId: String) {
    try {
      this.httpClient.delete(this.baseUrl + '/delete/' + jobadId).subscribe(
        (res) => {
          console.info("İlan Silindi")
          this.router.navigateByUrl('/')
          this.snackBar.open("İlan Silindi", '', this.config)
        },
        err => {
          console.error("İlan Silinemedi: " + err)
          this.snackBar.open("İlan Silinemedi, Tekrar Deneyin", '', this.config)
        }
      )
    } catch (err) {
      console.error("İlan Silinemedi: " + err)
      this.snackBar.open("İlan Silinemedi, Tekrar Deneyin", '', this.config)
    }
  }


  getJobadListPagination(categoryName: String, page: number,
    pageSize: number,
  ): Observable<JobadProcessResult> {

    var searchUrl = `${this.baseUrl}/search/findByCategory?category=${categoryName}&page=${page}&size=${pageSize}`; //Kategori listelendiğinde pagination ile

    if (categoryName == "") { searchUrl = `${this.baseUrl}?page=${page}&size=${pageSize}`; } //Her ilan listelendiğinde pagination ile

    console.log("search url " + searchUrl);
    return this.httpClient.get<JobadProcessResult>(searchUrl);
  }

  getJobadList(categoryName: String): Observable<Jobad[]> {

    var searchUrl = `${this.baseUrl}/search/findByCategory?category=${categoryName}`; //Kategori listelendiğinde
    if (categoryName == "") { searchUrl = this.baseUrl; } //Her ilan listelendiğinde

    return this.getJobads(searchUrl);
  }

  searchJobads(keyword: String): Observable<Jobad[]> {
    var searchUrl = `${this.baseUrl}/search/findByTitleLikeIgnoreCase?title=${keyword}`;//search yapıldığında
    return this.getJobads(searchUrl);

  }

  searchJobadsPagination(keyword: String, page: number,
    pageSize: number,
  ): Observable<JobadProcessResult> {

    var searchUrl = `${this.baseUrl}/search/findByTitleLikeIgnoreCase?title=${keyword}&page=${page}&size=${pageSize}`; //Search pagination ile

    console.log(searchUrl);
    return this.httpClient.get<JobadProcessResult>(searchUrl);
  }

  private getJobads(searchUrl: string): Observable<Jobad[]> {
    return this.httpClient.get<JobadProcessResult>(searchUrl).pipe(
      map(response => response.jobads)
    );
  }

  getJobad(jobId: string): Observable<Jobad> {
    const jobAdUrl = `${this.baseUrl}/${jobId}`
    console.log(jobAdUrl);
    return this.httpClient.get<Jobad>(jobAdUrl);
  }


}