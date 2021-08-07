import Counter from "../Components/Counter";
import CounterRedux from "../Components/Counter-redux";
import CounterReducer from "../Components/Counter-reducer";
import Main from "../Components"


export default () =>
    [{
        path: '/',
        exact: true,
        component: <Main/>
    },
    {
        path: '/counter-react-hooks',
        component: <Counter/>
    },
    {
        path: '/counter-redux',
        component: <CounterRedux/>
    },
    {
        path: '/counter-reducer',
        component: <CounterReducer/>
    }
]