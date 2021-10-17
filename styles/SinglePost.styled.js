import styled from "styled-components";
import Image from "next/image";

export const SinglePostContainer = styled.section`
  width: 100%;
  padding: 10vh 0.3rem 0 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
`;

export const CategoryButton = styled.button`
  padding: 0.3rem;
  text-transform: uppercase;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.linkColorPrimary};
`;
export const Date = styled.h6`
  padding: 0.5rem 0;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.linkColorSecondary};
`;
export const Title = styled.h2`
  font-size: 2rem;
  padding: 0.5rem 0;
`;

export const Excerpt = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: 0.4rem 1.3rem;
  max-width: 600px;
`;

export const TagsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem 0;
  width: 90%;
  @media screen and (min-width: 500px) {
    width: 30%;
  }
`;

export const TagSpan = styled.span`
  padding: 0 0.3rem;
  border-radius: 30px;
  background: ${({ theme }) => theme.tagsColors.horror};
  margin-bottom: 0.5rem;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.linkColorPrimary};
    padding: 0.4rem;
  }
`;
export const SinglePostImage = styled(Image)`
  /* filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2)); */
  border-radius: 10px;
`;
export const SinglePostImageContainer = styled.div`
  position: relative;
  width: 90vw;
  height: 50vh;
  border-radius: 10px;

  @media screen and (min-width: 400px) {
    width: 40vw;
  }
`;
export const ContentContainer = styled.div`
  padding: 1.4rem 0.8rem;
  max-width: 700px;
  font-size: ${({ theme }) => theme.fontSize.normal};
`;
