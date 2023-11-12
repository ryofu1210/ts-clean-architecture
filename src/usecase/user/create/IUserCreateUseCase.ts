import { UserCreateInputData } from "./UserCreateInputData";
// import { UserCreateOutputData } from "./UserCreateOutputData";

export interface IUserCreateUseCase {
  handle(inputData: UserCreateInputData): Promise<void>;
}
