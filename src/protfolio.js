import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";

import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Protfolio() {
  const [image, setimage] = useState(28);
  function toleft() {
    if (image > 28) {
      setimage(image - 1);
    }
  }
  function toright() {
    if (image < 30) {
      setimage(image + 1);
    }
  }
  let [width,setwidth]=useState(window.innerWidth)
  useEffect(()=>{

    function windowwidth (){
      window.addEventListener("resize",()=>{
        setwidth(window.innerWidth)
      })
    }
    windowwidth()
  })  
    return (
    <Container className="py-5">
      <div>
        <h1>Our Awesome Portofolio</h1>
      </div>
      <div
        className="d-flex py-4 justify-content-center gap-5 div-sm"
        style={{ height: "280px", overflow: "hidden" }}
      >
        <div data-aos="fade-right" data-aos-duration="2000" className="text-center ">
          <img
            src={require(`./images/image ${image}.png`)}
            className="img-fluid "
            alt=""
            style={{
              height: width< 768 ? '100%' : 'autu'
            }}
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="mt-30 d-md-block d-sm-none"
        >
          <img
            src={require("./images/image 29.png")}
            className="img-fluid"
            alt=""
          />
        </div>
        <div data-aos="fade-left" data-aos-duration="2000" className="mt-80 d-md-block d-sm-none ">
          <img
            src={require("./images/image 30.png")}
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
      <div className="d-md-none d-sm-flex justify-content-center gap-3">
        <FaChevronLeft
          onClick={toleft}
          className="bg-dark-subtle p-2 rounded-circle pointer hover"
          style={{ width: "40px", height: "40px" }}
        />
        <FaChevronRight
          onClick={toright}
          className="bg-dark-subtle p-2 rounded-circle pointer hover "
          style={{ width: "40px", height: "40px" }}
        />
      </div>
    </Container>
  );
}
