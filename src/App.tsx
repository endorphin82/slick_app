import React, {useEffect, useRef, useState} from 'react';
import Slider from 'react-slick';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import './App.css';

function App() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  // const slider1 = useRef();
  // const slider2 = useRef();

  // useEffect(() => {
  //   setNav1(slider1);
  //   setNav2(slider2);
  // }, [slider1, slider2]);

  const settings1 = {
    pauseOnHover: true,
    pauseOnDotsHover: true,
    dots: false,
    className: "top-slider",
    arrows: false,
    infinite: true,
    speed: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    asNavFor: nav2
    // asNavFor: ".bottom-slider"
  };
  const settings2 = {
    // pauseOnHover:true,
    // pauseOnDotsHover:true,
    slidesToShow: 1,
    className: "bottom-slider",
    arrows: false,
    swipeToSlide: true,
    focusOnSelect: true,
    dots: true,
    infinite: true,
    speed: 0,
    slidesToScroll: 1,
    asNavFor: nav1,
    useCSS: true,
    // rtl:true,
    // fade: true,
    // easing: "sliding-vertically"

  };

  const onMouseEnterHandler = (e: any) => {
    console.log(e?.currTarget?.data)
    const currTarget = e.currentTarget
    // const index = currTarget.data('slick-index')
    // const slickObj = document.getElementsByClassName("top-slider")
    // .slick('getSlick')
    // slickObj.slickGoTo(index);

  }
  return (
    <>
      <h2>Slider Syncing (AsNavFor)</h2>
      <h4>First Slider</h4>
      <Slider
        {...settings1}
        // @ts-ignore
        ref={slider => setNav1(slider)}

      >
        <div onMouseEnter={(e) => onMouseEnterHandler(e)}>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>

      </Slider>
      <h4>Second Slider</h4>
      <Slider
        {...settings2}
        // @ts-ignore
        ref={slider => setNav2(slider)}
      >
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </Slider>
    </>
  );
}

export default App;
