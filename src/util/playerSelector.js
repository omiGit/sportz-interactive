import _ from 'lodash';
export const playerSelector = (players,filterValue)=>{
       return _.filter(players,player=>{
        const lowerCaseFilterValue = _.toLower(_.trim(filterValue));
        const {PFName, TName} = player;
        if(!lowerCaseFilterValue){
            return player;
        }else{
            return ((_.includes(_.toLower(_.trim(PFName)),lowerCaseFilterValue)) 
            || (_.includes(_.toLower(_.trim(TName)),lowerCaseFilterValue)))
        }
       });
        
    }