import React from "react";
import Page from "@oslopride/web/src/components/page";
import { PageProvider } from "@oslopride/web/src/hooks/page-context";
import PreviewWrapper from "./preview-wrapper";

export default function PagePreview({ document }) {
  const { displayed } = document;
  const value = displayed.blocks.eng;
  const context = {
    locale: "eng",
    baseUrl: "/",
    configuration: { navigationBar: [] },
    gatsbyEnvironment: false,
  };

  return (
    <PreviewWrapper>
      <PageProvider context={context}>
        <Page value={value} />
      </PageProvider>
    </PreviewWrapper>
  );
}
