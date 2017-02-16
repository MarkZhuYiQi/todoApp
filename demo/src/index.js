import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'
import {Increment,Decrement} from './actions';

// create store with a reducer
// reducer 控制
const store = createStore(counter)
const rootEl = document.getElementById('root')
const render = () => ReactDOM.render (
    // UI is just a counter
    <Counter
        value={store.getState()}
        // dispatch action
        OnIncrement={() => store.dispatch(Increment())}
        OnDecrement={() => store.dispatch(Decrement())}
    />,
    rootEl // change the root element
)
// refresh view
render()
// refresh when state changes
store.subscribe(render)



