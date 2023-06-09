document.addEventListener("DOMContentLoaded", () => {
  /*dept_main 에서 입력하는 요소 중에서 
    거래처 코드, 거래처명, 대표전화, 담당자명 ,담당자연락처는
    반드시 입력해야하는 요소이다

    각 요소를 입력하지 않고 저장을 할 경우
    alert 경고를 띄우고, 값을 입력하도록 하는 유효성검사(front validation)을 실행하시오
    */
});
const d_code = document.querySelector("#d_code");
const d_name = document.querySelector("#d_name");
const d_Tel = document.querySelector("#d_Tel");
const d_manager = document.querySelector("#d_manager");
const d_managerTel = document.querySelector("#d_managerTel");
const btn_save = document.querySelector("btn_save");

const dCodeText = d_code.vaule;
const dNameText = d_name.vaule;
const dTelText = d_Tel.vaule;
const dManagerText = d_manager.vaule;
const dManagerTelText = d_managerTel.vaule;

const btn_saveOnClick = () => {
  if (!dCodeText) {
    alert("반드시 코드를 입력해야 합니다");
    d_code.focus();
    return false;
  }
  if (!dNameText) {
    alert("반드시 이름을 입력해야 합니다");
    d_name.focus();
    return false;
  }
  if (!dTelText) {
    alert("반드시 전화번호를 입력해야 합니다");
    d_Tel.focus();
    return false;
  }
  if (!dManagerText) {
    alert("반드시 담당자를 입력해야 합니다");
    d_manager.focus();
    return false;
  }
  if (!dManagerTelText) {
    alert("반드시 담당자연락처를 입력해야 합니다");
    d_managerTel.focus();
    return false;
  }
};
btn_save.addEventListener("click", btn_saveOnClick);
