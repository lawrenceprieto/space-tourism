import "../styles/destination.css";
import europa from "../assets/destination/image-europa.png";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import titan from "../assets/destination/image-titan.png";
import { useState } from "react";

function DestinationPage() {
    
    const destinations = [
        {
            title: "Moon",
            imageSrc: moon,
            description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing site",
            distance: "384,400 km",
            travelTime: "3 days"
        },
        {
            title: "Mars",
            imageSrc: mars,
            description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest",
            distance: "225 mil. km",
            travelTime: "9 months",
        },
        {
            title: "Europa",
            imageSrc: europa,
            description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin",
            distance: "628 mil. km",
            travelTime: "3 years",
        },
        {
            title: "Titan",
            imageSrc: titan,
            description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn",
            distance: "1.6 bil. km",
            travelTime: "7 years",
        },
    ];

    const [state, setState] = useState({
        title: "Moon",
        imageSrc: moon,
        description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing site",
        distance: "384,400 km",
        travelTime: "3 days",
    });

    function handleClick(destination) {
        setState(destination);
    }

    return(
        <>
            <div className="body-dp">
                <div className="container-fluid">
                    <div className="headline"><span className="text-secondary">01</span> pick your destination</div>
                    <div className="dest-cont">
                        <div className="img-cont">
                            <img src={state.imageSrc} className="imgsrc" alt="europa" />
                        </div>
                        <div className="dest-desc">
                            <div className="d-flex navs">
                                {
                                    destinations.map((destination,index) => (
                                        <div className="" onClick={() => handleClick(destination)} key={index}>
                                            {destination.title}
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="title">{state.title}</div>
                            <p className="description">{state.description}</p>
                            <div className="distance-time border-top">
                                <div>
                                    <h3>avg. distance</h3>
                                    <h2>{state.distance}</h2>
                                </div>
                                <div>
                                    <h3>est. travel time</h3>
                                    <h2>{state.travelTime}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DestinationPage;