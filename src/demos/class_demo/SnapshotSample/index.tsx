import React, { PureComponent } from "react";
import ss from "./index.module.css";

interface IState {
  messages: Array<string>;
}

export default class SnapshotSample extends PureComponent<any, IState> {
  readonly state = { messages: [] };
  interval!: number;
  rootNode: any;

  handleNewMessage() {
    this.setState((prev) => ({
      messages: [`msg ${prev.messages.length}`, ...prev.messages],
    }));
  }

  componentDidMount() {
    for (let i = 0; i < 20; i++) this.handleNewMessage();
    this.interval = window.setInterval(() => {
      if (this.state.messages.length > 200) {
        window.clearInterval(this.interval);
        return;
      }
      this.handleNewMessage();
    }, 1000);
  }
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  // 这两个方法防止历史消息滚动
  getSnapshotBeforeUpdate() {
    // 返回当前容器节点的滚动高度
    return this.rootNode.scrollHeight;
  }
  componentDidUpdate(
    prevProps: any,
    prevState: any,
    prevScrollHeight: number // 拿到页面前一个snapshot的节点节点高度
  ) {
    const scrollTop = this.rootNode.scrollTop;
    if (scrollTop < 5) return;
    this.rootNode.scrollTop =
      scrollTop + (this.rootNode.scrollHeight - prevScrollHeight);
  }

  render() {
    return (
      <div className={ss.container} ref={(n) => (this.rootNode = n)}>
        {this.state.messages.map((msg) => (
          <div>{msg}</div>
        ))}
      </div>
    );
  }
}
