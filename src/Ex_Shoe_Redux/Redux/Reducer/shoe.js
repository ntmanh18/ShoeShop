import { shoeArr } from "../../data";

let initialState = {
    shoeArr : shoeArr,
    detail : shoeArr[0],
    cart : [],
};

export let shoeReducer = (state=initialState,action) => {

    switch(action.type){
        default:
            return state;
        case 'VIEW_DETAIL':{
           state.detail = action.payload;
           return {...state};
        }

    }
}