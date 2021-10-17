import styled from "styled-components";

export const BlogContainer = styled.div`
  padding-top: 14vh;
  h1 {
    text-align: center;
  }
`;
export const BlogPostsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  @media screen and (min-width: 500px) {
    padding: 0 5rem;
  }
`;
