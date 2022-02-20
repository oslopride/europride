import S from "@sanity/desk-tool/structure-builder";
import EditIcon from "part:@sanity/base/edit-icon";
import {
  MdSettings,
  MdPublic,
  MdPlace,
  MdPinDrop,
  MdPhoneIphone,
} from "react-icons/md";

import JSONpreview from "./previews/json-preview";

export default S.listItem()
  .title("Configuration")
  .icon(MdSettings)
  .child(
    S.list()
      .title("Configuration")
      .items([
        S.listItem()
          .title("Website")
          .icon(MdPublic)
          .child(
            S.document()
              .title("Website")
              .id("webConfiguration")
              .schemaType("webConfiguration")
              .documentId("global_web_configuration")
              .views([
                S.view.form().icon(EditIcon),
                S.view.component(JSONpreview).title("JSON"),
              ])
          ),
      ])
  );
