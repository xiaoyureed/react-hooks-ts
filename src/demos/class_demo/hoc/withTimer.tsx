import React, { Component } from "react";

/**
 * add props "time" for a component
 * @param Wrapped component to be wrapped
 */
const withTimer = (Wrapped: any) => {
  return class extends Component {
    readonly state = {
      time: new Date(),
    };
    // 叹号: 去除 null, 表示必须存在
    timerId!: NodeJS.Timeout;

    componentDidMount() {
      this.timerId = setInterval(() => {
        this.setState({ time: new Date() });
      }, 1000);
    }

    componentWillUnmount() {
      clearInterval(this.timerId);
    }

    render() {
      // props 原封未动, 只是为其增加了一个 time 属性
      // 
      return <Wrapped time={this.state.time} {...this.props} />;
    }
  };
};

export default withTimer;
