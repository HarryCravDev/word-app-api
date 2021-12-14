import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import config from 'config';

export class AuthenticationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthenticationError';
  }
}

function authenticationError(message: string) {
  throw new AuthenticationError(message);
}

export function expressAuthentication(request: express.Request, securityName: string, scopes?: string[]): Promise<any> {
  if (securityName === 'jwt') {
    const token = request.body.token || request.query.token || request.headers['authorization'];

    return new Promise((resolve, reject) => {
      if (!token) {
        reject(authenticationError('No token provided'));
      }

      jwt.verify(token.split('Bearer ')[1], config.get('app.secret'), function (err: any, decoded: any) {
        if (err) {
          reject(err);
        } else {
          // Check if JWT contains all required scopes
          if (scopes) {
            for (const scope of scopes) {
              if (!decoded.scopes.includes(scope)) {
                reject(authenticationError('JWT does not contain required scope.'));
              }
            }
          }
          resolve(decoded);
        }
      });
    });
  } else {
    return Promise.reject(authenticationError('Authentication not recognised.'));
  }
}