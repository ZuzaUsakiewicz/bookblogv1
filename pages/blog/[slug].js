import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import Logo from "../../components/Logo";

import {
  SinglePostContainer,
  CategoryButton,
  Date,
  Title,
  Excerpt,
  TagsContainer,
  TagSpan,
  SinglePostImageContainer,
  SinglePostImage,
  ContentContainer,
} from "../../styles/SinglePost.styled";

export default function SinglePostPage({
  frontmatter: { title, date, category, excerpt, cover_image, tags },
  slug,
  content,
}) {
  return (
    <SinglePostContainer>
      <CategoryButton>{category}</CategoryButton>
      <Title>{title}</Title>
      <Excerpt>{excerpt}</Excerpt>
      <Date>{date}</Date>
      <SinglePostImageContainer>
        <SinglePostImage
          src={cover_image}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt={title}
        />
      </SinglePostImageContainer>
      <ContentContainer
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      ></ContentContainer>
      <Logo /> <h6>Zuza</h6>
      <TagsContainer>
        {tags.map((tag, index) => (
          <TagSpan key={index}>
            <a href={`/${tag}`}>{tag + " "}</a>
          </TagSpan>
        ))}
      </TagsContainer>
    </SinglePostContainer>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return {
    paths: paths,
    fallback: false,
    //Make this 404 fallback
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
