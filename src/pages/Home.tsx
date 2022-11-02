// import ThreeJS from "../components/Three";
import styled from "styled-components";

//배경 감싸는 컨테이너
const Div = styled.div`
  width: -moz-available;
  height: 100vh;
  overflow: hidden;
`;
//배경(이후 다른 이미지를 삽입하거나, Three로 대체하거나... 무얼 넣을지 상의해봅시다)
const MainBg = styled.img`
  width: -moz-available;
  position: fixed;
  z-index: -1;
`;
const Contents = styled.div`
  position: absolute;
  margin: 12vh 12vw;
}
`;
const Home = () => {
  return (
    <>
      {/* <ThreeJS /> 
        너무 무거워서 일시적으로 주석처리 해 둡니다*/}
      <Contents>
        <h1>Home입니다</h1>
      </Contents>
      <Div>
        <MainBg alt="mainBg" src="img/mainBg.jpg" />
      </Div>
    </>
  );
};

export default Home;
