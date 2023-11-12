import { IUserCreateUseCase } from "@usecase/user/create/IUserCreateUseCase";
import { IUserCreatePresenter } from "@usecase/user/create/IUserCreatePresenter";
import { IUserRepository } from "@domain/domain/users/IUserRepository";

// export class DIContainer {
//   private static dependencies = new Map<string, any>();

//   static register(name: string, dependency: any) {
//     DIContainer.dependencies.set(name, dependency);
//   }

//   static resolve<T>(name: string): T {
//     const dependency = DIContainer.dependencies.get(name);
//     if (!dependency) {
//       throw new Error(`Dependency '${name}' not found.`);
//     }
//     return dependency;
//   }
// }
