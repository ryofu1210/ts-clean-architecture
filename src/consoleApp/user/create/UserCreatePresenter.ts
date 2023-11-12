import { IUserCreatePresenter } from "@usecase/user/create/IUserCreatePresenter";
import { UserCreateOutputData } from "@usecase/user/create/UserCreateOutputData";
import { UserCreateViewModel } from "./UserCreateViewModel";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { ICreateUserView } from "@/consoleApp/IConsoleView";
import { TYPES } from "@/Types";

@injectable()
export class UserCreatePresenter implements IUserCreatePresenter {
  constructor(@inject(TYPES.ICreateUserView) private readonly view: ICreateUserView) {}

  complete(outputData: UserCreateOutputData): void {
    const userId = outputData.id;
    const createdDate = outputData.created;
    const createdDateText = createdDate.toLocaleDateString("ja-JP");
    const viewModel = new UserCreateViewModel(userId, createdDateText);
    this.view.update(viewModel);
  }
}
