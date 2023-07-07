import EventHandling from "../page/EventHandling";
import FormExample from "../page/Form";
import Home from "../page/Home";
import KeyExample from "../page/KeyExample";
import LifeCycleEx from "../page/LifeCycle";
import ListAndKeyExample from "../page/ListAndKey";
import ListExample from "../page/ListExampe";
import PropsAndState from "../page/Props&State";
import PropsExample from "../page/PropsExample";
import ReactRefsEx from "../page/ReactRefs";
import ReactRouterExample from "../page/ReactRouter";
import ReduxExample from "../page/ReduxExample";
import StateExample from "../page/StateExample";
import TransitionExample from "../page/Transition";
import ComponentExample from "../page/component";


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
        path: "/error",
        component: PropsAndState,
    },

]

const privateRoutes = [];
export { publicRoutes, privateRoutes }