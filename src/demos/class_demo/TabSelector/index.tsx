import React, { ReactElement } from "react";
import ss from "./index.module.css";

type Option = {
  name: string;
  value: string;
};

interface IProps {
  value: string;
  options: Array<Option>;
  onClick: (value: string) => void;
  renderChild: (value: string) => ReactElement; //该使用哪种 element? https://medium.com/better-programming/typescript-reactjs-the-element-vs-reactelement-vs-htmlelement-vs-node-confusion-6cda21315ddd
}

class TabSelector extends React.PureComponent<IProps> {
  static defaultProps = {
    value: "",
    options: [],
  };

  render() {
    const { options, value, onClick, renderChild } = this.props;
    return (
      <div className={ss.container}>
        <ul className={ss.tabSelector}>
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`${ss.tabItem} ${
                opt.value === this.props.value ? ss.selected : ""
              }`}
              onClick={() => onClick(opt.value)}
            >
              {opt.name}
            </li>
          ))}
        </ul>
        <br />
        <br />
        {value && renderChild(value)}
      </div>
    );
  }
}

const colors = [
  { name: "Red", value: "red" },
  { name: "Blue", value: "blue" },
  { name: "Orange", value: "orange" },
];
const animals = [
  { name: "Tiger", value: "tiger" },
  { name: "Cow", value: "cow" },
];
class TabSelectorDemo extends React.PureComponent {
  readonly state = {
    // 当前选中的颜色
    color: "",
    animal: "",
  };
  render() {
    return (
      <>
        <TabSelector
          value={this.state.color}
          onClick={(v) => {
            this.setState((old) => {
              return { ...old, color: v };
            });
          }}
          options={colors}
          renderChild={(c) => (
            <span
              style={{
                display: "inline-block",
                backgroundColor: c,
                width: "40px",
                height: "40px",
              }}
            />
          )}
        />
        <br />
        <br />
        <br />
        <TabSelector
          renderChild={(animal) => {
            console.log(animal);
            return (
              // 若放在 public 下, 则需要使用 process.env.PUBLIC_URL + '/image.png'
              // 这里通过 require 导入图片需要 最后 .default
              // 若不添加 .default那么需要配置上设置 url-loader 的 option.esModule = false 即可
              <img
                alt=""
                width="100px"
                src={require(`./${animal}.png`).default}
              />
            );
          }}
          options={animals}
          value={this.state.animal}
          onClick={(v) => {
            this.setState((old) => {
              return { ...old, animal: v };
            });
          }}
        />
      </>
    );
  }
}

export default TabSelectorDemo;
