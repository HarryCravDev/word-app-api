import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
    Security
  } from "tsoa";
import { AuthService } from "../services/authService";
import { LoginData } from "../dtos/LoginData.type";
import { SignupData } from "../dtos/SignupData.type";
  
@Route("auth")
export class AuthController extends Controller {

    @SuccessResponse("201", "Logged in.") // Custom success response
    @Post('login')
    @Security('jwt')
    public async login(
        @Body() userData: LoginData
    ): Promise<{ success: boolean, message: string }> {
        console.log("Login method");
        const res = new AuthService().login(userData);

        console.log("Response: ", res);

        if(!res.success){
            this.setStatus(400); // set return status 201
            return res;
        }

        this.setStatus(201); // set return status 201
        return res;
    }

    @Post('signup')
    @Security('jwt')
    public async signup(
        @Body() userData: SignupData
    ): Promise<{ success: boolean, message: string }> {
        console.log("Signup method");
        const res = await new AuthService().signup(userData);

        console.log("Response: ", res);

        if(!res.success){
            this.setStatus(400); // set return status 201
            return res;
        }

        this.setStatus(201); // set return status 201
        return res;
    }
}
  