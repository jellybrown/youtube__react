import React, { Component } from 'react';

class Card extends Component {
    
      
    

    render() {
        
        return (
           <li className="card">
               <a href="#a">
                   <img src={this.props.card.thumbnails.default.url} alt="" className="thum_img"/>
                   <div className="card_contents">
                     <span className="title">{this.props.card.title}</span>
                       <p className="desc">{this.props.card.description}</p>
                   </div>
               </a>
           </li>
        );
    }
}

export default Card;