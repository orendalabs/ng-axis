﻿///<reference path="../../../../../../node_modules/abp-web-resources/Abp/Framework/scripts/abp.d.ts"/>

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    getToken(): string {
        return axis.auth.getToken();
    }

    getTokenCookieName(): string {
        return axis.auth.tokenCookieName;
    }

    clearToken(): void {
        axis.auth.clearToken();
    }

    setToken(authToken: string, expireDate?: Date): void {
        axis.auth.setToken(authToken, expireDate);
    }

    //refresh token
    getRefreshToken(): string {
        return axis.auth.getRefreshToken();
    }

    getRefreshTokenCookieName(): string {
        return axis.auth.refreshTokenCookieName;
    }

    clearRefreshToken(): void {
        axis.auth.clearRefreshToken();
    }

    setRefreshToken(refreshToken: string, expireDate?: Date): void {
        axis.auth.setRefreshToken(refreshToken, expireDate);
    }
}