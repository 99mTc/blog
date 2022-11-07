import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 30vh;
  width: -moz-available;
  background-color: #101010;
  padding: 3vh 10vw;
  color: #aaa;
  font-family: LeferiPointWhite;
  font-size: 0.6em;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Copyright&nbsp;&copy;&nbsp;2022&nbsp;Technetium&nbsp;&&nbsp;Lycoris</p>
    </FooterContainer>
  );
};

export default Footer;
