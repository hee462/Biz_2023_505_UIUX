document.addEventListener("DOMContentLoaded", () => {
  // image_view box의 img tag를 한번에 select
  //image_view box를 한번 select 하고
  //image_view box가 포함하는 img tag를 한번 select하기
  const image_view_box = document.querySelector("div.image_view");
  const image_view = image_view_box?.querySelector("img");
  // ticker 이미지를 클릭하면 view box에 보여주기
  const tickeOnClickHandler = (event) => {
    // event는 div.image_ticker box에서 발생하지만
    // event.target 은 가장 안쪽의 img가 된다
    const target = event.target;
    //click 된 src 속성값을 image_view box에 복사하여 보여주기
    image_view.src = target.src;
  };
  const tickerBox = document.querySelector("div.image_ticker");
  tickerBox?.addEventListener("click", tickeOnClickHandler);
  //event 버블링을 이용하지 않을 경우
  /* slide image들을 모두 select 하여 배열로 만들기 */
  const tickerImages = document.querySelectorAll("div.image_box img");
  for (let index = 0; index < tickerImages.length; index++) {
    tickerImages[index].addEventListener("click", () => {
      //todo ticger image view보이기
    });
  }
});
