import { User } from "./User";

export interface IUserRepository {
  save(user: User): Promise<void>;
  findByUserName(userName: string): Promise<User | null>;
  findAll(): Promise<User[]>;
}
