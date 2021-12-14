import { LoginData } from "../dtos/LoginData.type";
import { SignupData } from "../dtos/SignupData.type";

export type UserCreationParams = Pick<any, "email" | "name" | "phoneNumbers">;

export class AuthService {

  public login(userData: LoginData): { success: boolean, message: string } {

    const user = {
        success: true,
        email: "harrycrav@gmail.com",
        password: "a",
        apiRes: true
    };

    // !! TASKS TODO
    // Get user by email from DB

    // Parse user password and verify match with userData

    // Setup JWT and response with a valid one if details are correct

    if(userData.password === user.password){
        return { success: true, message: "Logged in." };
    };

    return {
      success: false,
      message: "Details not recognised."
    };
  }

  public signup(signupData: SignupData): { success: boolean, message: string, user?: {} } {

    // Check if user exists with email used - reject if true

    // Create user with details used

    // Return message confirming user was registered correctly.

    const testUserData = {
      id: Math.floor(Math.random() * 100),
      ...signupData
    };

    return { success: true, message: "User added.", user: testUserData };
  }

}