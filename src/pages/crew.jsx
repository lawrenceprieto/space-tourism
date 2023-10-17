import "../styles/crew.css";
import ansari from "../assets/crew/image-anousheh-ansari.png";
import hurley from "../assets/crew/image-douglas-hurley.png";
import shuttleworth from "../assets/crew/image-mark-shuttleworth.png";
import glover from "../assets/crew/image-victor-glover.png";
import { useState } from "react";

function CrewPage() {
    
    const crews = [
        {
            name: "mark shuttleworth",
            role: "mission specialist",
            about: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
            image: shuttleworth,
        },{
            name: "victor glover",
            role: "pilot",
            about: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
            image: glover,
        },{
            name: "anousheh ansari",
            role: "flight engineer",
            about: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
            image: ansari,
        },{
            name: "douglas hurley",
            role: "commander",
            about: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
            image: hurley,
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const activeCrew = crews[activeIndex];

    function handleCrew(index) {
        setActiveIndex(index);
    }

    return (
        <>
            <div className="body-crew">
                <div className="container-fluid">
                    <div className="crew-headline"><span className="crew-headline-count">02</span> meet your crew</div>
                    <div className="crew-lo">
                        <div className="crew-image-cont border-bottom p-0">
                            <img src={activeCrew.image} className="crew-image" alt={activeCrew.name} />
                        </div>
                        <div className="crew-dest-lo">
                            <div className="crew-navs">
                                {
                                    crews.map((crew,index) => (
                                        <div className={index === activeIndex ? "active-crew" : "crew-nav"} onClick={() => handleCrew(index)} key={index}></div>
                                    ))
                                }
                            </div>
                            <div className="crew-details-lo">
                                <div className="crew-role">{activeCrew.role}</div>
                                <div className="crew-name">{activeCrew.name}</div>
                                <div className="crew-about">{activeCrew.about}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CrewPage;