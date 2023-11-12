import { UserCreateOutputData } from "@usecase/user/create/UserCreateOutputData";
import { UserCreateInputData } from "@usecase/user/create/UserCreateInputData";
import { IUserCreateUseCase } from "@usecase/user/create/IUserCreateUseCase";
import { IUserCreatePresenter } from "@usecase/user/create/IUserCreatePresenter";
import { IUserRepository } from "@domain/domain/users/IUserRepository";
import { User } from "@domain/domain/users/User";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { TYPES } from "@/Types";

@injectable()
export class UserCreateInteractor implements IUserCreateUseCase {
  constructor(
    @inject(TYPES.IUserCreatePresenter)
    private readonly userCreatePresenter: IUserCreatePresenter,
    @inject(TYPES.IUserRepository)
    private readonly userRepository: IUserRepository
  ) {}

  public async handle(inputData: UserCreateInputData): Promise<void> {
    const exisntingUser = await this.userRepository.findByUserName(
      inputData.userName
    );
    if (exisntingUser) {
      throw new Error("User already exists");
    }
    const user = new User(inputData.userName);
    await this.userRepository.save(user);

    const outputData = new UserCreateOutputData(user.id, new Date());
    this.userCreatePresenter.complete(outputData);
  }
}
