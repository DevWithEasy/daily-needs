import Slider from "react-slick";
import { productData } from "../../assets/productdata";

const CategorySlide = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {productData.map((data) => {
          <div key={data.id} className="border">
            {/* <img src={data.image} /> */}
            <h2>{data.name}</h2>
          </div>;
        })}
      </Slider>
    </div>
  );
};

export default CategorySlide;
