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
  &:hover {
    color: darkcyan;
  }
`;
// const Colored = styled.span`
//   color: darkcyan;
// `;
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
          {/* 홈 화면으로 돌아가기 */}
          <Li>
            <Link to="/">Home</Link>
          </Li>
          {/* 소개 페이지 */}
          <Li>
            <Link to="/about">About</Link>
          </Li>
          {/* IT관련 포스팅 페이지 */}
          <Li>
            <Link to="/news">News</Link>
          </Li>
          {/* Github 외부링크 연결 */}
          <Li>
            <Link to="/works">Works</Link>
          </Li>
          {/* 포트폴리오 페이지 */}
          <Li>
            <Link to="/guest">Guest</Link>
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
