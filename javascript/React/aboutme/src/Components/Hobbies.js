import React from 'react'
import footyImg1 from './Images/footyImg1.jpg'
import footyImg2 from './Images/footyImg2.jpg'
import footyImg3 from './Images/footyImg3.jpg'
import footyImg4 from './Images/footyImg4.jpg'
import musicFoto1 from './Images/musicFoto1.jpg'
import musicFoto2 from './Images/musicFoto2.jpg'
import musicFoto3 from './Images/musicFoto3.jpg'
import musicFoto4 from './Images/musicFoto4.jpg'





export default function Hobbies() {
    return (
        <div className="myHobbies">
            <h3>Hobby#1 Football:</h3>
            <div className="hobbyFotos">
                <img src={footyImg1} alt=""></img>
                <img src={footyImg2} alt=""></img>
                <img src={footyImg3} alt=""></img>
                <img src={footyImg4} alt=""></img>
            </div>
            <h3>Hobby#2 Music</h3>
            <div className="hobbyFotos">
                <img src={musicFoto1} alt=""></img>
                <img src={musicFoto2} alt=""></img>
                <img src={musicFoto3} alt=""></img>
                <img src={musicFoto4} alt=""></img>

            </div>

            
        </div>
        
    )
}
