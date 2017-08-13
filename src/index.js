import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import counter from './reducers';
import Counter from './components/Counter';
const store = createStore(counter);
const render = () => { 
    ReactDOM.render(
    <Counter value = {store.getState()}
    onInc={()=>
        store.dispatch({
            type:'INC'
        })
    }
    onDec={()=> 
    store.dispatch({
        type:'DEC'
        })
        }
    />,
document.querySelector('.container')
);
};

store.subscribe(render);
render();