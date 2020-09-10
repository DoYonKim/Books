## 02-1타입스크립트 프로젝트 만들기

일부만 기록하고 생략

* npm install 옵션
  * --save: 프로젝트 실행시 필요한 패키지로 설치함. 패키지 정보가 package.json 파일의 dependencies 항목에 등록됨
  * --save-dev: 프로젝트를 개발할 때만 필요한 패키지로 설정됨. package.json파일의 devDependencies 항목에 등록됨
* 자바스크립트로 개발된 라이브러리가 타입스크립트에서 사용되기 위해 @types/ 라이브러리 제공해야 하고, index.d.ts 파일을 갖고 있음. 타입스크립트 컴파일러는 이 파일 내용을 기반으로 라이브러리에서 제공하는 함수를 검증함
* 타입스크립트 프로젝트를 개발 할 때 ts-node를 사용하지만, 개발이 완료되면 타입스크립트 소스코드를 ES5 자바스크립트 코드로 변환해 node를 실행해야 함. 

```json
"scripts": {
    "dev": "ts-node src",
    "build": "tsc && node dist",
  }
```

* Dev 명령은 src 디렉토리에 있는 index.ts 파일을 실행하는 용도로 사용
* build 명령은 개발 완료 후 프로그램을 배포하기 위해 dist 디렉토리에 ES5 자바스크립트 파일 만들때 사용

* 각각의 소스파일은 모듈이라 불리고, 각 모듈은 고유 기능을 구현함. 이를 모듈화 라고 함
* export default 가 붙는 경우, import 시 중괄호 없이 사용한다.



#### tsconfig.json 파일

* compilerOption: 옵션 설정
* include: 대상 소스 항목



* compilerOption 항목
  * module: 컴파일 되어 만들어진 ES5 자바스크립트 파일은 웹 브라우저, Node.js에서 동작해야 함. 웹 브라우저에서는 AMD(asynchronous module definiton)방식으로 동작, Node.js 환경에서는 CommonJS방식으로 동작함(amd/commonjs)
  * moduleResolution: 모듈의 키값. commonjs이면 node, amd면 classic으로 설정
  * Target: ES5, ES6 등 자바스크립트 버전
  * 다른 옵션은 필요할 떄 찾아보기...