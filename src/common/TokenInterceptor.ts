import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                AccessToken: `ztNXwKWdzy-EhsxRqJcG7Z1r9CdBNbN-04IwSW_t-HCrjilsQF4ZkUaNZLa3c3DAHHrxvpvVLimDw7UZVMbN_HPQXMw6LirgySGKAnV1Dx4trQOGHYQ2Hk6o0gu7ztEKNPSTko7X2paERIITcKU86jcgHpVqIiESbwYLGn4Kw52VgQO5SKswQObEigvZfp7bbvBByisqyaS8x3WNtd_fql78eIpAX_iDfJsEsq13euPa3XTfEku-JNN7wMo-zd55EaW1EykKAwH2TdZAXXWivh4BReCb1W3gH4Z_DfGNo4g-JEDNRutI47MIkO9fZt751Y1qTCyYOnXbRr_HgStoQ12cIASdKZmbB-kOg2wfsJg4fwHSdErp7ZW3_k1LLeWSzBeveNiIaQDJyuZ9puRLgpQRN1ADHZ2v0NNzf7FUezuzcq-OVR_lFfgxHxdJKrtM2DiPu8BkMeWiG08zlInlGDxUnALPtGmVY5O72adCNiXUVOQzceM3P8ohDunlc89k6eUfCdCvKMtwyo5SLUsDC9R6TxCFbUyKKOJ71sz2FTMYyoA8MwM9b6EjCEPydPZQMY-KqydOUIlRMO8pZLrHRwe6rTabIIcTy3G-A0WoWkQ`
            }
        });
        return next.handle(request);
    }
}