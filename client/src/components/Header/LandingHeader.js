import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components
import LandingCarousel from "../Carousel/LandingCarousel";

function LandingHeader() {
    let pageHeader = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth < 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                    "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    });


        const pageHeaderStyle ={
            backgroundColor: "#b2afab",
            backgroundPosition: "50%",
            backgroundSize: "cover",
            minHeight: "80vh",
            maxHeight: "999px",
            overflow: "hidden",
            position: "relative",
            width: "100%",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(" + require("../../assets/img/theme/profile-cover.jpg") + ")"
    }
    return (
        <>
            <LandingCarousel/>
            {/*<div*/}
            {/*    style={pageHeaderStyle}*/}
            {/*    data-parallax={true}*/}
            {/*    ref={pageHeader}*/}
            {/*>*/}
            {/*    <div className="filter" />*/}
            {/*    <Container>*/}
            {/*        <div className="motto text-center">*/}
            {/*            <h1>Example page</h1>*/}
            {/*            <h3>Start designing your landing page here.</h3>*/}
            {/*            <br />*/}
            {/*            <Button*/}
            {/*                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"*/}
            {/*                className="btn-round mr-1"*/}
            {/*                color="neutral"*/}
            {/*                target="_blank"*/}
            {/*                outline*/}
            {/*            >*/}
            {/*                <i className="fa fa-play" />*/}
            {/*                Watch video*/}
            {/*            </Button>*/}
            {/*            <Button className="btn-round" color="neutral" type="button" outline>*/}
            {/*                Download*/}
            {/*            </Button>*/}
            {/*        </div>*/}
            {/*    </Container>*/}
            {/*</div>*/}
        </>
    );

}

export default LandingHeader;
