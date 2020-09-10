## 04-1 함수 선언문

```typescript
function addNumber (a: number, b: number): number{
  return a + b
}
```

* return 타입이 붙는 위치: 매개변수 뒤
* void 역시 가능함

#### 함수 시그니처

* 변수의 타입과 같이 함수도 타입이 존재

```typescript
(매개변수1 타입, 매개변수2 타입) => 리턴 타입
```



#### type 키워드로 별칭 만들기

* Type 키워드는 기존에 있던 타입을 이름 바꿔서 사용 가능하게 한 키워드

```typescript
type funcType = (string, string) => void //함수 시그니처
let f: funcType = function(a: string, b: string): void()
let g: funcType = function(a: string, b: string): void()
```

#### undefined 와 관련된 주의사항

* Undefined는 상속에서 가장 아래에 있는 타입
* Undifined 타입이 들어올 수 있는 경우를 유의

#### 선택적 매개변수 

* 변수 명 뒤에 ? 가 붙음



## 04-2 함수 표현식

#### 함수는 객체다

* 자바스크립트의 함수는 Function 클래스의 인스턴스
* 함수 선언문에서 함수 이름을 제외한 코드를 함수 표현식이라고 함

```typescript
let add =  new Function('a','b','return a + b')
let ret = add(1,2)
```

#### 일등 함수

* 프로그래밍 언어가 일등 함수(first-class function) 기능을 제공하면 함수형 프로그래밍 언어 라고 함
* 일등 함수란 함수와 변수를 구분하지 않는 다는 것

#### 표현식

