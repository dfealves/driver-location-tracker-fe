import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private jwtHelper: JwtHelperService = new JwtHelperService();
    constructor(private http: HttpClient) { }

    public login(username: string, password: string): Observable<{}> {
        const body = { username, password };
        return this.http.post('https://192.168.0.8:3000/auth/login', body).pipe(
            tap((token) => {
                localStorage.setItem('access_token', JSON.stringify(token))
            })
        )
    }

  public  logout(): void {
        localStorage.removeItem('access_token');
    }

   public isAuthenticated(): boolean {
        return !!localStorage.getItem('access_token');
    }

    public getDecodedToken(): any {
        const token = JSON.stringify(localStorage.getItem('access_token'));
        return this.jwtHelper.decodeToken(token)
    }
}