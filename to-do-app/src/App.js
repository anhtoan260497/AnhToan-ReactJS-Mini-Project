import Header from "./Components/Header";
import "./App.scss";
import { useState } from "react";
import clsx from "clsx";
import TodoList from "./Components/TodoList";
import { GithubOutlined } from "@ant-design/icons";

function App() {
  //State

  // 1. State for Dark and Light mode
  const date = new Date();
  const hours = date.getHours();

  const [isDark, setIsDark] = useState(() => {
    if (hours - 12 >= 6 || hours - 12 <= -6) return true; // số giờ hiện tại -12 , lớn hơn 6 hoặc bé hơn -6 sẽ là ban đêm
    return false;
  });

  const [icon, setIcon] = useState(() => {
    if (isDark) return process.env.PUBLIC_URL + "/svg/icon-moon.svg";
    return process.env.PUBLIC_URL + "/svg/icon-sun.svg";
  });

  // Function
  const handleClickIcon = () => {
    setIsDark(!isDark);
    if (!isDark) setIcon(process.env.PUBLIC_URL + "/svg/icon-moon.svg");
    else setIcon(process.env.PUBLIC_URL + "/svg/icon-sun.svg");
  };

  return (
    <div>
      <div className="background">
        <header
          className={clsx("background-top", {
            dark: isDark ? true : false,
            light: !isDark ? true : false,
          })}
        ></header>
        <footer
          className={clsx("background-bottom", "transition", {
            "dark-bottom": isDark ? true : false,
            "light-bottom": !isDark ? true : false,
          })}
        ></footer>
      </div>
      <div className="content">
        <Header isDark={isDark} handleClickIcon={handleClickIcon} icon={icon} />
        <TodoList isDark={isDark} />
      </div>

      <a
        style={{ position: "fixed", left: "49%", top: "90%" }}
        href="https://github.com/anhtoan260497"
        target="_blank"
        rel="noreferrer"
        title="my Github"
      >
       {isDark ?  <GithubOutlined style={{ fontSize: "2rem", color: "white" }} /> : <GithubOutlined style={{ fontSize: "2rem", color: "black" }} />}
      </a>
    </div>
  );
}

export default App;
