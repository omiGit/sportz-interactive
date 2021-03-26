import React from 'react';
import moment from 'moment';
import _ from 'lodash';

export default ({player})=>{
    const {PFName, TName, Value, UpComingMatchesList, profilePicture} = player;
    const {VsCCode, CCode, MDate} = UpComingMatchesList[0];
    const nextMatchDate = moment(MDate).local().format("DD-MM-YYYY	h:mm:ss	a");
    return <div className="player-info">
        <img src={profilePicture} title={TName} />
        <div className="player-info-disc">
        <div className="player-info--name"><b>{PFName}</b></div>
        <div className="player-info-section"><span className="player-info--label">
            Team:</span> <span className="player-info--value">{TName}</span>
            </div>
        <div  className="player-info-section"><span className="player-info--label">Value:</span> <span className="player-info--value">${Value}</span></div>
        <div  className="player-info-section"><span className="player-info--label">Upcoming Match: </span> 
        <span className="player-info--value">{VsCCode} vs {CCode} </span></div>
        <div  className="player-info-section"><span className="player-info--label">Next Match: </span>  <span className="player-info--value"> {nextMatchDate}</span></div>
        </div>
    </div>   

}