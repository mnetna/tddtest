# **Counter 컴포넌트 TDD로 만들기!**

### **환경설정**

HTML 속성인 id나 class를 직접 사용하면 나중에 문제생길 수 있으므로 `data-test` 속성을 셀렉터로 사용하면 좋겠습니다.  


**production에서 `data-test` 지우기**

  1. `npm i —save—dev babel-plugin-react-remove-properties`
  2. `npm run eject` - babel setting 다 빼줌 
  3. package.json 수정

  ```jsx
  "babel": {
  // 아래 추가 
      "env": {
        "production": {
          "plugins": [
            ["react-remove-properties", {"properties": ["data-test"]}]
          ]
        }
      },
      "presets": [
        "react-app"
      ]
    }
  ```

  4. `npm run build`

**사용 예시**  

```js
//Counter.js
 return (
      <div data-test="component-app"> </div>


//Counter.test.js
const wrapper = shallow(<Counter />)
const appComponent = wrapper.find('[data-test="component-app"]');
```



### **요구사항**

**아래 red 테스트를 green 으로 바꿔주세요.**

```js
test("에러 없이 렌더링이 잘된다.", () => {});
test("플러스 버튼 렌더링이 잘된다. ", () => {});
test("카운터 숫자가 렌더링이 잘된다.", () => {});
test("카운터의 초기값은 0이다.", () => {});
test("클릭 버튼을 누르면 카운터 숫자가 증가된다.", () => {});
```


### **챌린지 문제!!**
요구사항이 넘 쉽다. 이건 껌이다. 하시는 분들은 아래 조건을 충족하는 테스트도 만들어주세요.


**1. 감소 버튼**  
- 카운터에서 1씩 감소하는 버튼 생성  
- 버튼 누르면 숫자 감소하는 기능 추가  

**2. 0보다 작은 숫자 처리**
- 카운터 숫자가 0일때 감소버튼이 눌리면 숫자를 감소시키지 말고 `0 보다 작은 숫자는 올 수 없습니다.` 라는 에러 문구 표출 

**3. 초과 버튼을 눌렀을때 에러 문구 삭제**
- 에러 문구 (`0 보다 작은 숫자는 올 수 없습니다.`) 가 있을때 증가 버튼이 눌리면 에러 문구 삭제 
