import S from "@sanity/desk-tool/structure-builder";
import EditIcon from "part:@sanity/base/edit-icon";
import { MdInfo } from "react-icons/md";

import JSONpreview from "./previews/json-preview";

export default S.listItem()
  .title("About")
  .icon(MdInfo)
  .child(
    S.document()
      .title("About")
      .id("about")
      .schemaType("about")
      .documentId("about")
      .views([
        S.view.form().icon(EditIcon),
        S.view.component(JSONpreview).title("JSON"),
      ])
  );
