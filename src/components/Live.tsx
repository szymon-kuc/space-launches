import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import {I_Launches, I_Launch } from '../interfaces';
import { useSelector } from 'react-redux';
import { LaunchEvent } from './LaunchEvent';

export const Live: React.FC = () => {

      const [src, setSrc] = useState("");

      const launches = useSelector((state: I_Launches) => state.launches);
      let videoId: string | undefined = launches.map((el: I_Launch) => (el.vidURLs[0]))[0];

    const name = launches.map((el: I_Launch) => (el.name))[0];
    const location = launches.map((el: I_Launch) => (el.location.name))[0];
    const date = launches.map((el: I_Launch) => (el.windowstart))[0];

      useEffect(() => {
            if(videoId != undefined){
                  videoId = videoId.split("=").pop();
                  setSrc("https://www.youtube.com/embed/"+videoId+"?autoplay=1");
            }
      })

	return (
            <section>
                  <Typography variant="h4" gutterBottom className="section-heading">
                        LIVE NOW
                  </Typography>
                  <div>
                        <iframe id="ytplayer" src={src} frameBorder="0" allowFullScreen />
                  </div>
                  <LaunchEvent index={0} maxIndex={1} name={name} date={date} location={location}/>
            </section>
	);
}