import "./App.css";
import { useState } from "react";

function App() {
  let [글제목, changeTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]); // 자주 변경될것 같은 html은 state로 만들기
  let [좋아요, plusThumbsup] = useState([0, 0, 0]); // state 이름, state 함수
  let [modal, setModal] = useState(false);

  /*   map함수
  기능 1. array에 들어있는 자료갯수만큼 그 안에 있는 코드를 반복실행해줍니다.
  기능 2. 콜백함수에 파라미터 아무렇게나 작명하면 그 파라미터는 어레이 안에 있던 모든 자료를 하나씩 출력해줍니다.
  기능 3. return 오른쪽에 뭐 적으면 array로 담아줍니다. */

  return (
    <div className="App">
      <div className="black-nav">
        <h4>"리액트 블로그"</h4>
      </div>
      {/* <div className="list">
        <button
          onClick={() => {
            let copy = [...글제목];
            copy.sort();
            changeTitle(copy);
          }}
        >
          가나다순정렬
        </button>
        <h4>
          {글제목[0]}{" "}
          <button
            onClick={() => {
              let copy = [...글제목]; // state 함수는 기존 == 신규 일경우 동작하지 않는다. ...는 괄호를 벗겨주세요라는 문법 걍 눈속임
              copy[0] = "여자 코트 추천";
              changeTitle(copy);
            }}
          >
            바꾸기
          </button>
          <span
            onClick={() => {
              plusThumbsup(좋아요 + 1);
            }}
          >
            👍
          </span>{" "}
          {좋아요}
        </h4>
        <Title />
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <Title />
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {글제목[2]}
        </h4>
        <Title />
      </div> */}

      {글제목.map((a, i) => {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
              }}
            >
              {글제목[i]}
              <span
                onClick={() => {
                  let copy = 좋아요;
                  copy[i] = copy[i] + 1;
                  plusThumbsup(좋아요);
                }}
              >
                👍
              </span>{" "}
              {좋아요[i]}
            </h4>
            <Title />
          </div>
        );
      })}

      {modal == true ? <Modal /> : null}
    </div>
  );
}

const Title = () => {
  return <p>2월 17일 발행</p>;
};

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
/* 켐포넌트를 이렇게 따로 함수로 빼서 사용가능함,
1.반복적인 html은 이렇게 하면 좋음
2. 큰 페이지들
3. 자주변경되는 것들 */

/* Modal창 작성 step
1. html css로 미리 UI 디자인을 다 해놓고
2. UI의 현재 상태를 state로 저장해두고
3. state에 따라서 UI가 어떻게 보일지 조건문 등으로 작성 */
export default App;
