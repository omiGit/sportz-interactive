import React from 'react';
import moment from 'moment';
import _ from 'lodash';

export default ({player})=>{
    const {PFName, TName, Value, UpComingMatchesList} = player;
    const {VsCCode, CCode, MDate} = UpComingMatchesList[0];
    const nextMatchDate = moment(MDate).local().format("DD-MM-YYYY	h:mm:ss	a");
    //importing all images
    const imageModules = require.context("../../public/images", false, /.*\.jpg$/);
    const images = {}

    //setting image static path to key with image name in images object
    _.forEach(imageModules.keys(),module=>{
        images[_.parseInt(_.replace(module,'./',''))] = imageModules(module).default;
    })

    return <div className="player-info">
        <img src={images[player.Id]} title={TName} />
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