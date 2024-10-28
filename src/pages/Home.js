import { Link } from "react-router-dom";
import styled from "styled-components";
import { datas } from "../data";
import { spacing } from "../GlobalStyled";

const Banner = styled.div`
  height: 600px;
  background: url(https://img2.yna.co.kr/etc/inner/KR/2023/02/09/AKR20230209172500005_01_i_P4.jpg)
    no-repeat center / cover;
`;

const Section = styled.div`
  padding: 100px ${spacing.mainPadding};
  display: flex;
  justify-content: space-between;
`;
const Con = styled.div`
  width: 19%;
  height: 400px;
  overflow: hidden;
  /* background-color: gray; */
`;

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <Section>
        {datas.map((data) => (
          <Con key={data.id}>
            <Link to={`/sub/${data.id}`}>
              <img src={data.imgUrl} alt={data.title} />
            </Link>
          </Con>
        ))}
      </Section>
    </div>
  );
};

export default Home;
