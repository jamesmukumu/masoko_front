import {createReducer,on} from "@ngrx/store"
import { savetoCart } from "../actions/action.add-cart"

var intitialState:string[] = []
export  var saveCartReducer = createReducer(intitialState,on(
savetoCart,(state,action)=>{
return [...state,action.items]
}
))