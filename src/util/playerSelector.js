import _ from 'lodash';
export const playerSelector = (players,filterValue)=>{
    console.log("fileterValue :",players,filterValue);
       return _.filter(players,player=>{
           const lowerCaseFilterValue = _.toLower(filterValue);
          
        if(!lowerCaseFilterValue){
            return player;
        }else{

            console.log((_.includes(_.toLower(player.PFName),lowerCaseFilterValue)) 
            || (_.includes(_.toLower(player.TName),lowerCaseFilterValue)));
              
            return ((_.includes(_.toLower(player.PFName),lowerCaseFilterValue)) 
            || (_.includes(_.toLower(player.TName),lowerCaseFilterValue)))
        }
       });
        
    }