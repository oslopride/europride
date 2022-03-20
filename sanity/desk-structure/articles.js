import S from "@sanity/desk-tool/structure-builder";
import EditIcon from "part:@sanity/base/edit-icon";
import { MdOutlineArticle } from "react-icons/md";

import JSONpreview from "./previews/json-preview";

export default S.listItem()
  .title("Articles")
  .icon(MdOutlineArticle)
  .schemaType("article")
  .child(
    S.documentTypeList("article")
      .title("Articles")
      .child((documentId) =>
        S.document()
          .documentId(documentId)
          .schemaType("article")
          .views([
            S.view.form().icon(EditIcon),
            S.view.component(JSONpreview).title("JSON"),
          ])
      )
  );
