import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { HttpCacheService } from './http-cache.service';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CacheInterceptor implements HttpInterceptor {

    constructor(private cacheService: HttpCacheService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //pass along non-cacheble requets and invalidate cache
        if(req.method !== 'GET'){
            console.log(`Invalidating cache : ${req.method} ${req.url}`);
            this.cacheService.invalidateCache();
            return next.handle(req);
        }

        //attempt to retrieve cached response
        const cachedResponse : HttpResponse<any> = this.cacheService.get(req.url);

        //return cached response
        if(cachedResponse){
            console.log(`Returing cached response :${cachedResponse.url}`);
            console.log(cachedResponse);
            return of(cachedResponse);
        }

        //send request to server and cache that reponse
        return next.handle(req)
            .pipe(
                tap(event => {
                    if(event instanceof HttpResponse){
                        console.log('Adding item to cache'+ req.url);
                        this.cacheService.put(req.url,event);
                    }
                })
            );
    }
    
}