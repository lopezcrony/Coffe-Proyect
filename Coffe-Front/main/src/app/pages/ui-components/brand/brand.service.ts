import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Brand, CreateBrandPayload } from './brand.models';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  private apiUrl = `${environment.apiUrl}/marca`;

  constructor(private http: HttpClient) {}

  getAllBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  createBrand(payload: CreateBrandPayload): Observable<any> {
    return this.http.post<any>(this.apiUrl, payload, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  updateBrand(Brand: Brand): Observable<Brand> {
    return this.http.put<Brand>(
      `${this.apiUrl}/${Brand.idMarca}`,
      Brand,
      { headers: this.getHeaders() }
    ).pipe(catchError(this.handleError));
  }

  updateStatusBrand(id: number, status: boolean): Observable<Brand> {
    return this.http.patch<Brand>(
      `${this.apiUrl}/${id}`,
      { estadoBrand: status },
      { headers: this.getHeaders() }
    ).pipe(catchError(this.handleError));
  }

  deleteBrand(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

 
  private handleError(error: HttpErrorResponse) {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente o de la red
      errorMessage = error.error.message;
    } else {
      // Error del lado del servidor
      errorMessage = error.error.message;
    }
    return throwError(() => new Error(errorMessage));
  }
}
