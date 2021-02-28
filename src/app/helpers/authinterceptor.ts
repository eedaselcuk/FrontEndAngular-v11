import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HTTP_INTERCEPTORS} from "@angular/common/http";
import { Observable } from "rxjs";

import { StorageService } from '../service/storage.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()

export class Interceptor implements HttpInterceptor {
  constructor(private token: StorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let auth_req = req;
    const token = this.token.getToken();
    if (token != null) {
      auth_req = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }
    return next.handle(auth_req);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
];
