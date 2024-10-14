import {createAction,props} from "@ngrx/store"
export var delete_Cart  = createAction(
"delete_cart",
props<{item:string}>()
)