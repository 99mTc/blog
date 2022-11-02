import Container from "../components/Container";
import imgdata from "../assets/imgdata.json";
import styled from "styled-components";
const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
//썸네일 크기 수정할 때 이것의 width와 margin값도 같이 수정해 주자
const Div = styled.div`
  width: 200px;
  overflow: hidden;
  margin: 30px 5px;
`;
//썸네일 크기는 임시로 정한 것. 자동으로 화면 비율을 따라가도록 수정해야 함
const Img = styled.img`
  width: 180px;
  height: 110px;
`;
//제목
const Title = styled.h3`
  font-family: LeferiPointSpecial;
  font-size: 1em;
  font-weight: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
//설명
const P = styled.p`
  font-family: LeferiPointWhite;
  font-size: 0.8em;
  font-weight: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
//썸네일+제목+설명 1개씩. map함수를 이용하여 여러 개 생성함
//최신 기사부터 보려면 이 index의 역순으로 표시해야 하는데.. 어떻게 뒤집는지모르겠다 방법을 알아보겠다
const Article = imgdata.map((item, index) => {
  return (
    <li>
      <Div key={index}>
        <Img alt="" src={`..\\img\\news\\${item.img}`} />
        <Title>{item.title}</Title>
        <P>{item.description}</P>
      </Div>
    </li>
  );
});
//Article을 공통 컨테이너와 ul로 감쌌다
const News = () => {
  return (
    <Container>
      <Ul>{Article}</Ul>
    </Container>
  );
};
export default News;
