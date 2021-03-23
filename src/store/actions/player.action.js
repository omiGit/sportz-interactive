import { call, put } from "@redux-saga/core/effects";
import { SET_LOADER, STORE_PLAYER } from "./action_types/player.actionTypes";
import axios from 'axios';
const setLoader = data=>({type: SET_LOADER, payload:data})
const storeUsers = data=>({type: STORE_PLAYER, payload:data})


export function *fetchPlayers(){
    yield put(setLoader(true));
    const response = yield call(()=>axios.get("https://api.jsonbin.io/b/604f1c137ea6546cf3ddf46e"));
    yield put(storeUsers(response.data.playerList));
    yield put(setLoader(false));
}
