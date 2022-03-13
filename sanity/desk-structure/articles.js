import S from "@sanity/desk-tool/structure-builder";
import EditIcon from "part:@sanity/base/edit-icon";
import { MdArchive } from "react-icons/md";

import JSONpreview from "./previews/json-preview";

export default S.listItem()
  .title("Articles")
  .icon(MdArchive)
  .child(
    S.document()
      .title("Articles")
      .id("articles")
      .schemaType("articles")
      .documentId("articles")
      .views([
        S.view.form().icon(EditIcon),
        S.view.component(JSONpreview).title("JSON"),
      ])
  );
