export type UserCreationParams = Pick<any, "email" | "name" | "phoneNumbers">;

export class UsersService {
  public get(id: number, name?: string): any {
    return {
      id,
      email: "jane@doe.com",
      name: name ?? "Jane Doe",
      status: "Happy",
      phoneNumbers: [],
    };
  }

  public create(userCreationParams: any): any {
    return {
      id: Math.floor(Math.random() * 10000), // Random
      status: "Happy",
      ...userCreationParams,
    };
  }
}