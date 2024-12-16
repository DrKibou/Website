import { useNavigate } from "react-router-dom";
import StackIcon from "./StackIcon";
import "./App.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/StartPage");
  };
  
  const handleAPIClick = () => {
    navigate("/APIPage");
  };

  return (
    <div className="App">
      <StackIcon size={200} />
      <h1>Stack App</h1>
      <button className = "start-button" onClick={handleStartClick}>Start</button> {}
      <button className = "start-button" onClick={handleAPIClick}>API Calling</button> {}
    </div>
  );
};

export default HomePage;
