import Link from "next/link";
import {
  MainPageContainer,
  PostContainer,
  MainPageImageContainer,
  MainPagePostImage,
} from "../styles/MainPage.styled";

export default function Post({ post }) {
  return (
    <MainPageContainer>
      <PostContainer>
        <Link href={`blog/${post.slug}`} passHref>
          <MainPageImageContainer>
            <MainPagePostImage
              src={post.frontmatter.cover_image}
              alt={post.frontmatter.title}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </MainPageImageContainer>
        </Link>
        <div>
          <h4>Przeczytane:{post.frontmatter.date}</h4>
        </div>
      </PostContainer>
    </MainPageContainer>
  );
}
// Logo przy każdym poście
