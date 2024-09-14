import { Container } from "react-bootstrap";

export default function ContactUs() {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-duration="1500"
      className="color"
    >
      <Container>
        <div style={{ height: "336px" }} className="row align-items-center">
          <h1 className="col-md-8 fw-bolder">
            Contact us for the service you want to use
          </h1>
          <div className="col-md-4 text-md-end">
            <button className="bg-primary border-0 text-white  py-2 px-4 rounded-1">
              Contact us
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
