import { useNavigate } from "react-router-dom";
import StackIcon from "./StackIcon";
import "./App.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/StartPage");
  };

  return (
    <div className="App">
      <StackIcon size={200} />
      <h1>Stack App</h1>
      <button className = "start-button" onClick={handleStartClick}>Start</button> {}
    </div>
  );
};

export default HomePage;
