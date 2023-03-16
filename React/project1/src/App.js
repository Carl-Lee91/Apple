import "./App.css";
import { useState } from "react";

function App() {
  let [글제목, changeTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]); // 자주 변경될것 같은 html은 state로 만들기
  let [네비게이션, nav] = useState("리액트 블로그"); // 사이트 제목은 자주 바뀌지 않기 때문에 굳이 state로 할필요 없음 변수로 ㄱㄱ
  let [좋아요, plusThumbsup] = useState(0); // state 이름, state 함수

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{네비게이션}</h4>
      </div>
      <div className="list">
        <h4>
          {글제목[0]}{" "}
          <button
            onClick={() => {
              changeTitle(["여자 코트 추천", "강남 우동 맛집", "파이썬 독학"]);
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
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
