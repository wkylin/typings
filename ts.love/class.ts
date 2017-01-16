interface Db {
  host: string;
  port: number;
}

class MySQL implements Db {
  host: string;
  port: number;

  constructor(host: string, port: number) {
    this.host = host;
    this.port = port;
    console.log('正在连接 ' + this.host + ":" + this.port + " 的数据库....")
  }
}

let mysql = new MySQL('localhost', 3306);


interface Person {
  readonly IdCard: string; // 身份证号
}


class Person implements Person {
  readonly IdCard: string = "42xxxxxxxxxxxxxxx";

  constructor() {
  }
}