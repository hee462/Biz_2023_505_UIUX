let num1 = 100;
let num2 = 200;
// js의 interpolation 에서는 변수 뿐만아니라 직접 연산식을 사용할수있다
console.log(`${num1}+${num2} = ${num1 + num2}`);

num1 = "우리나라";
num2 = "대한민국";
console.log(`${num1}+${num2} = ${num1 + num2}`);
// 함수 선언
function func1() {
  let num3 = 100;
  let num4 = 200;
  console.log(num3 + num4);
}
//함수 호출
func1();

let num5 = 100;
let num6 = 200;
function func2() {
  console.log(num5 + num6);
}
func2();

function func3() {
  var num7 = 100;
  var num8 = 200;
}
func3();
