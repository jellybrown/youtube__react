import React from 'react';

const Detail = ({ detail }) => {
    return (
        
        <section class="detail_page">
        <iframe title="s" 
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${detail.id}`}
        frameborder="0"></iframe>
        <div className="video_desc">
          <p className="title">{detail.snippet.title}</p>
           <p className="author">{detail.snippet.channelTitle}</p>
          <p className="contents">{detail.snippet.description}</p>
        </div>
        </section>
        
    )
};

export default Detail;