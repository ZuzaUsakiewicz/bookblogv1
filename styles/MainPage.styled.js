import styled from "styled-components";
import Image from "next/image";

export const MainPagePostsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 11vh;
`;
export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MainPageImageContainer = styled.div`
  cursor: pointer;
  position: relative;
  width: 90vw;
  max-width: 400px;
  height: 30vh;
  border-radius: 20px;
  @media screen and (min-width: 400px) {
    width: 40vw;
  }
`;

export const MainPagePostImage = styled(Image)`
  border-radius: 30px;
`;
