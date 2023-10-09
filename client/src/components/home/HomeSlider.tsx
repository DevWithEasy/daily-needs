import Slider from "react-slick";
import img1 from "../../assets/image/header_image_01.webp";
import img2 from "../../assets/image/header_image_02.webp";

const HomeSlider = () => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="p-2 overflow-hidden">
      <Slider {...settings}>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
