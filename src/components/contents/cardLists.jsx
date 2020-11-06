import React, { Component } from 'react';
import Card from './card';

class CardLists extends Component {
  
    render() {
        return (
         <>
        <ul className="card_lists">
           {this.props.cardlist.map(card => (
             <Card key={card.id}
             card={card.snippet} />)
           )}
        </ul>
        </>
        );
    }
}

export default CardLists;

