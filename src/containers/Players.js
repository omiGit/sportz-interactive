import React, { Component } from 'react';
import InputBox from '../components/InputBox'
import PlayersList from '../components/PlayersList';

 export default class players extends React.Component {
    state = {
        text:''
    }

    onChange = event=>{
        this.setState({text:event.target.value});
    }

   render (){
    
 
        return (
            <div>
                <InputBox onChange={this.onChange}/>
                <PlayersList  filterValue={this.state.text}/>
            </div>
        )
       }
    
}


