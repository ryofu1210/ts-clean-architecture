import { IUserCreatePresenter } from "@usecase/user/create/IUserCreatePresenter";
import { UserCreateOutputData } from "@usecase/user/create/UserCreateOutputData";
import { UserCreateViewModel } from "./UserCreateViewModel";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class UserCreatePresenter implements IUserCreatePresenter {
  complete(outputData: UserCreateOutputData): void {
    const userId = outputData.id;
    const createdDate = outputData.created;
    const createdDateText = createdDate.toLocaleDateString('ja-JP');
    const viewModel = new UserCreateViewModel(userId, createdDateText);
  }
}
