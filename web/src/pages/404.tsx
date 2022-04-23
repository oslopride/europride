import Link from "next/link";
import { Wrapper, Anchor, Header } from "../components/common";

export default function ErrorNotFound() {
  return (
    <Wrapper>
      <Header>
        404 <br />
        Page Not Found
      </Header>
      <Link href="/">
        <Anchor>Go back home</Anchor>
      </Link>
    </Wrapper>
  );
}
