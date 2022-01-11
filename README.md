## 2022-01-11 오늘의 CSS 공부
* Part2 실전 퍼블리싱 제작
  * 라디오 버튼과 체크박스를 커스텀 체크박스로 스타일링 하는법 (폰트 어썸 사용) 

### 라디오 버튼.html
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="css/2.CustomBox2.css">
</head>
<body>
  <form>
    <input type="checkbox" id="chk1">
    <label for="chk1">HTML</label>
    <input type="checkbox" id="chk2">
    <label for="chk2">CSS</label>
    <input type="checkbox" id="chk3">
    <label for="chk3">jQuery</label>
    <input type="checkbox" id="chk4">
    <label for="chk4">가나다라</label>
  </form>
</body>
</html>
```

```html
    <input type="checkbox" id="chk1">
    <label for="chk1">HTML</label>
```
주요 부분은 위와 같이 input의 id와 label 의 for 가 "chk1"로 동일하다는 점이다. 해당 체크박스의 디자인을 바꾸기 위해 CSS로 input 은 보이지 않게 설정하기 위함이다.
<hr/>

### 라디오버튼.css
```CSS
@import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

body{
  display:flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

form input[type=checkbox] {
  display:none;
}
form label {
  display:block;
}
form label:before {
  content:'\f00c';
  font-family: fontawesome;
  border: 1px solid black;
  width: 14px;
  height: 14px;
  border-radius: 3px;
  margin-right: 5px;
  font-size: 13px;
  vertical-align: middle;
  display:inline-block;
  text-align: center;
  line-height: 14px;
  color:transparent;
  cursor:pointer;
  transition:0.2s;
}
form input[type=checkbox]:checked + label:before{
  color:white;
  background-color: red;
  border-color:transparent;
}
form input[type=checkbox]:checked + label:active:before{
  transform:scale(0);
}
```
 
```css
form input[type=checkbox] {
  display:none;
}
```
앞서 언급한대로, form 태그 아래 input[type=checkbox] 체크박스에 display:none;을 속성값으로 입력했다. 이는 checkbox의 디자인을 커스텀 해주기 위해서다.
<hr/>

```css
@import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
```

```css
form label:before {
  content:'\f00c';
  font-family: fontawesome;
  border: 1px solid black;
  width: 14px;
  height: 14px;
  border-radius: 3px;
  margin-right: 5px;
  font-size: 13px;
  vertical-align: middle;
  display:inline-block;
  text-align: center;
  line-height: 14px;
  color:transparent;
  cursor:pointer;
  transition:0.2s;
}
```
fontawesome 을 활용하여 checkbox를 커스텀하기 때문에 @import url()로 fontawesome을 연동하고, content:'\f00c' , font-family를 작성하여 해당 체크박스 디자인 코드와 폰트 지정을 통해
코드를 작성했다.
fontawesome 코드들
https://fontawesome.com/v4.7/icon/instagram

form label:before 의 :before 가상클래스를 이용하여 width, height 크기 값을 지정해주고, display:inline-block으로 before로 생겨난 체크박스 모양이 label과 가로배치가 될 수 있도록 설정했다.
color:transparent는 초기 세팅에 투명색을 설정하여, 클릭했을 때 색이 변할 수 있도록 지정해준 것이다.
<hr/>

```css
form input[type=checkbox]:checked + label:before{
  color:white;
  background-color: red;
  border-color:transparent;
}
form input[type=checkbox]:checked + label:active:before{
  transform:scale(0);
}
```

위의 코드는, input[type=checkbox]가 checked 되었을때 label:before 의 속성값을 설정하는 것이며, input의 경우 display:none;을 입력하였지만, 가시적인 부분이 없어지는거지 기능은 한다.
color 와 background-color 값을 부여해서 체크박스의 디자인 색이 정해지게 되며
눌렸을 때 :active 가상클래스를 활용하여 transform 속성값을 부여하고 작아졌다 커지는 속성값도 부여해주었다.
:active 가상클래스는 마우스가 눌렸을 때, 그니깐 누르는 중을 의미한다.
<hr/>
### 완성된 화면

![image](https://user-images.githubusercontent.com/89332480/148916480-d61c11dc-13ae-432d-94a9-d57cff32fa8a.png)

<hr/>


