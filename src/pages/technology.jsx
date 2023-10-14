import "../styles/technology.css";
import launchVehicleLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import launchVehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceCapsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg";
import spaceCapsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg";
import spaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg";
import { useState } from "react";

function TechnologyPage() {

    const techs = [
        {
            techImgPortrait: spaceportPortrait,
            techImgLandscape: spaceportLandscape,
            techName: "spaceport",
            techAbout: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        },{
            techImgPortrait: launchVehiclePortrait,
            techImgLandscape: launchVehicleLandscape,
            techName: "launch vehicle",
            techAbout: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch",
        },{
            techImgPortrait: spaceCapsulePortrait,
            techImgLandscape: spaceCapsuleLandscape,
            techName: "space capsule",
            techAbout: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertaine",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const activeTech = techs[activeIndex];

    function handleTechDetails(index) {
        setActiveIndex(index);
    }

    return (
        <>
            <div className="body-tech">
                <div className="container-fluid pb-5">
                    <div className="tech-headline"><span className="text-secondary">03</span> space launch 101</div>
                    <div className="tech-img-cont">
                        <img src={activeTech.techImgLandscape} className="tech-image" alt="spaceport-landscape" />
                    </div>
                    <div className="tech-navs">
                        {
                            techs.map((tech,index) => (
                                <div className={index === activeIndex ? "tech-nav-active" : "tech-nav"} 
                                    onClick={() => handleTechDetails(index)} key={index}>{index + 1}
                                </div>
                            ))
                        }
                    </div>
                    <div className="tech-dets">
                        <div className="terminology">the terminology...</div>
                        <div className="tech-name">{activeTech.techName}</div>
                        <div className="tech-about">{activeTech.techAbout}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TechnologyPage;