import Carousel from 'react-bootstrap/Carousel';
import nabisco1 from './images/nabisco1.png'
import nabisco2 from './images/nabisco2.png'
import nabisco3 from './images/nabisco3.png'
import nabisco4 from './images/nabisco4.png'
import nabisco5 from './images/nabisco5.png'
import nabisco6 from './images/nabisco6.png'

function NabiscoCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="cat-size"
          src={nabisco1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="cat-size"
          src={nabisco2}
          alt="second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="cat-size"
          src={nabisco3}
          alt="third slide"
        />
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={nabisco4}
          alt="First slide"
        />
      </Carousel.Item> */}
      <Carousel.Item>
        <img
          className="cat-size"
          src={nabisco5}
          alt="fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="cat-size"
          src={nabisco6}
          alt="fifth slide"
        />
      </Carousel.Item>
      

    </Carousel>
  );
}

export default NabiscoCarousel;