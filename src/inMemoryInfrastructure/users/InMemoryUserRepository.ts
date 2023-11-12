import { IUserRepository } from "@domain/domain/users/IUserRepository";
import { User } from "@domain/domain/users/User";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class InMemoryUserRepository implements IUserRepository {
  private users: User[] = [];

  async save(user: User): Promise<void> {
    this.users.push(user);
    console.log("InMemoryUserRepository users:", this.users);
  }

  async findByUserName(userName: string): Promise<User | null> {
    const user = this.users.find((user) => user.userName === userName);
    return user ?? null;
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }
}
