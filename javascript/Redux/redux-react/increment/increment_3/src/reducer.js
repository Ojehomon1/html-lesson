const initialState = {
    x: 10,
    y: 13,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT_Y':
            return {
                //...state,
                y: state.y + 1,
                x : state.x
            }

        case 'INCREMENT_X':
                return {
                    //...state,
                    x: state.x + 1,
                    y:state.y
                }
    
        default:
            return state;
    }
}
