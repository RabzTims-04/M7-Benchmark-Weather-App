import { Carousel } from 'react-bootstrap'
import CarousalCard from './CarousalCard'
import "./TopCarousal.css"

const TopCarousal = () => {

    return (
        <Carousel id="top-carousal" wrap={false} variant="dark" indicators={false} >           
            <Carousel.Item className="infinite-row">
              <CarousalCard  />
            </Carousel.Item>
        </Carousel>
    )
}

export default TopCarousal
