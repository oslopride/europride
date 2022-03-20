import S from "@sanity/desk-tool/structure-builder";
import EditIcon from "part:@sanity/base/edit-icon";
import { MdPageview } from "react-icons/md";

import JSONpreview from "./previews/json-preview";

export default S.listItem()
  .title("Article Overview")
  .icon(MdPageview)
  .child(
    S.document()
      .title("Article Overview")
      .id("articleOverview")
      .schemaType("articleOverview")
      .documentId("articleOverview")
      .views([
        S.view.form().icon(EditIcon),
        S.view.component(JSONpreview).title("JSON"),
      ])
  );
