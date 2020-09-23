## 07-1 비동기 콜백 함수

#### 동기와 비동기 API

* Node.js는 파일시스템과 과련된 기능을 모아둔 fs 패키지 제공
* 동기/ 비동기 버번으로 나누어 제공
  * 파일을 읽는 기능은 동기 버전인 readFileSync, 비동기 버전인 readfile 제공

#### readFileSync와 readFile API

* Node.js는 운영체제 파일시스템의 파일을 읽을 수 있음
* 파일읽기는 readFileSync 라는 이름의 API를 사용해서 구현
  * 파일을 읽어서 Buffer라는 타입으로 전달
  * Buffer는 노드 클래스로 바이너리 데이터를 저장함
  * 파일을 읽는 동안 코드는 중지됨
* 비동기방식 readFile 제공
  * 매개변수 첫라지레 콜백함수를 전달

#### 단일 스레드와 비동기 API

* 자바스크립트는 단일 스레드로 동작하기때문에 되도록 readFileSync같은 동기 API는 사용하지 않는 것이 좋음
* 동기 API가 실행되면 반응성을(responsiveness)를 떨어뜨림
* 비동기 방식을 이용해 반응성을 훼손하지 말아야 함

#### 콜백 지옥

* 비동기 API 사용시 또다른 비동기 API를 호출해야 하는 경우 코드가 복잡해짐
* 첫 콜백함수의 몸통에 다른 콜백함수를 호출하는 방식을 이용
* 이런 콜백을 callback hell이라고 하고, promise는 이것을 해소하기 위해 등장



## 07-2 Promise 이해하기

* ES5에서 Promise는 정식 기능으로 채택
* Promise 이름의 클래스

```typescript
const promise = new Promise(콜백함수)
```

* 콜백함수는 resolve, reject 라는 두 개의 매개변수를 갖음
* 타입스크립트에서 Promise는 제네릭 클래스 형태로 사용됨
* 07-2 후략 후에 필요시 확인할것

## 07-3 async와 await 구문

* C#의 비동기 프로그래밍
* 코드를 간결하게 구현 할 수 있는 async와 await 구문 사용

#### await 키워드

* await 키워드는 피연산자 값을 반환
* 피연산자가 Promise 객체이면 then 메서드를 호출해 얻은 값을 반환

```typescript
const test = async () => {
  const value = await Promise.resolve(1)
  console.log(value)
}

test()
```

#### async 함수 수정자

* await 키워드는 async 함수 수정자가 있는 함수 몸통에서만 사용 가능

```typescript
const test1 = async() => {
  await Promise 객체 혹은 값
}

const function test2() {
  await Promise 객체 혹은 값
}
```

#### async 함수의 두 가지 성질

* 일반 함수처럼 사용함
* Promise 객체로 사용할 수 있음

```typescript
test1().then(() => test2())
```

* Async 함수를 Promise 객체로 사용한 예시
* test1() 함수가 해소(resolve) 된 후 test2() 함수를 호출하게 됨

#### async 함수가 반환하는 값의 의미

* Async 함수는 값을 반환할 수 있음
* 반환값은 Promise 형태로 반환
* then 메서드를 호출해 async 함수의 반환값을 얻어야 함

#### async 함수의 예외처리

* 예외 발생시 프로그램 비정상으로 종료됨
* asyncExcepton을 try, catch 형태로 감싸서 사용하면 비정상 종료 예방 가능