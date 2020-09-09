## 01-1 타입스크립트란 무엇인가

* ES5: 웹 브라우저에서 동작하는 표준 자바스크립트
* ESNExt: 매년 새 버전을 발표하는 자바스크립트
* Type Script: ESNext에 타입 기능을 추가한 자바스크립트

* ESNext는 ES5의 문법을 포함, 타입스크립트는 ESNext의 문법을 포함.
* 타입스크립트로 개발하더라도 타입 기능을 사용하지 않는다면 ESNext를 사용한 소스나 마찬가지

#### 자바스크립트에 타입 기능이 있으면 좋은 이유

* 타입의 모호성으로 인한 협업 문제 발생 감소
* 컴파일러를 통한 문제발경

#### 트랜스 파일

* ESNext 자바스크립트 코드는 Babel(이후 바벨)이라는 트랜스파일러를 거쳐 ES5로 변환됨
* 타입스크립트는 TSC(TypeScript Compiler) 라는 트랜스 파일러를 통해 ES5로 변환됨



## 01-2 타입스크립트 주요 문법 살펴보기

타입스크립트는 ESNext 문법과 타입스크립트 고유 문법을 이용함

#### ESNext 주요 문법	

1. 비 구조화 할당(Destructuring assingment)

```typescript
let person = {name: "Jane", age: 22}
let {name, age} = person // name = "Jane", age = 22

let array = [1, 2, 3, 4]
let [head, ...rest] = array //head = 1, rest = [2,3,4]
```

2. 화살표 함수

* 자바스크립트에선 function 키워드를 사용해 함수를 선언
* ESNext에서 function키워드 외에도 화살표(=>)를 이용해 함수 선언 가능
* 이를 Arrow function이라 함

```typescript
function add(a,b) {return a + b}
const add2 = (a, b) => a + b
```

* 화살표 함수를 사용하면 function 키워드보다 간결하게 작성 가능

3. 클래스

* ESNext는 객체지향 프로그래밍 지원
* 캡슐화, 상속성, 다형성 지원.

4. 모듈

* 모듈을 사용해 코드를 여러 개 파일로 분할해서 작성 할 수 있음
* 변수, 함수, 클래스 등에 export 키워드를 사용해 모듈로 만들면 다른 파일에서 사용가능
* Import 키워드를 이용해 모듈을 가져와서사용 가능함
* ESNext는 파일을 분할해서 모듈을 구현 할 수 있음

5. 생성기

* yield 키워드 제공
* yield 문은 반복기(iterator)를 생성해 사용함
* 반복기는 반복기의 제공자(iterable)을 통해 얻음
* 반복기의 제공자를 생성기(generator)라고 부름
* 생성기는 function 키워드 앞에 *을 결합해 yield키워드오 ㅏ사용함
* yield는 function*로 만들어진 함수 내부에서만 사용 가능

```typescript
function* gen(){
  yield*[1,2]
}

for(let value of gen()) { console.log(vlaue) }
```

* gen function이 실행되고 yield문을 타게 되면, 아래 for문을 동작 시킨 후 다시 원래 위치로 돌아감

6. Promise와 async/await 구문

* ES5로 비동기 콜백 함수를 구현하기 어려움
* Promise는 웹 브라우저와 Node.js에서 모두 제공하는 기본 타입으로, 비동기 콜백 함수를 쉽게 구현하기 위해 들어짐
* Async/await 구문은 C#4.5 구문을 빌려 여러개의 Promise 호출을 간결하게 구현 할 수 있음

```typescript
async function get(){
  let values = []
  value.push(await Promise.resolve(1))
  value.push(await Promise.resolve(2))
  value.push(await Promise.resolve(3))
  return values
}

get().then(values => console.log(values)) // [1, 2, 3]
```

* Async 를 사용한 함수는 본문에서 await 키워드를 사용 할 수 있음
* await는 Promise 객체를 해소(resolve)함
* 아래 get함수는 [1,2,3] 값을 Promise 형태롤 반환
* get이 반환한 promise 객체는 then 메서드를 호출해 실제 값을 얻을 수 있음

#### 타입스크립트 고유 문법 살펴보기

1. 타입 주석과 타입 추론

