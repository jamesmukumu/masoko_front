import {createAction,props} from "@ngrx/store"

export var savetoCart = createAction(
"save_cart",
props<{items:string}>()
)