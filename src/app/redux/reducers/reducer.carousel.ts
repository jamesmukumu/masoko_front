import { createReducer,on } from "@ngrx/store";
import { hideCarousel } from "../actions/action.carousel";

var initialState:boolean = false

export var HideReducer = createReducer(initialState,on(
hideCarousel,(state)=>{
state = true
return state
}
))

