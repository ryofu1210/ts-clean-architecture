import { UserCreateViewModel } from "@/consoleApp/user/create/UserCreateViewModel";
import { ICreateUserView } from "@/consoleApp/IConsoleView";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class ConsoleView implements ICreateUserView {
  public update(viewModel: UserCreateViewModel) {
    console.log("id:" + viewModel.userId + " created:" + viewModel.createdData);
  }
}
