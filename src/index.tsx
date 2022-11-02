/* 모듈 설치 시
npm i --save-dev @types/모듈명
으로 설치합니다. 내가 까먹어서 적어둡니다*/

import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./css/index.css"; //기본값 정리, 삭제
import "./css/fonts.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* Hash를 쓸 지, Browser를 쓸 지 고민해봅시다... */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
