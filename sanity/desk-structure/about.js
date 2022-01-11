import S from "@sanity/desk-tool/structure-builder";
import EditIcon from "part:@sanity/base/edit-icon";
import { MdBusiness } from "react-icons/md";

import JSONpreview from "./previews/json-preview";

export default S.listItem()
  .title("About")
  .icon(MdBusiness)
  .child(
    S.document()
      .title("About")
      .id("about")
      .schemaType("About")
      .documentId("About")
      .views([
        S.view.form().icon(EditIcon),
        S.view.component(JSONpreview).title("JSON"),
      ])
  );
