import React from 'react';

const Card = ({ card, card: { snippet }, onVideoClick }) => (
        <li className="card" onClick={() => onVideoClick(card)}>
            <a href="#a" >
                <img src={snippet.thumbnails.default.url} alt="" className="thum_img"/>
                <div className="card_contents">
                  <span className="title">{snippet.title}</span>
                    <p className="author">{snippet.channelTitle}</p>
                </div>
            </a>
        </li>
     );


export default Card;