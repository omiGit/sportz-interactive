import { takeEvery } from "@redux-saga/core/effects"
import { FETCH_PLAYERS } from "./action_types/player.actionTypes"
import { fetchPlayers } from "./player.action";

export function *watcher(){
    yield takeEvery(FETCH_PLAYERS, fetchPlayers);
}