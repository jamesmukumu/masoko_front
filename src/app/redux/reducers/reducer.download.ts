import { createReducer,on } from "@ngrx/store";
import { hideDialog } from "../actions/action.hideAppdialog";
var initialState:boolean = false

export var appDownloader = createReducer(initialState,on(
hideDialog,(state)=>{
var newState = true
return newState
}
))