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
                Authorization: `Bearer 4TLpIt7BoDEzomFNgKwdha6SEx6Stt-zkJzb-jGwKdW5TYE3WE_nIlSSvzz_1DGAcAZEYY2FWbCE_tZiXTTkChTtfn_Uls8Ej3-abV3g99q-TVcNrtzkfKe-MVZwYFyIhR_DKfAw05pt5wQ9mYt89CWPRveg_oE3bn_EujAA8kFn9JY179qQaLc5hXmLNFafaXUr4Qgnyr9L1Hl9jVuM6lZIYA7wsKjg8UiJiKIDz5dumhpifE8bdze-Ts3iMcMl-SzjuNJWp0ZEkJBVa-VwWLa9l6oBoZM_cmz-elDa_0lZkrjQXvP7uYZ6GpCGRqb_lO8lpaV0IPpt4p7QzrqkZjCNxFWbrT6Apj18DAynZgywP0ksRqUCN63A-x_svJ_e4Wu1oFs6S6EFFjENIxJQBx1emPpkSwfJEQxm0BNIo4Wv-PetMbvjl2_YEzOp4aW89HDXTYW_38y6-OuI3TK3tBnM5jHBE8y4wQWX5Evcw6s`
            }
        });
        return next.handle(request);
    }
}