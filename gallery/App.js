import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./style.css"

const gallery = require("../DATA/gallery.json")

function App(){
    return(
        <div className="slide-container">
            <Slide easing="ease">
                {[...gallery].map(item =>{
                    return(
                        <div key = {item.src} className="each-slide">
                            <div>
                                <img src={item.src}/>
                                <span>{item.description}</span>
                            </div>
                      </div>
                    )
                })}
                
            </Slide>
            <div className="smallerScreenGallery">
                {[...gallery].map(item =>{
                        return(
                            <div key = {item.src} className="staticGallery">
                                    <img src={item.src} height="50%" width="50%"/>
                                    <span>{item.description}</span>
                        </div>
                        )
                    })}
            </div>
        </div>
    )
}
export default App 