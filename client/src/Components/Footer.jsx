import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Contributors:</h5>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">   </h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://github.com/amirabourogaa">Amira Bourogaa</a>
              </li>
              <li className="list-unstyled">
                <a href="https://github.com/Aymen-kaabi">Med Aymen Kaabi</a>
              </li>
              <li className="list-unstyled">
                <a href="https://github.com/OussamaHeni">Oussama Hani</a>
              </li>
              <li className="list-unstyled">
                <a href="https://github.com/oussamasoui">Oussama Soui</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/allinclusive-project/allinclusive"> All Inclusive GitHub page. </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
export default Footer;