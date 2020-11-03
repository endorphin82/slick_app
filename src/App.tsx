import React, {useState} from 'react';
import Slider from 'react-slick';

import './App.css';

function App() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

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
    asNavFor: nav2,
  };

  const settings2 = {
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
  };

  const onMouseEnterHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

    const divParent = e.currentTarget.parentElement
    // @ts-ignore
    const sliderIndex = divParent.parentElement.getAttribute("data-index")
    // @ts-ignore
    nav1.slickGoTo(Number(sliderIndex), true)

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
        <div onMouseEnter={(e) => onMouseEnterHandler(e)}>
          <h3>2</h3>
        </div>
        <div onMouseEnter={(e) => onMouseEnterHandler(e)}>
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
          <h3>To reach maximum potential sales and growth, you must invest in professionals!</h3>
        </div>
        <div>
          <h3> </h3>
        </div>
        <div>
          <h3>5+ years experience! 50+ E-commerce stores! A+ Class software developers</h3>
        </div>
      </Slider>
    </>
  );
}

export default App;
