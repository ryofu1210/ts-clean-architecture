// import { DIContainer } from "./DIContainer";
import { Container } from "inversify";
import { TYPES } from "@/Types";
import { IUserCreateUseCase } from "@usecase/user/create/IUserCreateUseCase";
import { IUserCreatePresenter } from "@usecase/user/create/IUserCreatePresenter";
import { IUserRepository } from "@domain/domain/users/IUserRepository";
import { InMemoryUserRepository } from "@/inMemoryInfrastructure/users/InMemoryUserRepository";
import { UserCreateInteractor } from "@domain/application/user/UserCreateInteractor";
import { UserCreatePresenter } from "@/consoleApp/user/create/UserCreatePresenter";
import { UserController } from "./user/UserController";
import { ICreateUserView } from "@/consoleApp/IConsoleView";
import { ConsoleView } from "@/consoleApp/ConsoleView";

export class Setup {
  private static container: Container = new Container();

  public static run() {
    this.setupDebug();
  }

  private static setupDebug() {
    this.container
      .bind<IUserRepository>(TYPES.IUserRepository)
      .to(InMemoryUserRepository);
    this.container
      .bind<IUserCreateUseCase>(TYPES.IUserCreateUseCase)
      .to(UserCreateInteractor);
    this.container
      .bind<IUserCreatePresenter>(TYPES.IUserCreatePresenter)
      .to(UserCreatePresenter);
    this.container
      .bind<ICreateUserView>(TYPES.ICreateUserView)
      .to(ConsoleView);
    this.container
      .bind<UserController>(TYPES.UserController)
      .to(UserController);
  }

  public static getContainer(): Container {
    return this.container;
  }
}
