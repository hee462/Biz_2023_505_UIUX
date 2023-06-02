# CSS 를 사용하여 interactive 화면 구현하기

- 실무에서 사용하는 CSS는 `CSS2` 와 `CSS3`가 사용된다
- 아직은 CSS가 많이 사용되고 있지만, CSS3의 새로운 기능들이 증가하면서
  CSS3 사용이 점점 증가하고 있다
- 아직 CSS2 를 주로 사용하는 이유는 브라우저에서 CSS3의 새로운 기능을 지원하지 않기 때문
- chorme, Edge,firefox,opera,safari 와 같은 범용적인 브라우저는 대부분 HTML5 기능과 CSS3의 기능을 지원한다. 하지만 매우 새로운 CSS3는 업데이트 되지 않는 Browser에서는 가끔 지원하지 않는다

# CSS 의 Selector

- CSS 속성을 부여하기 위한 대상
- `tag` ,`id`, `class` 가 있다

### tag : 아무런 기호 없이 tag 키워드를 바로 사용

```css
div {
  color: blue;
}
```

### id : # 기호와 함께 식별자(단어)를 사용

```css
/* id만 단독으로 사용하기*/
/* id는 페이지에서 UNIQUE 하기 때문에 단독으로 사용해도 문제를 일으키는 경우가 상대적으로적다*/
#save {
  color: red;
}
```

### class : Dot(.) 기호와 함께 사용

````css
/*
class 를  tag 없이 사용할때는 매우 신중하게 사용
페이지에 bbs라는 클래스가 어디에 있는지 잘 파악해야 한다
원하지 않는 곳에 속성이 설정될 수있다
*/
```css .bbs {
  background-color: red;
  color: white;
}
````

/_
tag selector와 class selector 사용하기 select되는 대상을 좀더 명확히 할때
_/
a.bbs{
color :red;
}