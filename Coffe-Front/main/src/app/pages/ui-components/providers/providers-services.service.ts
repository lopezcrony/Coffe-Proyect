import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Proveedor } from './providers.models';

@Injectable({
  providedIn: 'root',
})


export class ProvidersService {
  private apiUrl = 'http://localhost:3500/proveedores';

  constructor(private http: HttpClient) {}

  getAllProviders(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  createProvider(proveedor: Proveedor): Observable<Proveedor> {
    return this.http.post<Proveedor>(this.apiUrl, proveedor, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  updateProvider(proveedor: Proveedor): Observable<Proveedor> {
    return this.http.put<Proveedor>(
      `${this.apiUrl}/${proveedor.idProveedor}`,
      proveedor,
      { headers: this.getHeaders() }
    ).pipe(catchError(this.handleError));
  }

  updateStatusProvider(id: number, status: boolean): Observable<Proveedor> {
    return this.http.patch<Proveedor>(
      `${this.apiUrl}/${id}`,
      { estadoProveedor: status },
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
