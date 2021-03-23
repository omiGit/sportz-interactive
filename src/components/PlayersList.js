import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { FETCH_PLAYERS } from '../store/actions/action_types/player.actionTypes';
import { playerSelector } from '../util/playerSelector';
import InfoPanel from './InfoPanel';
class playerList extends React.Component {
 render(){
     const {players} = this.props;
     let playerList = null;
    if(players.loader){
        playerList = <h2>Loading...</h2>
     }
     else{
         playerList =  _.map(players.data,(player,index)=><InfoPanel key={index} player={player}/>);
     }
    return (
        <div className="player-list">
            {
           playerList
            }
        </div>
    )
 }   
 componentDidMount(){
    console.log(this.props)
    this.props.dispatch({type:FETCH_PLAYERS});
}
}

const mapStateToProps = (state,ownProps)=>{
    return {
        players: {
            data: playerSelector(state.players.data,ownProps.filterValue)
        }
    }
}

export default connect(mapStateToProps)(playerList);