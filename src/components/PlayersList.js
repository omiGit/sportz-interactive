import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { FETCH_PLAYERS } from '../store/actions/action_types/player.actionTypes';
import { playerSelector } from '../util/playerSelector';
import InfoPanel from './InfoPanel';
class playerList extends React.Component {

constructor(props){
    super(props);
    this.images=null;
}
 render(){
     const {players} = this.props;
     let playerList = null;
    if(players.loader){
       playerList = <h2>Loading...</h2>
     }
     else if(players.data.length) {
          playerList =  _.map(players.data,(player,index)=><InfoPanel key={index} player={{...player, profilePicture: this.images[player.Id]}}/>);
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
    //importing all images
    const imageModules = require.context("../../public/images", false, /.*\.jpg$/);
    const images = {}

    //setting image static path to key with image name in images object
    _.forEach(imageModules.keys(),module=>{
        images[_.parseInt(_.replace(module,'./',''))] = imageModules(module).default;
    });
    this.images = {...images}
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