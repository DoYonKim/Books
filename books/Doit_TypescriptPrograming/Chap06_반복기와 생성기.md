## 06-1 반복기 이해



* 프로젝트 세팅
  * npm init --y
  * npm i -D typescript ts-node @types/node
  * mkdir src
  * tsc --init
* tsconfig

```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Basic Options */
    "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
  
    /* Strict Type-Checking Options */
    "strict": true,                           /* Enable all strict type-checking options. */
   

    /* Module Resolution Options */
    "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    
    /* Advanced Options */
    "skipLibCheck": true,                     /* Skip type checking of declaration files. */
    "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
  },
  "include": ["src/**/*"]
}
```

* Config script 추가

```json
"scripts": {
    "dev": "ts-node src",
    "build": "tsc && node dist",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```



#### 반복기와 반복기 제공자

* 프로그래밍에서의 반복자
  * Next 메서드 제공
  * Next 메서드는 value와 done이라는 두개의 속성을 가진 객체를 반환
* 소스 파일에서 변수 1개 갖고, from에서 to 까지 탐색하는것이 목표
* done에 true가 반환되면 종료

#### 반복기의 필요성

* 반복기 제공자는 모든 범위의 값을 한번에 만들지 않고 데이터를 필요에 따라 생성해 사용
* 메모리 사용에 용이함

#### for ...of 구문과 Symbol.iterator 매서드

* For... of 구문을 사용하기 위해, iterator를 클래스로 구현해야 함

#### Iterable< T>와 Iterator< T> 인터페이스

* 타입스크립트는 반복기 제공자에 Iterable, Iterator 제네릭 인터페이스 사용 가능
* Iterable
  * 구현되는 클래스가 Symblo.iteraotor 메서드를 제공함

```typescript
class 구현클래스 implements Iterable<생성할 값의 타입>{}
```

* Iterator
  * 반복기가 생성할 값의 타입을 명확하게 함

```typescript
[Symbol.iterator](): Iterator<생성할 값의 타입>{}
```



## 06-2 생성기 이해하기

* ESNext 자바스크립트는 yield 키워드 제공함
* yield 키워드는 function* 키워드 사용한 함수만 호출 가능
* 이렇게 만들어진 함수를 생성기(generator) 라고 함

#### setInterval 함수와 생성기의 유사성

* 생성기가 동작하는 방식을 '세미코루틴' 이라고 함
* 타입스크립트와 같이 단일 스레드로 동작하는 언어가 다중 스레드로 보이는 것처럼 동작
* setInterval 함수는 지정한 주기로 콜백 함수를 호출

```typescript
const intervalID = setInterval(콜백함수, 호출 주기)
//무한히 반복하는 setInterval 함수를 중지
clearInterval(intervalId)
```

#### function* 키워드

* Function* 키워드로 함수를 선언
* 함수 몸통에 yield 문이 있음
* Function*은 화살표 함수로 만들수 없음

#### yield 키워드

* 반복기를 자동으로 만듬
* 반복기 제공자 역할도 수행

#### 이후 생략