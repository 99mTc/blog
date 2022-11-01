import styled from "styled-components";

const Div = styled.div`
  height: 18vh;
  border-top: 1px solid #ccc;
  background-color: #eee;
  display: flex;
  padding: 0 20vw;
  justify-content: center;
`;

const Footer = () => {
  return (
    <Div>
      <h3>footer입니다</h3>
    </Div>
  );
};

export default Footer;
