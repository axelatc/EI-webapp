import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginRequest} from "./models/authentication";
import {Observable} from "rxjs";
import {ApiPathsEnum} from "../api-paths.enum";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  signin(loginRequest: LoginRequest): Observable<LoginRequest> {
    return this.http.post<LoginRequest>(`${this.apiUrl}${ApiPathsEnum.Signin}`, loginRequest);
    //TODO: handle error + show toast
  }
}
