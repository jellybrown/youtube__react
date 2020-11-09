import React, { Component } from 'react';

import Card from './card';

class CardLists extends Component {
 
    render() {
      
        return (

        <ul className="card_lists">
           {this.props.cardlist.map(card => (
             <Card key={card.id}
             card={card} 
             onVideoClick={this.props.onVideoClick}
             />)
           )}
        </ul>
       
        );
    }
}

export default CardLists;

