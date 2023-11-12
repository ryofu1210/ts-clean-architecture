import crypto from "crypto";

export class User {
  public readonly id: string;
  public readonly userName: string;

  constructor(userName: string);
  constructor(userName: string, id: string);
  constructor(userName: string, id?: string) {
    this.id = id ?? this.generateUniqueId();
    this.userName = userName;
  }

  private generateUniqueId(): string {
    // UUIDの生成に関しては、適切なライブラリを使用するか、独自の実装が必要
    // ここでは、仮の方法として単純なランダム文字列を生成しています
    // return Math.random().toString(36).substring(2, 15);
    return crypto.randomUUID();
  }
}
