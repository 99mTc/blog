import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

//전체 Header
const Div = styled.div`
  height: 12vh;
  display: flex;
  padding: 0 20vw;
  justify-content: center;
  position: fixed;
  width: -moz-available;
`;
//로고 및 Nav링크들을 감싸는 ul
const Ul = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
`;
//로고
const Logo = styled.h3`
  font-family: "YUniverse-B";
  font-size: 3em;
`;
//각각의 Nav링크를 감싸는 li
const Li = styled.li`
  margin: 0 0.95em;
  font-size: 1.3em;
  font-family: "Montserrat", sans-serif;
`;
const Header = () => {
  /* 헤더에 마우스오버 시 로고가 Nav로 전환됨 
    전환 애니메이션이 있으면 좋겠습니다..
    직육면체 상자를 굴리는 듯한 느낌으로 */
  const [isHover, setIsHover] = useState(false);
  return (
    <Div
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover ? (
        <Ul>
          {/* 각각의 링크마다, 마우스오버를 하면 색 변화든 두께 변화든 메뉴를 강조하는 효과가 있었으면 좋겠는데
            어떻게 해야 할지 모르겠군요 ㅋㅋ useState를 일일이 쓸 수는 없고
            map함수를 쓰면 되려나? 고민해보겠습니다.. 좋은 아이디어가 있다면 도와주세욥 */}
          <Li>
            <Link to="/">Home</Link> {/* 메인화면으로 돌아가는 로고 */}
          </Li>
          <Li>
            <Link to="/about">About</Link> {/* 소개 페이지 */}
          </Li>
          <Li>
            <Link to="/news">News</Link> {/* IT관련 포스팅 페이지 */}
          </Li>
          <Li>
            <Link to="/">Github</Link> {/* Github 외부링크 연결 */}
          </Li>
          <Li>
            <Link to="/works">Works</Link> {/* 포트폴리오 페이지 */}
          </Li>
        </Ul>
      ) : (
        <Ul>
          <Logo>웊</Logo>
        </Ul>
      )}
    </Div>
  );
};

export default Header;
