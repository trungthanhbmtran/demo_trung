import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const Carosel = () => {
    const Responsive = {
        // superLargeDesktop: {
        //     // the naming can be any, depends on you.
        //     breakpoint: { max: 4000, min: 200 },
        //     items: 1
        // },
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 1
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 1
        }
    }
    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={Responsive}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            <img
                src="static/Banner/2be808012f5cf702ae4d.jpg"
                style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: '100%'
                }}
            />
            <img
                src="static/Banner/1c535ab67deba5b5fcfa.jpg"
                style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: '100%'
                }}
            />
        </Carousel>
    )
}

export default Carosel