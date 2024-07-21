import React from 'react'
import CommonComponent from "./commonsection/common";
import { Youtube } from './experience/data/experience_data';

const Extras = () => {
    console.log(Youtube)
  return (
    <CommonComponent>

        <div className="container mt-4">
            <div    
            data-aos="fade-out"
            data-aos-duration="2000"
            data-aos-delay="800">
                Besides my studies i also play guitar and produce music sometimes.
                I am guitarist and songwriter for a band called Circle Of Fifths Nepal, we also won virtual battle of the bands S1.
                Thank you for being here! 

            </div>
            <h3 className="d-flex justify-content-center mt-4" data-aos="fade-out"
            data-aos-duration="2000"
            data-aos-delay="800"><b>Youtube</b></h3>
            
            <div className="row mt-4">

            {Youtube.map((link,index)=>(
                <div className="col-lg-6 col-12 d-flex justify-content-center p-1">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe 
                            src={link}
                            title={`YouTube video player ${index+1}`} 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            ))}
                </div>
            <div>

                <h3 className="d-flex justify-content-center mt-4" data-aos="fade-up"
                data-aos-duration="1000"
                ><b>
                    Listen to Circle Of Fifths on Spotify</b>
                </h3>
                <div className="row w-full">
                <div className="col-lg-12 d-flex justify-content-center"
                        data-aos="fade-out"
                        data-aos-duration="1000"
                        data-aos-delay="600">
                <iframe
                    src="https://open.spotify.com/embed/album/1u1UtrIWW7Rt6DEMScdh2l?utm_source=generator"
                    width="900"
                    height="580"
                    frameBorder="0"
                    allowtransparency="true"
                    title="Spotify Player"
                     allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
                ></iframe>
                </div>
            </div>

            </div>
        </div>
    </CommonComponent>
  )
}

export default Extras;