import React from "react";
import { Container, Row, Column, FooterLink, Heading } from "./FooterStyles";

const Footer = () => {
  return (
    <div className="footer">
      <h3 style={{ color: "green", textAlign: "center" }}></h3>
      <Container>
        <Row>
          <Column>
            <Heading>About</Heading>
            <FooterLink href="#">contact us</FooterLink>
            <FooterLink href="#">About us</FooterLink>
            <FooterLink href="#">our stories</FooterLink>
          </Column>
          <Column>
            <Heading>Help</Heading>
            <FooterLink href="#">Payment</FooterLink>
            <FooterLink href="#">Shipping</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
          </Column>
          <Column>
            <Heading>Policy</Heading>
            <FooterLink href="#">Return Policy</FooterLink>
            <FooterLink href="#">Terms Of Use</FooterLink>
            <FooterLink href="#">Security</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>

            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
