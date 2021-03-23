import React from 'react';
import moment from 'moment';



export default ({player})=>{
    var req = require.context("../../public/images", false, /.*\.jpg$/);
    // r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
	// return images
    const images = {}
    const im = req.keys().forEach((item, index) => { images[item.replace('./', '')] = req(item).default; });
    console.log(images);
    console.log(player.Id)
    return <div className="player-info">
        <img src={images[`${player.Id}.jpg`]} title={player.TName} />
        <div className="player-info-disc">
        <div className="player-info--name"><b>{player.PFName}</b></div>
        <div className="player-info-section"><span className="player-info--label">Team:</span> <span className="player-info--value">{player.TName}</span></div>
        <div  className="player-info-section"><span className="player-info--label">Value:</span> <span className="player-info--value">${player.Value}</span></div>
        <div  className="player-info-section"><span className="player-info--label">Upcoming Match: </span> 
        <span className="player-info--value">{player.UpComingMatchesList[0].VsCCode} vs {player.UpComingMatchesList[0].CCode} </span></div>
        <div  className="player-info-section"><span className="player-info--label">Next Match: </span>  <span className="player-info--value"> {moment(player.UpComingMatchesList[0].MDate).local().format("DD-MM-YYYY	h:mm:ss	a")}</span></div>
        </div>
    </div>   

}