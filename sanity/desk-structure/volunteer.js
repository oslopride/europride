import S from "@sanity/desk-tool/structure-builder";
import { MdBusinessCenter } from "react-icons/md";

export default S.listItem()
  .title("Volunteer")
  .icon(MdBusinessCenter)
  .schemaType("volunteer")
  .child(S.documentTypeList("volunteer").title("Volunteer"));
