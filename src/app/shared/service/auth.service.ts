import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(private http: HttpClient) { }

    public login(username: string, password: string): Observable<{}> {
        const body = { username, password };
        return this.http.post('https://192.168.0.8:3000/auth/login', body)
    }
}