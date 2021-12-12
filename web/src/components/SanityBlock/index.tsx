import BlockContentToReact from "@sanity/block-content-to-react";
import { PROJECT_ID, DATASET } from "../../sanity";

const SanityBlock = ({ blocks }: any) => {
  return (
    <BlockContentToReact
      blocks={blocks}
      projectId={PROJECT_ID}
      dataset={DATASET}
      imageOptions={{ w: 1000, fit: "max" }}
    />
  );
};

export default SanityBlock;
