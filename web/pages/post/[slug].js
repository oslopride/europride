import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import projectId from "../../lib/projectId";
import BlockContent from "@sanity/block-content-to-react";

const Post = ({ title, body, image }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const builder = imageUrlBuilder({
      projectId,
      dataset: "production",
    });
    setImageUrl(builder.image(image));
  }, [image]);

  return (
    <Content>
      {title}
      {imageUrl && <Image src={imageUrl} />}
      <Body>
        <BlockContent blocks={body} />
      </Body>
    </Content>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  if (!pageSlug) {
    return {
      notFound: true,
    };
  }
  const query = encodeURIComponent(
    `*[ _type =="post" && slug.current == "${pageSlug}"]`
  );
  const url = `https://${projectId}.api.sanity.io/v1/data/query/production?query=${query}`;

  const data = await fetch(url).then((res) => res.json());
  const post = data.result[0];

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        title: post.title,
        body: post.body,
        image: post.mainImage,
      },
    };
  }
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  padding: 0 80px;
`;

const Body = styled.div`
  padding: 0 80px;
`;

export default Post;
