import styled from "styled-components";

const Box = styled.div`
  height: ${({ $isBlack }) => ($isBlack ? "100px" : "200px")};
  width: 100px;
  background-color: ${({ $isBlack }) => ($isBlack ? "black" : "green")};
  margin: 1rem;
  &:hover {
    background-color: hotpink;
  }
`;

export default function BoxWithStyledComponents({ isBlack }) {
    return <Box $isBlack={isBlack}></Box>;
}