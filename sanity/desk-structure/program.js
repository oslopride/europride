import S from "@sanity/desk-tool/structure-builder";
import EditIcon from "part:@sanity/base/edit-icon";
import { MdEventNote } from "react-icons/md";

import JSONpreview from "./previews/json-preview";

export default S.listItem()
  .title("Program")
  .icon(MdEventNote)
  .child(
    S.document()
      .title("Program")
      .id("program")
      .schemaType("program")
      .documentId("program")
      .views([
        S.view.form().icon(EditIcon),
        S.view.component(JSONpreview).title("JSON"),
      ])
  );
