import { Container } from "react-bootstrap";
import Card from "./Components/card";
import icon1 from './images/Icon (2).svg'
import icon2 from './images/Icon (3).svg'
import icon3 from './images/Icon (4).svg'
import icon4 from './images/Icon (5).svg'
import icon5 from './images/Icon (6).svg'
import icon6 from './images/Icon (7).svg'

export default function Project(){
    return(
    <Container>
        <div className="m-5 text-center">
            <div className="d-flex justify-content-center py-5 ">
        <h1 className=" fs-3rem text-center">The Service We Provide For you</h1>
        </div>
            <div className="row justify-content-center">
                <Card  img={icon1} title={"Development"} text={"Create a platform with the best and coolest quality from us."}/>
                <Card img={icon2} title={"UI/UX Designer"} text={"We provide UI/UX Design services, and of course with the best quality"}/>
                <Card img={icon3} title={"Graphik Designer"} text={"We provide Graphic Design services, with the best designers"}/>
            </div>
            <div className="row my-md-5 justify-content-center">
                <Card  img={icon4} title={"Motion Graphik"} text={"Create a platform with the best and coolest quality from us."}/>
                <Card img={icon5} title={"Photography"} text={"We provide Photography services, and of course with the best quality"}/>
                <Card img={icon6} title={"Videography"} text={"Create a platform with the best and coolest quality from us."}/>
            </div>

        </div>
    </Container>
    )
}