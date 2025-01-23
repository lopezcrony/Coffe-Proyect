import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Brand } from './brand.models';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  private apiUrl = 'http://localhost:3500/marca';

  constructor(private http: HttpClient) {}

  getAllProviders(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  createProvider(Brand: Brand): Observable<Brand> {
    return this.http.post<Brand>(this.apiUrl, Brand, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  updateProvider(Brand: Brand): Observable<Brand> {
    return this.http.put<Brand>(
      `${this.apiUrl}/${Brand.idMarca}`,
      Brand,
      { headers: this.getHeaders() }
    ).pipe(catchError(this.handleError));
  }

  updateStatusProvider(id: number, status: boolean): Observable<Brand> {
    return this.http.patch<Brand>(
      `${this.apiUrl}/${id}`,
      { estadoBrand: status },
      { headers: this.getHeaders() }
    ).pipe(catchError(this.handleError));
  }

  deleteProvider(id: number): Observable<void> {
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
