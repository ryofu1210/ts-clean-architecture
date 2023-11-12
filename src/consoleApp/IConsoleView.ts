import { UserCreateViewModel } from "@/consoleApp/user/create/UserCreateViewModel";

export interface ICreateUserView {
  update(viewModel: UserCreateViewModel): void;
}
