import React, { useState } from 'react'; 
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState (['남자코트 추천 ','강남우동맛집']);
  let posts = ' 제주도 ';
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog </div>
    </div>
    <div className="list">
      <h3> {posts} </h3>
      <p>4월 18일발행 중</p>
     </div>
   
    </div>
  );
}

export default App;
