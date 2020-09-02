const falseReducer = (state = {key: 'value'}, action) =>{
    switch(action.type){
        case 'TEST_STATE':
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default falseReducer