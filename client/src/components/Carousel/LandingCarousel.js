import React from "react";

// reactstrap components
import {
    Card,
    Container,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselIndicators,
    CarouselCaption
} from "reactstrap";

// core components

const items = [
    {
        src: require("../../assets/img/slide1.jpg"),
        altText: "Somewhere",
        caption: "Somewhere"
    },
    {
        src: require("../../assets/img/slide1.jpg"),
        altText: "Somewhere else",
        caption: "Somewhere else"
    },
    {
        src: require("../../assets/img/slide1.jpg"),
        altText: "Here it is",
        caption: "Here it is"
    }
];

function LandingCarousel() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    const onExiting = () => {
        setAnimating(true);
    };
    const onExited = () => {
        setAnimating(false);
    };
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    const goToIndex = newIndex => {
        if (animating) return;
        setActiveIndex(newIndex);
    };
    return (
        <>
            <div className="section mt-5" id="carousel">
                <Container fluid className="m-0 p-0">
                    <Row className="m-0 p-0">
                        <Col className="m-0 p-0" md="12">
                            <Card className="page-carousel">
                                <Carousel
                                    activeIndex={activeIndex}
                                    next={next}
                                    previous={previous}
                                >
                                    <CarouselIndicators
                                        items={items}
                                        activeIndex={activeIndex}
                                        onClickHandler={goToIndex}
                                    />
                                    {items.map(item => {
                                        return (
                                            <CarouselItem
                                                onExiting={onExiting}
                                                onExited={onExited}
                                                key={item.src}
                                            >
                                                <div style={{}}>
                                                    <img src={item.src} alt={item.altText} style={{width: "100%"}}/>
                                                </div>

                                                <CarouselCaption
                                                    captionText={item.caption}
                                                    captionHeader=""
                                                />
                                            </CarouselItem>
                                        );
                                    })}
                                    <a
                                        className="left carousel-control carousel-control-prev"
                                        data-slide="prev"
                                        href="#pablo"
                                        onClick={e => {
                                            e.preventDefault();
                                            previous();
                                        }}
                                        role="button"
                                    >
                                        <span className="fa fa-angle-left" />
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a
                                        className="right carousel-control carousel-control-next"
                                        data-slide="next"
                                        href="#pablo"
                                        onClick={e => {
                                            e.preventDefault();
                                            next();
                                        }}
                                        role="button"
                                    >
                                        <span className="fa fa-angle-right" />
                                        <span className="sr-only">Next</span>
                                    </a>
                                </Carousel>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>{" "}
        </>
    );
}

export default LandingCarousel;
