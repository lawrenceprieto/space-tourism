import bgdesktop from "../assets/home/background-home-desktop.jpg";
import bgtablet from "../assets/home/background-home-tablet.jpg";
import bgmobile from "../assets/home/background-home-mobile.jpg";

function Homepage() {
    return(
        <>
            <div className="">
                <img className="desk" src={bgdesktop} alt="bg-desktop" />
                <img className="tab" src={bgtablet} alt="bg-tablet" />
                <img className="mob" src={bgmobile} alt="bg-mobile" />
            </div>
        </>
    );
}

export default Homepage;