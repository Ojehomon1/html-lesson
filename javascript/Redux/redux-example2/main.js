//Here we import redux and take the method createStore
const redux = require('redux');
const createStorage = redux.createStore;

//The first value for our store
const firstStore = {
    name: 'Farhan',
    address: 'Berlin',
    job: 'developer'
}

//Reducer for redux
const reducer = (state = firstStore, action) => {
    if(action.type === 'CHANGE_NAME'){
        return({
            ...state,
            name: action.value
        })
    }
    if(action.type === 'CHANGE_ADDRESS'){
        return({
            ...state,
            address: action.value
        })
    }
    return state
}
   
//Create store with the redux function createStore
const store = createStorage(reducer)
console.log(store.getState())


store.subscribe(() => {

    console.log('Store has been updated',store.getState())

})


// Dispatch Actions
store.dispatch({
    type: 'CHANGE_NAME',
    value: 'Mansour'
})
//console.log(store.getState())

store.dispatch({
    type: 'CHANGE_ADDRESS',
    value: 'Hamburg'
})
//console.log(store.getState())

