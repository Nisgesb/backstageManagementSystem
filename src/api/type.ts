// 请求登录接口方法的形参类型
export interface loginForm {
  username: string;
  password: string;
}

// 登录请求返回的data的类型
interface dataType {
  token: string;
}

// 登录接口返回值类型
export interface loginResponseData {
  code: number;
  data: dataType;
}

// 定义服务器返回的用户数据类型
interface userInfo {
  userId: number;
  avatar: string;
  username: string;
  password: string;
  desc: string;
  roles: string[];
  buttons: string[];
  routes: string[];
  token: string;
}

interface user {
  checkUser: userInfo;
}

// 请求用户数据返回值类型
export interface userResponseData {
  code: number;
  data: user;
}
