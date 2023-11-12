export class UserCreateViewModel {
  public userId: string;
  public createdData: string;

  public constructor(userId: string, createdDate: string) {
    this.userId = userId;
    this.createdData = createdDate;
  }
}
