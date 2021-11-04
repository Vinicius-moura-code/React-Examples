import styled from "styled-components";

export const Title = styled.h1`
  color: #f00;
  font-size: ${(props) => `${props.fontSize}px`};
  background: #f8f8f8;

  span {
    font-size: 12px;
    color: #000;
  }
`;

export const TitleSmall = styled(Title)`
  color: #00f;
  font-size: 15px;
`;
