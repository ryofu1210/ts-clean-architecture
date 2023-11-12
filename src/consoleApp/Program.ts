import { Setup } from "./Setup";
import { UserController } from "./user/UserController";
import { TYPES } from "@/Types";
import * as readline from "readline";

export class Program {
  public static main() {
    Setup.run();
    var diContainer = Setup.getContainer();
    const userController = diContainer.get<UserController>(
      TYPES.UserController
    );

    process.stdin.setEncoding("utf8");
    const reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    console.log("=======================================");
    console.log("Welcome to sample of clean architecture");
    console.log("=======================================");
    console.log();
    console.log("Enter the name of the new user.");
    console.log("username:");

    reader.on("line", (line: string) => {
      //改行ごとに"line"イベントが発火される
      // lines.push(line); //ここで、lines配列に、標準入力から渡されたデータを入れる
      userController.createUser(line);
    });
    //reader.on("close", () => {
    //  //標準入力のストリームが終了すると呼ばれる
    //  console.log(lines);
    //});

    // console.log("press any key to exit.");
    // Console.ReadKey();
  }
}
