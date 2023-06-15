const images = [
  "./images/image1.jpg",
  "./images/image2.jpg",
  "./images/image3.jpg",
  "./images/image4.jpg",
  "./images/image1.jpg",
];

document.addEventListener("DOMContentLoaded", () => {
  /*
    badges와 image_slides 두개의 객체 배열을 선언하고
    각각 span.badge 와 img.image_slides tag들을 모두 select 하여 저장햇다
    
    badges 와 image_slides 는 배열이 된다.
    HTML의 JS에서 tag들을 querySelectAll()을 사용하여 
    모두 select한 결과는 배열이면서 배열이 아니다
    JS는 이러한 배열을 유사배열이라고 한다.
    배열의 성질을 가지면서, 배열과 다른 독특한 성질을 함께 가지고 있다


    */
  const badges = document.querySelectorAll("span.badge");
  const image_slides = document.querySelectorAll("img.image_slides");
  console.log(image_slides);
  /*
    object.entires(select 객체배열) 함수는
    배열의 요소와 index 값을 또는 배열로 생성한다
         [index,img]
         [index,img]
         [index,img]
    */
  //   for (let [index, img] of Object.entries(image_slides)) {
  //     img.src = images[index];
  //   }
  //   image_slides[0].src = images[0];
  //   image_slides[1].src = images[1];
  //   image_slides[2].src = images[2];
  //=> showImage 함수로 대체
  const showImage = () => {
    for (let img of image_slides) {
      img.style.display = "none";
    }
    image_slides[0].src = images[slideIndex];
    image_slides[0].style.display = "block";

    for (let badge of badges) {
      badge.classList.remove("select");
    }
    badges[slideIndex].classList.add("select");
  }; // showImage end

  //   const prev = () => {
  //     alert("이전");
  //   };
  //   const next = () => {
  //     alert("다음");
  //   };
  //   const currentImage = (pos) => {
  //     alert(`${pos} 번째 이미지`);
  //   };
  let slideIndex = 0;
  document
    .querySelector("div.controller_box")
    ?.addEventListener("click", (e) => {
      const target = e.target;
      const className = target.classList;

      if (className.contains("left")) {
        //alert("왼쪽버튼 클릭됨");
        //slideIndex--;
        if (--slideIndex < 0) slideIndex = images.length - 1;
      } else if (className.contains("right")) {
        // alert("오른쪽버튼 클릭됨");
        //slideIndex++;
        if (++slideIndex > images.length - 1) slideIndex = 0;
      } else if (className.contains("badge")) {
        // alert("뱃지 클리됨");
        //span tag data-id값 가져오기-> dataset.id로 사용해서 가져옴
        const id = Number(target.dataset.id);
        slideIndex = id - 1;
      } // if end
      // click event 가 작동될때 이미지 새로 갱신하기
      showImage();
    }); //controll box click end
  //처음 화면이 시작될때 이미지 보기
  showImage();
}); //DOM end