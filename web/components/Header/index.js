import { useRouter } from "next/router";
import styled from "@emotion/styled";

const Header = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <Link onClick={() => router.push("/")}>Home</Link>
      <Link onClick={() => router.push("/")}>Test</Link>
      <Link onClick={() => router.push("/")}>Ok</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: auto;
  width: 750px;
  display: flex;
  max-width: 100%;
  margin-bottom: 50px;
  justify-content: center;
  background-color: #fff;
  border-radius: 0px 0px 5px 5px;
`;

const Link = styled.div`
  margin: 25px auto;
  cursor: pointer;
`;

export default Header;
