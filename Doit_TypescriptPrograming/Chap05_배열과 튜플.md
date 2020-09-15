## 05-1 배열 이해하기



* 자바스크립트에서 배열은 Array 클래스의 인스턴스
* 배열을 객체로 생각 할 수 있어야 함(isArray 메서드를 사용 할 수 있음)
* push 메서드를 이용해 추가

```typescript
let arr = new Array(3) //(배열 길이)

arr.push(1)
arr.push(2)
arr.push(3)
console.log(arr) // [1, 2, 3]
```

```typescript
let nArr: number[] = [1, 2, 3]
let sArr: string[] = ['hello', 'bye']
```

* 타입스크립트는 char 형식이 따로 없기 때문에 string을 string 배열로 사용할 떄도 있음

#### for ...in 문

* for 문을 쉽게 사용 할 수 있도록 제공되는 구문

```typescript
let arr = [1,2,3]
for(let index in arr){
  console.log(arr[index])
}
```

* 만약 for in 문이 객체에서 사용되면, 속성을 기준으로 순회 (배열은 인덱스)

#### for ---of 문

* for in 문이 배열의 인덱스를 기준으로 순회한다면, for of 문은 배열의 아이템을 기준으로 순회함. 배열 번호가 불필요하고, 아이템만 사용한다면 for of 문을 사용해도 좋음

#### 제네릭 방식 타입

* 여러가지 타입 배열을 한번에 처리하기 위 제네릭 방식을 이용함
* 공통되는 기능은 제네릭으로 표현하면 유리하는 점을 인지하고 넘어가기로 함

```typescript
const arrLen = (array) => array.lengh

const arrLen = (array: T[]): number => array.lengh
```



## 05-2 선언형 프로그래밍과 배열



#### 선언형 프로그래밍

* 자원의 효율적 운용보다 일관된 문제 해결 구조에 집중
  * 문제를 푸는 데 필요한 모든 데이터 배열에 저장
  * 입력 데이터 배열을 가공해 출력 데이터 배열 생성
  * 출력 데이터 배열에 담긴 아이템 출력
* 데이터를 먼저 전부 생성하고 작업을 시작한다고 이해됨

#### fold: 배열 데이터 접기

* 폴드: 배열 데이터를 가공해 단일 값을 생성하려할때 사용하는 단어
* 폴드 함수는 T[] 데이터를 가공해 T를 만들어냄
* 부채를 fold 하는것으로 이해하면 편함

```typescript
export const fold = <T>(array: T[], callback: (result: T, val: T) => T, initVlaue: T) => {
    let result: T = initVlaue
    for(let i = 0; i <array.length; ++i){
        const value = array[i]
        result = callback(result, value)
    }
    return result
}
```

* 입력 배열, 배열을 가공할 콜백함수, 첫 값을 이용해 생성한 폴드 함수의 예시

#### filter: 조건에 맞는 배열 아이템만 추려내기

* 데이터를 한번에 셋 하는중 필요한 데이터를 사용하기 위해 filter 를 사용

```typescript
export const filter = <T>(array: T[], callback: (value:T, index?: number) => boolean): T[] => {
    let result: T[] = []
    for(let index: number = 0; index < array.length; ++index){
        const value = array[index]
        if(callback(value, index))
            result = [...result, value]
    }
    return result
}
```

#### map: 배열 데이터 가공하기

* 입력에 따른 출력의 값과 타입을 모두 고려

```typescript
export const map = <T, Q>(array: T[], callback: (value: T, index?: number) => Q): Q[] => {
    let result : Q[] = []
    for(let index = 0; index < array.length; ++index){
        const value = array[index]
        result = [...result, callback(value, index)]
    }
    return result
}
```



## 05-3 배열의 map, reduce, filter 메서트

* 배열의 값은 체인메서드로 동작하도록 설게되어있음

#### filter 매서드

* 배열 타입이 T[]일 때 배열의 filter는 설계되어 있음

```typescript
filter(callback: (value: T, index?: number):boolean): T[]
```

#### map 매서드

* 배열 타입이 T[]일 때 배열의 map은 설계되어 있음

```
map(callback: (value: T, index?: number):Q): Q[]
```

#### reduce 매서드

* fold 는 reduce로 구현되어있음

```typescript
reduce(callback: (result: T, value: T), initValue: T): T
```



## 05-4 순수 함수와 배열



* 함수형 프로그래밍의 함수는 '순수함수' 라는 조건을 만족해야 함
* Array 클래스에 순수조건을 부합하지 못하는 메서드들이 있으므로, 매서드가 어떤 특징이 있는지 알아야 함

#### 순수함수란?

* 순수함수는 side effect 가 없는함수
* 아래 조건을 충족해야 함
  * 함수 몸통에 입출력 관련 코드가 없음
  * 함수 몸통에서 매개변수 값을 변경하지 않음
  * 함수 몸통에서 만들어진 결과를 즉시 반환
  * 함수 내부에서 전역변수나 정적 변수를 사용하지 않음
  * 함수가 예외를 발생시키지 않음
  * 함수가 콜백으로 구현되었거나 함수 몸통에 콜백 함수를 사용하는 코드가 없음
  * 함수 몸통에 Promise와 같은 비동기 방식으로 동작하는 코드 없음

#### 타입 수정자 readonly

* 순수함수 작성을 도와주기 위해 readonly 키워드 제공
* 매개변수 주석 앞에 작성
* 매개변수 변경 시 문제 알림
* const가 있음에도 readonly 필요한 이유
  * 인터페이스, 클래스, 매개변수는 let이나 const 없이 선언되는 경우가 많음

#### 불변과 가변

* 불변(immutable): const, readonly 가 명시됨, 변할수 없음
* 가변(mutable): let 이거나, readonly 없는 경우. 변동될 수있음

#### 깊은복사, 얕은복사

* 매개변수를 변경해 사용하고 싶은 경우 깊은 복사를 통해 완전히 복사해 사용
* 객체, 배열은 기본적으로 = 오퍼레이터를 통해 얕은복사가 되는것에 유의해햐 함
  * 전개 연산자를통해 깊은 복사 가능

```typescript
const oArray = [1, 2, 3, 4]
const deepCopiedArray = [...oArray]

deeepCopiedArray[0] = [0]
console.log(oArray, deepCopiedArray) //[1, 2, 3, 4][0, 2, 3, 4]
```

* 배열에서 제공되는 filter, map은 sort와 다르게 깊은 복사 형태로 지원

#### 가변 인수 함수, 순수함수

* 함수 호출시 인수의 개수를 제한하지 않는것을 가변인수라 함

```typescript
const mergetArray1: string[] = mergeArray(
  ['hello'], ['bye']
)

const mergeArray2: string[] = mergeArray(
  ['1'], ['2'], ['3']
)
```

* 매개변수 앞에 '...'를 이용해 가변 인수 함수를 구현 할 수 있음
  * 이는 전개 연산자가 아닌 가변 인수를 표현하는 구문임

```typescript
export const mergeArray = (...arrays) => {}
```

* 제네릭 표현방식

```typescript
export const mergeArray = <T>(...arrays) => {}
```

* 전달 받는 값이 배열이고 반환도 배열이므로

```typescript
export const mergeArray = <T>(...arrays[][]): T[] => {}
```



## 05-5 튜플 이해하기

* 자바스크립트에서 튜플은 배열 취급

```typescript
const tuple: [boolean, string] = [true, 'the result is ok']
```

