

// const initialState = { name: "ibrahim" };
// export default (state = {}, action) => {

//     switch (action.type) {
//         case "CHANGE":
//             return {
//                 ...state,
//                 data: action.data
//             }
//         default:
//             return state;
//     }


// }

const initialState = { num: 0 }
const todoReducer = (state = initialState, action) => {
    const newState={...state}
    if(action.type==="INCREMENT")
    {
        newState.num++;
    }
    else
    if(action.type==="DECCREMENT")
    {
        newState.num--;
    }
      return  newState;
    
}

export default todoReducer;