import styled from "styled-components";

const Div = styled.div`
  height: 30vh;
  background-color: #101010;
  display: flex;
  padding: 3vh 10vw;
  color: #aaa;
  font-family: LeferiPointWhite;
  font-size: 0.6em;
`;

const Footer = () => {
  return (
    <Div>
      <p>Copyright&nbsp;&copy;&nbsp;2022&nbsp;Technetium&nbsp;&&nbsp;Lycoris</p>
    </Div>
  );
};

export default Footer;
