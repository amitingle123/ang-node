import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AddHeaderInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
        console.log('req from : '+ `${req.url}`);
        
        
        //clone the request as it is immutable:
        const myreq: HttpRequest<any> = req.clone({
           setHeaders : {'Content-Type':'application/json'}

        });

        return next.handle(req);

        
    }
    
}