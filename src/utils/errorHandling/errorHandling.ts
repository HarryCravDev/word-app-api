import { ValidateError } from '@tsoa/runtime';
import express from 'express';
import { AuthenticationError } from '../authentication/authentication';


export function errorHandler(
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ): express.Response | void {

    if (err instanceof ValidateError) {
      console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
      return res.status(422).json({
        message: "Validation Failed",
        details: err?.fields,
      });
    }
      
    if (err instanceof AuthenticationError) {
      console.log(err);
      return res.status(401).json({
        error: err.name,
        message: err.message,
      });
    }
  
    if (err instanceof Error) {
      console.log(err);
      return res.status(500).json({
        error: err.name,
        message: err.message,
      });
    }
    next();
  }