import React, { useCallback, useState } from "react";
import Clock from "./class_demo/Clock";
import SnapshotSample from "./class_demo/SnapshotSample";
import TabSelectorDemo from "./class_demo/TabSelector";
import TodoClass from "./class_demo/TodoClass";
import Locale from "./hooks_demo/UseContextDemo/Locale";
import CommentBoard from "./hooks_demo/CommentBoard";
import ss from "./Demos.module.css";
import FunctionAsSonComponent from "./FunctionAsSonComponent";
import LayoutHeaderFooter from "./layout/LayoutHeaderFooter";
import LayoutResize from "./layout/LayoutResize";
import LayoutSider from "./layout/LayoutSider";
import TodoAppWithoutCss from "./hooks_demo/TodoAppWithoutCss";
import TodoApp from "./hooks_demo/TodoApp";
import UseContextDemo from "./hooks_demo/UseContextDemo";
import ArticleList from "./hooks_demo/UseContextDemo/ArticleList";
import CountLimit from "./hooks_demo/UseEffectDemo/CountLimit";
import IntervalHook from "./hooks_demo/UseEffectDemo/IntervalHook";
import AsyncReqDemo from "./hooks_demo/UseEffectDemo/AsyncReqDemo";
import CountDown from "./hooks_demo/UseEffectDemo/CountDown";
import UseReducerDemo from "./hooks_demo/UseReducerDemo";
import UseRefDemo from "./hooks_demo/UseRefDemo";
import PrevDemo from "./hooks_demo/UseRefDemo/PrevDemo";
import ThemedButton from "./hooks_demo/UseStateDemo/ThemedButton";
import CountAddHook from "./hooks_demo/UseStateDemo/CountAddHook";
import TimeoutPrint from "./hooks_demo/UseRefDemo/why_ref/TimeoutPrint";
import TimeoutPrintUseRef from "./hooks_demo/UseRefDemo/why_ref/TimeoutPrintUseRef";
import StepCounterWithContextAndReducer from "./hooks_demo/UseContextDemo/optimize_context_with_reducer/StepCounterWithContextAndReducer";
import DefaultPropsGood from "./default_props/DefaultPropsGood";
import MeasureExample from "./hooks_demo/UseRefDemo/callback_ref/MeasureExample";
import Wrapper from "./layout/responsive_layout/good/HooksAndContext";
// import Crud from "./hooks_demo/Crud";

const routes = [
  // {path: "crud-hooks", component: Crud},
  { path: "todo-hooks-perfect", component: TodoApp },
  { path: "todo-without-css", component: TodoAppWithoutCss },
  { path: "todo-class", component: TodoClass },
  // blow is about class component
  { path: "tab-selector", component: TabSelectorDemo },
  { path: "snapshot", component: SnapshotSample },
  { path: "func-as-son-comp", component: FunctionAsSonComponent },
  { path: "clock", component: Clock },
  // blow is about hooks
  { path: "comment-board", component: CommentBoard },
  { path: "use-context", component: UseContextDemo },
  { path: "use-context-locale", component: Locale },
  { path: "use-context-articles", component: ArticleList },
  {
    path: "use-context-with-useMemo-reducer",
    component: StepCounterWithContextAndReducer,
  },
  { path: "use-effect-set-interval", component: IntervalHook },
  { path: "use-effect-count-limit", component: CountLimit },
  { path: "use-effect-count-down", component: CountDown },
  { path: "use-effect-async-req", component: AsyncReqDemo },
  { path: "use-reducer", component: UseReducerDemo },
  { path: "use-ref", component: UseRefDemo },
  { path: "use-ref-prev", component: PrevDemo },
  { path: "why-ref-timeout-print", component: TimeoutPrint },
  { path: "why-ref-timeout-print-use-ref", component: TimeoutPrintUseRef },
  { path: "use-ref-callback", component: MeasureExample },
  { path: "use-state-theme-btn", component: ThemedButton },
  { path: "use-state-custom-hook", component: CountAddHook },
  // blow is about layout
  { path: "layout-header-footer", component: LayoutHeaderFooter },
  { path: "layout-sider", component: LayoutSider },
  { path: "layout-resize", component: LayoutResize },
  { path: "default-props-good", component: DefaultPropsGood },
  { path: "responsive-good-context", component: Wrapper },
];

const Default: React.FC = () => <>default</>;

const Demos: React.FC = () => {
  const [, setRender] = useState({});
  const forceRender = useCallback(() => {
    setRender({});
  }, []);

  const handleClick = useCallback(
    (path) => {
      //pushState() 想浏览器添加一个状态, 可以 change path (not url) but no need to refresh page
      // param1: obj类型, 可以为 null (当用户定向到一个新的状态时，会触发popstate事件, 可以拿得到这里的 obj)
      // param2: string, 可以为 null (没啥用)
      // param3: string, new path
      //
      // 类似的 replaceState() 直接替换, 不产生历史
      //
      window.history.pushState(null, "", `/#/${path}`);
      forceRender();
    },
    [forceRender]
  );

  const getCurHash = useCallback(() => {
    const locationHash = document.location.hash;
    console.log(`locationhash = ${locationHash}`);
    const curHash = locationHash.replace("#/", "");
    console.log(`cur hash = ${curHash}`);
    return curHash;
  }, []);

  const findCur = useCallback(() => {
    const curRou = routes.filter((rou) => rou.path === getCurHash())[0];
    if (curRou) {
      return <curRou.component />;
    }
    return <Default />;
  }, []);

  return (
    <>
      <ul className={ss.menuList}>
        {routes.map((rou) => (
          <li
            className={`${ss.menuItem} ${
              getCurHash() === rou.path ? ss.itemActive : ""
            }`}
            key={rou.path}
          >
            <span
              onClick={() => {
                handleClick(rou.path);
              }}
              className={ss.link}
            >
              {rou.path}
            </span>
          </li>
        ))}
      </ul>
      <div className={ss.component}>{findCur()}</div>
    </>
  );
};

export default Demos;
