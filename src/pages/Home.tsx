// import ThreeJS from "../components/Three";
import styled from "styled-components";

//배경 감싸는 컨테이너
const Div = styled.div`
  overflow: hidden;
`;
//배경(이후 다른 이미지를 삽입하거나, Three로 대체하거나... 무얼 넣을지 상의해봅시다)
const MainBg = styled.img`
  width: -moz-available;
  position: fixed;
  z-index: -1;
`;
const Contents = styled.div`
  margin-top: 12vh;
}
`;
const LeftVisual = styled.div`
  width: 50%;
  height: 87vh;
  border: 3px #000 solid;
  margin: -3px;
  background-color: white;
  float: left;
  padding-bottom: 5px;
`;
const RightVisual = styled.div`
  width: 50%;
  height: 43.5vh;
  border: 3px #000 solid;
  margin: -3px;
  background-color: white;
  display: inline-block;
  padding-bottom: 1px;
`;
const Home = () => {
  return (
    <>
      {/* <ThreeJS /> 
        너무 무거워서 일시적으로 주석처리 해 둡니다*/}
      <Div>
        {/* <MainBg alt="mainBg" src={require("../assets/img/home/mainBg.jpg")} /> */}
        <Contents>
          <LeftVisual>
            <h1>Home입니다</h1>
          </LeftVisual>
          <RightVisual />
          <RightVisual />
        </Contents>
      </Div>
    </>
  );
};

export default Home;
