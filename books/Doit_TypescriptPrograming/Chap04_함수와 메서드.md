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

#### 계산식

* 조급한 계산법(eager evaluaton), 느긋한 계산법(lazy evaluation)

#### 익명함수

```typescript
let val = (function(a,b) {return a+b})(1,2) //let = 3
```

* 함수상태를 게으른 연산자를 통해 그대로 두고, (1,2) 를 바로 대입해 함수 몸통에 대한 계산을 시작

#### const 키워드와 함수 표현식

* 함수 표현식을 담는 변수는 const를 키워드로 선언하는게 바람직

```typescript
const f = () => {}
```



## 04-3 화살표 함수와 표현식 문

```typescript
const 함수이름 = (매개변수:타입, 매개변수:타입) :반환타입 => (함수 몸통)
```

* 화살문 함수 표현식에서는 (함수 몸통) 에서 return 생략해도 되도록 되어있음
* return 사용하려면 중괄호가 필수임
* ES5, 타입스크립트는 세미콜론을 생략 할 수 있음. 타입스크립트는 관습적으로 세미콜론을 삭제함



## 04-4 일등 함수 살펴보기

#### 콜백함수

* 함수표현식 변수를 매개변수로 받는 함수

```typescript
const func (callback:() =>void):void => {
  console.log("funstart")
  callback()
}

func(()=>console.log("callback")) 
//funstart
//callback
```

#### 중첩함수

* 함수 매개변수로 함수를 넘기고 그 안에서 함수를 선언해 사용할 수 있음
* 함수를 어디에서든 값을 가져오고, 변형하는것일뿐 특별하지 않게 인지하면 될 듯

#### 고차 함수와 클로저, 그리고 부분 함수

* 클로저: 고차 함수에서 return을 하는 부분
* 부분함수: 호출연산자가 아직 다 완료되지 않은 상태의 함수
  * mul(1)(2) 가 되어야 함수가 정상 도작 할 때, mul(1)의 상태

```typescript
const add = (a: number): (number) => number => (b: number):number => a + b
```



## 04-5 함수 구현 기법



#### 매개변수 기본값 지정하기

* 매개변수는 기본값을 이용해 나타낼 수 있음

```typescript
const func = (numVal:number = 10):number =>{
  return numver + 10
}
```

#### 객체를 반환하는 화살표 함수 만들기

* 중괄호는 복합 실행문으로 해석함. 객체는 소괄호로 감싸야 함

```typescript
const makePerson = (name: string, age: number = 10): Pesron = ({name, age})
```



#### 색인 키와 값으로 객체 만들기

* {[ket]:valuie} 형태를 '색인 가능 타입'이라고 하고, 각각 키와 값을 갖는다.

```typescript
type KeyType = {
  [key: string]: string
}

const makeObject = (ket: string, value: string): KeyValueType => ({[key]: vlaue})

console.log(makeObject('name','Jack'))  //{name: Jack}
```



## 04-6 클래스 메서드



#### function 함수와 this 키워드

* functon 키워드는 Function클래스의 인스턴스
* 인스턴스는 this 키워드 사용할 수 있음
* 화살표 함수는 this 키워드 사용 할 수 없음

#### 메서드

* function으로 만든 함수 표현식을 담는 속성
* 타입스크림트는 function 키워드 생략할 수 있는 단축구문 제공

```typescript
export class B{
  constructor(public value: number=1){}
  method():void{
    console.log('vlaue: ${this.value}')
  }
}
```

* 속성 앞에 static을 붙여서 정적으로 만들 수 있음

#### 메서드 체인

* 연속해서 메서드를 호출하는 방식을 메서드 체인이라고 함

```javascript
$('#test').css("color", "red").slideUp(200).slideDown(200);
```

* 이 방식을 이용하기 위해 타입스크립트에선 메서드가 this 를 반환해야 함.

```typescript
return this
```

