import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import {I_Launches } from '../interfaces';
import { useSelector } from 'react-redux';

export const Live: React.FC = () => {

      const [src, setSrc] = useState("");

      const launches = useSelector((state: I_Launches) => state.launches);
      let videoId: string | undefined = launches.map((el: any) => (el.vidURLs[0]))[0];

      useEffect(() => {
            if(videoId != undefined){
                  videoId = videoId.split("=").pop();
                  setSrc("https://www.youtube.com/embed/"+videoId+"?autoplay=1");
            }
      })

	return (
            <section>
                  <Typography variant="h4" gutterBottom className="live-heading">
                        LIVE NOW
                  </Typography>
                  <div>
                        <iframe id="ytplayer" src={src} frameBorder="0" allowFullScreen />
                  </div>
            </section>
	);
}