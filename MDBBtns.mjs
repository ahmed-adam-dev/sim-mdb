export class MDBBtns {
  name;
  color;
  static button(name, color) {
    let body = document.querySelector("body");
    let btn = document.createElement("button");
    btn.textContent = name;
    btn.style.backgroundColor = color;
    btn.style.padding = "10px";
    btn.style.color = "white";
    btn.style.margin = "5px";
    btn.style.borderRadius = "8px";
    btn.style.boxShadow = "1px 1px blck";
    btn.style.border = "1px solid gray";
    body.appendChild(btn);
  }
}
