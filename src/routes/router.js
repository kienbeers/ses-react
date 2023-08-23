import Home from "../page/example/Home";
import PropsExample from "../page/example/PropsExample";
import StateExample from "../page/example/StateExample";
import PropsAndState from "../page/example/Props&State";
import EventHandling from "../page/example/EventHandling";
import ComponentExample from "../page/example/component";
import LifeCycleEx from "../page/example/LifeCycle";
import ReactRefsEx from "../page/example/ReactRefs";
import ListExample from "../page/example/ListExampe";
import KeyExample from "../page/example/KeyExample";
import FormExample from "../page/example/Form";
import ReactRouterExample from "../page/example/ReactRouter";
import ReduxExample from "../page/example/ReduxExample";
import TransitionExample from "../page/example/Transition";
import S3MDataLoadFrame1 from "../components/S3MDataLoadFrame1";
import S3MDataLoadFrame2 from "../components/S3MDataLoadFrame2";
import ErorrApp from "../page/404Erorr";
import ListTabFrame1 from "../page/load/ListTabFrame1";
import ListTableFrame1 from "../page/load/ListTableFrame1";

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/props",
    component: PropsExample,
  },
  {
    path: "/state",
    component: StateExample,
  },
  {
    path: "/propsvsstate",
    component: PropsAndState,
  },
  {
    path: "/event",
    component: EventHandling,
  },
  {
    path: "/component",
    component: ComponentExample,
  },
  {
    path: "/lifecycle",
    component: LifeCycleEx,
  },
  {
    path: "/reactrefs",
    component: ReactRefsEx,
  },
  {
    path: "/list",
    component: ListExample,
  },
  {
    path: "/key",
    component: KeyExample,
  },
  {
    path: "/form",
    component: FormExample,
  },
  {
    path: "/reactrouter",
    component: ReactRouterExample,
  },
  {
    path: "/redux",
    component: ReduxExample,
  },
  {
    path: "/transition",
    component: TransitionExample,
  },
  {
    path: "/load/frame1",
    component: S3MDataLoadFrame1,
  },
  {
    path: "/load/frame2",
    component: S3MDataLoadFrame2,
  },
  {
    path: "/load/list",
    component: ListTableFrame1,
  },
  {
    path: "/load/tab",
    component: ListTabFrame1,
  },
  {
    path: "/error",
    component: ErorrApp,
  },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
