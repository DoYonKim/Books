## 03-1 타입스크립트 변수 선언문



#### 타입스크립트 기본 제공 타입

* number
* boolean
* string
* object

#### let과 const

var는 다른 프로그래밍 언어와 다르게 동작함. let, const 사용

* let: 값이 수시로 변경됨
* const: 값이 변경되지 않음

#### 타입 주석, 타입 추론은 앞서 확인

#### any 타입

타입스크립트는 자바스크립트와 호환을 위해 any 타입 제공

```typescript
let a: any = 0
a = 'hello'
a = true
```

#### undifined 타입

undifined 는 변수를 초기화 하지 않으면 변수가 갖는 값이고 또한 변수의 타입일 수 있음

#### 템플릿 문자열

* 변수에 담긴 값을 조합해 문자열을 만들 수 있게 함
* 역따옴표로 문사열을 감싸고, 변수를 $로 감싸는  형태

```typescript
'${변수이름}'

let count  = 10, message = 'Your count'
let result = '${message} is ${count}'
console.log(result) // Your count is 10
```



## 03-2 객체와 인터페이스



#### 인터페이스 선언문

* 객체의 타입을 정의하기 위한 interface 키워드

```typescript
interface person{
  name: string
  age: number
  ect?: boolean
}
```

* 인터페이스의 목적은 속성이 둘다 있는 객체만 유효하도록 객체 타입을 좁히는 것
* 인터페이스 조건을 벗어나는 경우 오류가 발생

#### 선택 속성 구문

* 속성 이름 뒤에 물음표를 붙여서 만들고, 이는 optional 함
* 위 예시의 etc

#### 익명 인터페이스

* 타입스크립트는 interface 사용하지 않고 이름 없는 인터페이스 만들 수 있음

```typescript
let ai: {
  name: string
  age: number
  etc?: boolean
} = {name: 'Jack', age: 32}
```



## 03-3 객체와 클래스



#### 클래스 선언문 

* class, private, pulbic, protected, implements, extend 등 사용 가능

```typescript
class className{
  [private | protected | public] name1: type1
}
```

* new 연산자를 이용해 변수 할당 가능

```typescript
let jack : Person = new Person()
jack.name = 'Jack'
jack.age = 32
```

#### 접근 제한자

* C++ 동일, public이 기본값

#### 생성자

* 생성자의 매개변수에 접근 제한자를 붙이게 되면 해당 변수를 클래스에 선언하것과 동일하게 동작함

```typescript
class Person{
  constructor(public name:string, public age?: number){}
}

let jack: Person = new Person('Jack', 32)
```

* 위 코드는 아래와 같음

```typescript
class Person{
  name: string
  age?: number
  constructor(name:string, age?: number){
    this.name = name
    this.age = age
  }
}

let jack: Person = new Person('Jack', 32)
```

* 세미콜론은 프로젝트 규정에 따라 써도 안써도 된다.

##### 인터페이스 구현

* 클래스는 인터페이스를 구현 할 수 있다.
* 인처페이스는 속성에 대한 규약(spec)일 뿐 물리적으로 속성을 만들지는 않음
  * 클래스엔 인터페이스의 속성을 반드시 멤머로 포함해야함

```typescript
interface IPerson{
  name: string
  age?: number
}

class Person implements IPerson{
  name: string
  age?: number
}
```

* 앞서 공부한 생성자를 이용해 변수 선언하는 것도 문제는 없음

#### 추상 클래스 

* Abstract 키워드 이용해 추상 클래스 사용 
* 추상 클래스는 당연히 new 키워드 이용해 객체 생성 불가능

#### 클래스 상속

* extends 키워드 사용.
* super 키워드 이용해 부모 클래스의 생성자를 호출 할 수 있음

#### Static 

* 정적인 속성을 가질 수 있음

```typescript
class A{
  static initVal = 1
}

let initVal = A.initVal //1
```



## 03-4 객체의 비구조화 할당문

```typescript
let {name, age} = jack
```

#### 잔여 연산자

* 점 세개를 사용하는 연산자가 제공됨(...)
* 잔여 연산자(rest operator) 또는 전개 연산자(spread operator)라고 부름

```typescript
let oneClass: any{
  val1: 'val1',
  val2: 'val2',
  val3: 'val3',
  val4: 'val4',
  val5: 'val5'
}

const {v1, v2, ...left} = oneClass
```

* 예제에서 left 변수에 val3, val4, val5를 담음



## 03-5 객체의 타입 변환

#### 타입 변환

```typescript
(<{name: string}>person).name
```

* 객체에 해당 타입이 없는 경우에도 일시적으로 형 변환하여 사용



#### 타입 단언

* 타입 변환 아니고 타입 단언이란 용어 사용
* 2가지 사용법 존재함
* fromObjName은 객체, toType는 단언 목표 타입

```typescript
let v1 = <toType>fromObjName
let v2 = fromObjName as toType
```

