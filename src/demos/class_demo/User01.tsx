import React from "react";

/**
 * 等价
 * interface UserInfo {
 *  name: string;
 *  age: number;
 * }
 */
type UserInfo = {
  //react 规定不能通过 this.props.xxx 和 this.state.xxx 直接进行修改,所以可以通过 readonly 将 State 和 Props 标记为不可变数据
  readonly name: string;
  readonly age: number;
};

/**
 * const User = ({ name, age }: UserInfo) => {}  这种方式也行
 * 支持 children 的传入，即使在我们的类型中并没有定义它
 */
//React.FunctionComponent<P> or React.FC<P>
const User01: React.FC<UserInfo> = ({ name, age, children }) => {
  return (
    <div>
      <p>{name}</p>
      {children}
      <p>{age}</p>
    </div>
  );
};

export default User01;
