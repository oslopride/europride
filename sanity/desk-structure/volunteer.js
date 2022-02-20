import S from "@sanity/desk-tool/structure-builder";
import { MdPerson } from "react-icons/md";

export default S.listItem()
  .title("Volunteer")
  .icon(MdPerson)
  .schemaType("volunteer")
  .child(S.documentTypeList("volunteer").title("Volunteer"));
