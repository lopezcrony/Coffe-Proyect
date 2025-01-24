import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from './product.models';

@Injectable({
  providedIn: 'root',
})


export class ProductsService {
  private apiUrl = 'http://localhost:3500/Productos';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  createProduct(Product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, Product, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  updateProduct(Product: Product): Observable<Product> {
    return this.http.put<Product>(
      `${this.apiUrl}/${Product.idProducto}`,
      Product,
      { headers: this.getHeaders() }
    ).pipe(catchError(this.handleError));
  }

  updateStatusProduct(id: number, status: boolean): Observable<Product> {
    return this.http.patch<Product>(
      `${this.apiUrl}/${id}`,
      { estadoProduct: status },
      { headers: this.getHeaders() }
    ).pipe(catchError(this.handleError));
  }

  deleteProduct(id: number): Observable<void> {
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
