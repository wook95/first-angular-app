# 간단한 Reddit

<img width="400" src="https://user-images.githubusercontent.com/80494742/162765466-b751a063-688d-43fe-a073-984b1a9926e9.gif" />

## 배포

https://ng-first-app-w.netlify.app/

## 기능

1. 폼 입력후 전송시 하단에 렌더링
2. 투표 버튼을 통해 점수 부여
3. 점수에 따른 정렬  

<br>

## 학습

**> html 템플릿 사용법**

1. *ngFor
2. 클래스에서 선언한 멤버변수의 사용: {{변수명}}
3. 부모 자식간 데이터 전송: [ 클래스에서 적용한 변수] = “넘기고 싶은것”
4. 이벤트 바인딩: (이벤트명)="함수()"
5. DOM요소 가져오기: #변수명
   - 양방향으로 데이터 바인딩이 된다. 

<br>

**> 컴포넌트 사용법**

1. @component에서 어떤 태그로 마크업에 쓸건지, 어떤 html쓸건지, 어떤 css쓸건지 정해준다.
2. @HostBinding을 통해 해당 컴포넌트 태그에 조작을 가할 수 있다.

<br>

**> data structure와 component의 분리**

컴포넌트명.model.ts를 생성해 데이터를 따로 분리해주어 MVC패턴을 완성해준다.

