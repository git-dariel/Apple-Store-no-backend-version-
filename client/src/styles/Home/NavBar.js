import styled from "styled-components";

const Container = styled.div`
  border-bottom: 1px solid gray;
`;

const Wrapper = styled.div`
  padding: 20px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 665px) {
    padding: 20px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 20px;
  height: 20px;
  margin: auto;
  cursor: pointer;

  @media (max-width: 665px) {
    margin: auto;
  }
`;

const style = {
  Container,
  Wrapper,
  Left,
  Logo,
};

export default style;
