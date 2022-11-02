import Container from "../components/Container";
import imgdata from "../assets/imgdata.json";
import { images } from "../assets/img/news/images";
import styled from "styled-components";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
const Ul = styled.ul`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  // flex-wrap: wrap;
  // justify-content: center;
`;
//썸네일 크기 수정할 때 이것의 width와 margin값도 같이 수정해 주자
const Div = styled.div`
  overflow: hidden;
  margin: 10px 5px 20px 5px;
  height: 25vh;
`;
//썸네일 크기는 임시로 정한 것. 자동으로 화면 비율을 따라가도록 수정해야 함
const Img = styled.img`
  height: 15em;
`;
//이미지 바로 위에 올라가는 그라디언트
const Gradient = styled.div`
  background-image: linear-gradient(rgba(255, 0, 0, 0), rgba(255, 255, 255, 1));
  height: inherit;
  position: relative;
  bottom: 30vh;
`;
//제목
const Title = styled.h3`
  font-family: LeferiPointSpecial;
  font-size: 1.5em;
  font-weight: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  bottom: 2.3em;
  left: 1.2em;
  z-index: 1;
`;
//설명
const P = styled.p`
  font-family: LeferiPointWhite;
  font-size: 0.8em;
  font-weight: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  bottom: 8.3em;
  left: 2.3em;
  z-index: 1;
`;
//썸네일+제목+설명 1개씩. map함수를 이용하여 여러 개 생성함
//최신 기사부터 보려면 이 index의 역순으로 표시해야 하는데.. 어떻게 뒤집는지모르겠다 방법을 알아보겠다
const Article = imgdata.map((item, index) => {
  const imgName = `${item.img.split(".")[0]}`;
  return (
    <li key={index}>
      <Div>
        {/* 원하시는 대로 만들어 드렸습니다 */}
        <Img alt="" src={images[imgName]} />
        <Title>{item.title}</Title>
        <P>{item.description}</P>
        <Gradient />
      </Div>
    </li>
  );
});
//Article을 공통 컨테이너와 ul로 감쌌다
const News = () => {
  return (
    <Container>
      <Ul>{Article}</Ul>
      <Ul>{Article}</Ul>
      <Ul>{Article}</Ul>
    </Container>
  );
};
export default News;
