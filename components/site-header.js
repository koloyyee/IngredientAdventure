import styled from "styled-components";


const Header = styled.div`
  margin: 2vw;
`;

const Title = styled.h1`
  font-weight: 200;
`;
const Subtitle = styled.h4`
  text-decoration: underline;
`;

const SiteHeader = () => {
  return (
    <Header>
      <Title> Ingredient Adventure</Title>
      <Subtitle>
        life is an adventure made up of many little ingredients.
      </Subtitle>
    </Header>
  );
};

export default SiteHeader;
