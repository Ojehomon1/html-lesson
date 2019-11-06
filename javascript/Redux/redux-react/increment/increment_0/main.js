//Redux has the following aspects:
// - store
// - actions
// - reducer

//reducer
function counter (state = 0, action){
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        // 'ODD_INCREMENT', state +2
        case 'ODD_INCREMENT':
            return state +2;
        default:
            return state;
    }
}



// store ( subscribe, dispatch(used to call reducer), getState )
let store = Redux.createStore(counter); // expose store with registered counter)

// subscribe
function printState() {
    console.log(store.getState());
}
store.subscribe(printState);

// actions
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});

store.dispatch({type: 'ODD_INCREMENT'})
store.dispatch({type: 'ODD_INCREMENT'})
