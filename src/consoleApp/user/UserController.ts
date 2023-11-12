import { IUserCreateUseCase } from "@usecase/user/create/IUserCreateUseCase";
import { UserCreateInputData } from "@usecase/user/create/UserCreateInputData";
import { inject, injectable } from "inversify";
import "reflect-metadata";
import { TYPES } from "@/Types";

@injectable()
export class UserController {
  constructor(
    @inject(TYPES.IUserCreateUseCase)
    private readonly userCreateUseCase: IUserCreateUseCase
  ) {}

  public async createUser(userName: string) {
    const inputData = new UserCreateInputData(userName);
    await this.userCreateUseCase.handle(inputData);
  }
}
