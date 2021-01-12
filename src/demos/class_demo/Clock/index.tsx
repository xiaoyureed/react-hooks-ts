import React from "react";
import ss from "./index.module.css";

export default class Clock extends React.PureComponent<
  any,
  {
    date: Date;
  }
> {
  timer!: NodeJS.Timeout;

  constructor(props: any) {
    super(props);
    console.log("Clock constructed");
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    console.log("Clock did mount");
    this.timer = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    // 释放资源
    console.log("Clock will unmount");
    clearInterval(this.timer);
  }

  componentDidUpdate() {
    console.log("Clock did update");
  }

  render() {
    return (
      <div className={ss.container}>
        <p>生命周期方法</p>
        <p>定时器</p>
        <p>class 的 constructor 方法</p>
        <div className={ss.content}>
          <h1>Hello World.</h1>
          <h2>{this.state.date.toLocaleTimeString()}</h2>
        </div>
      </div>
    );
  }
}
