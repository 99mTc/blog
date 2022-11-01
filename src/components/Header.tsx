import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  height: 13vh;
  border-bottom: 1px solid #ccc;
  display: flex;
  padding: 0 20vw;
  justify-content: center;
`;
const Ul = styled.ul`
  display: flex;
  font-size: 1.6em;
  align-items: center;
  text-align: center;
`;
const Li = styled.li`
  width: 2.5em;
  margin: 0 0.65em;
`;
const AdminLi = styled(Li)`
  font-size: 0.8em;
`;
const Header = () => {
  return (
    <Div>
      <Ul>
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
        <AdminLi>
          <Link to="/admin">⚙️</Link> {/* 관리자 인증 페이지 */}
        </AdminLi>
      </Ul>
    </Div>
  );
};

export default Header;
