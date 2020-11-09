import React, { useEffect, useState } from 'react';
import CardLists from './components/contents/cardLists';
import Detail from './components/detail/detail';
import Header from './components/header/header';


function App({ youtube }) {
      const [videos, setVideos] = useState([]);
      const [selectedVideo, onVideo] = useState(null);

      const selectVideo = (video) => {
        onVideo(video)
      }
      const search = query => {
        youtube
      .search(query)
       .then(videos => setVideos(videos));

       onVideo();
       };

      


       useEffect(() => {
        youtube
        .mostPopular()
        .then(videos => setVideos(videos))
      }, []);

    

      return (
        <>
       <Header onSearch={search}/>
       <section className="pages">
         {selectedVideo &&
         <div className="detail_video">
         <Detail detail={selectedVideo}/> 
       </div>
        } 
       <div className="card_list_app">
        <CardLists cardlist={videos} onVideoClick={selectVideo}/>
        </div>
        </section>
      </>

      );
    }

export default App;