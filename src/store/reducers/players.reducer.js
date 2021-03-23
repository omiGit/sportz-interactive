import { SET_LOADER, STORE_PLAYER} from "../actions/action_types/player.actionTypes";

export default (state={data:[],loader:false},action)=>{
    switch(action.type){
        case STORE_PLAYER: return  {...state,data:[...action.payload]}
        case SET_LOADER : return {...state, loader:action.payload}
        break;
        default: 
        return state;
    }
}