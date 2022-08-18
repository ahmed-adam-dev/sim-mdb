import { MDBBtns } from "./MDBBtns.mjs";
export function MDBBtn() {
  let btn_primary = document.querySelectorAll("btn-primary");
  let btn_success = document.querySelectorAll("btn-success");
  let btn_danger = document.querySelectorAll("btn-danger");
  let btn_warning = document.querySelectorAll("btn-warning");
  btn_primary.forEach((_) => {
    MDBBtns.button("primary", "rgba(27, 24, 248, 0.815)");
  });
  btn_success.forEach((_) => {
    MDBBtns.button("success", "rgba(56, 243, 23, 0.918)");
  });
  btn_danger.forEach((_) => {
    MDBBtns.button("danger", "rgba(243, 23, 23, 0.918)");
  });
  btn_warning.forEach((_) => {
    MDBBtns.button("warning", "rgba(243, 243, 23, 0.918)");
  });
}
MDBBtn();
