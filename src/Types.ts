// import { UserCreateOutputData } from "@usecase/user/create/UserCreateOutputData";
// import { UserCreateInputData } from "@usecase/user/create/UserCreateInputData";
// import { IUserCreateUseCase } from "@usecase/user/create/IUserCreateUseCase";
// import { IUserCreatePresenter } from "@usecase/user/create/IUserCreatePresenter";
// import { IUserRepository } from "@domain/domain/users/IUserRepository";

export const TYPES = {
  IUserRepository: Symbol.for("IUserRepository"),
  IUserCreatePresenter: Symbol.for("IUserCreatePresenter"),
  IUserCreateUseCase: Symbol.for("IUserCreateUseCase"),
  UserController: Symbol.for("UserController"),
  ICreateUserView: Symbol.for("ICreateUserView"),
};

