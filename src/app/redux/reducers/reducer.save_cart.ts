import {createReducer,on} from "@ngrx/store"
import { savetoCart } from "../actions/action.add-cart"
import { delete_Cart } from "../actions/action.delete-cart"
var intitialState:string[] = []
export  var saveCartReducer = createReducer(intitialState,on(
savetoCart,(state,action)=>{
return [...state,action.items]
}
),
on(
delete_Cart,(state,action)=>{
console.log("attemtping deletion")
var indexAction = state.indexOf(action.item)
console.log(indexAction)
return [
...state.slice(0, indexAction), 
...state.slice(indexAction + 1), 
];
}
)
)