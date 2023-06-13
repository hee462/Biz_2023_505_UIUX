/*
JS의 함수 호이스팅
고전적인 방법으로 JS의 함수를 선언하면 실행되는 순간 함수의 위치를 재 배치한다



*/
func1();
//고전적인 JS함수 선언
function func1() {
  console.log("나는func1 함수");
}
/*
ES5+ 이후의 JS함수는 호이스팅이 일어나지 않는다 다라서 함수를 호출하기 전에
반드시 선언이 먼저 되어야 한다
*/
func2();
//ES5+ JS함수 선언
const func2 = function () {
  console.log("나는 func2 함수");
};
// ES5+ 이후의  Arrow(화살표) 함수
const func3 = () => {
  console.log("나는 func3 함수");
};
