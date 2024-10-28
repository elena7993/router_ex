import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.div`
  padding: 20px 20%;
  border-bottom: 1px solid #dbdbdb;
`;

const Header = () => {
  return (
    <SHeader>
      <h3>
        <Link to={"/"}>WEBTOON</Link>
      </h3>
    </SHeader>
  );
};

export default Header;
