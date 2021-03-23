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
     else if(players.data.length) {
          playerList =  _.map(players.data,(player,index)=><InfoPanel key={index} player={player}/>);
     }else{
        playerList = <h2>Sorry, Data Not Found</h2>
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
    this.props.dispatch({type:FETCH_PLAYERS});
}
}

const mapStateToProps = (state,ownProps)=>{
    return {
        players: {
            data: playerSelector(state.players.data,ownProps.filterValue),
            loader: state.players.loader
        }
    }
}

export default connect(mapStateToProps)(playerList);