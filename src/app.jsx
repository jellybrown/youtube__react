import React, { useEffect, useState } from 'react';
import CardLists from './components/contents/cardLists';
import Header from './components/header/header';


function App({ youtube }) {
      const [videos, setVideos] = useState([]);
     
      const search = query => {
        youtube
      .search(query)
       .then(videos => setVideos(videos))
       };

       useEffect(() => {
        youtube
        .mostPopular()
        .then(videos => setVideos(videos))
      }, []);
      return (
        <>
       <Header onSearch={search}/>
        <CardLists cardlist={videos}/>
      </>

      );
    }

export default App;