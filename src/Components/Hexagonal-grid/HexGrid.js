import Hexagonal from "../Hexagonal/Hexagonal";
import "./HexGrid.css";
import CoreTeanImg1 from "../../assets/coreteam/core1.svg";
import CoreTeamImg2 from "../../assets/coreteam/core2.png";
import CoreTeamImg3 from "../../assets/coreteam/core3.png";
import CoreTeamImg4 from "../../assets/coreteam/core4.svg";
import CoreTeamImg5 from "../../assets/coreteam/Core5.svg";
const HexGrid = () => {
  const person = "hello everyone";
  const handleCoreTeamClick = (event) => {
    if (event.target.classList[2] === "core") {
      var coreBackground = document.querySelector(".core");
      var seniorBackground = document.querySelector(".seniors");

      coreBackground.style.backgroundColor = "#00c1fe";
      seniorBackground.style.backgroundColor = "";
    }
    if (event.target.classList[1]) {
      var container1 = document.querySelectorAll(".container1");
      var container2 = document.querySelectorAll(".container2");
      console.log(container2);
      for (let i = 0; i < container2.length; i++) {
        const element = container2[i];

        element.style.opacity = "0.5";
      }
      //       console.log(container2.children.length);
      for (let index = 0; index < container1.length; index++) {
        const element = container1[index];
        element.style.opacity = "1";
      }
    }
  };
  const handleSeniorTeamClick = (event) => {
    if (event.target.classList[2] === "seniors") {
      var seniorBackground = document.querySelector(".seniors");
      var coreBackground = document.querySelector(".core");
      seniorBackground.style.backgroundColor = "#00c1fe";
      coreBackground.style.backgroundColor = "";
    }
    if (event.target.classList[1]) {
      var container2 = document.querySelectorAll(".container2");
      var container1 = document.querySelectorAll(".container1");

      for (let index = 0; index < container1.length; index++) {
        const element = container1[index];
        element.style.opacity = "0.5";
      }
      //       console.log(container2.children.length);
      for (let index = 0; index < container2.length; index++) {
        const element = container2[index];
        element.style.opacity = "1";
      }
    }
  };
  return (
    <div className="hex-container">
      <div className="hex-grid-row">
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal />
      </div>
      <div className="hex-grid-row box2">
        <Hexagonal id="container" image={CoreTeamImg5} />
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal />
      </div>
      <div className="hex-grid-row box1">
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal id="container2" image={CoreTeamImg5} />
        <Hexagonal id="container2" image={CoreTeamImg5} />
        <Hexagonal id="container2" image={CoreTeamImg5} />
        <Hexagonal image={CoreTeamImg5} />
      </div>
      <div className="hex-grid-row box2">
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal id="container2" image={CoreTeamImg5} />
        <Hexagonal id="container1" image={CoreTeamImg5} />
        <Hexagonal id="container1" image={CoreTeamImg5} />
        <Hexagonal id="container2" image={CoreTeamImg5} />
        <Hexagonal image={CoreTeamImg5} />
      </div>
      <div className="hex-grid-row box1">
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal id="container2" image={CoreTeamImg5} />
        <Hexagonal id="container1" image={CoreTeamImg5} />
        <Hexagonal differ={true} differText="Junior Developer" />
        <Hexagonal id="container1" image={CoreTeamImg5} />
        <Hexagonal id="container2" image={CoreTeamImg5} />
      </div>
      <div className="hex-grid-row box2">
        <Hexagonal id="container2" image={CoreTeamImg5} />
        <Hexagonal id="container1" image={CoreTeamImg5} />
        <Hexagonal
          id="container core"
          onClick={handleCoreTeamClick}
          differ={true}
          differText="Core Team"
        />
        <Hexagonal differ={true} differText="Intern" />
        <Hexagonal
          id="container1"
          image={CoreTeamImg5}
          differText="Testing"
          value={2}
        />
        <Hexagonal
          id="container2"
          image={CoreTeamImg5}
          value={3}
          person={person}
        />
      </div>
      <div className="hex-grid-row box1">
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal id="container2" image={CoreTeamImg5} />
        <Hexagonal id="container1" image={CoreTeamImg5} />
        <Hexagonal
          id="container seniors"
          onClick={handleSeniorTeamClick}
          differ={true}
          differText="Seniors developer"
        />
        <Hexagonal id="container1" image={CoreTeamImg5} />
        <Hexagonal id="container2" image={CoreTeamImg5} />
      </div>
      <div className="hex-grid-row box2">
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal id="container2" image={CoreTeamImg5} />
        <Hexagonal id="container1" image={CoreTeamImg5} />
        <Hexagonal id="container1" image={CoreTeamImg5} />
        <Hexagonal id="container2" image={CoreTeamImg5} />
        <Hexagonal image={CoreTeamImg5} />
      </div>
      <div className="hex-grid-row box1">
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal id="container2" image={CoreTeamImg5} />
        <Hexagonal id="container2" image={CoreTeamImg5} />
        <Hexagonal id="container2" image={CoreTeamImg5} />
        <Hexagonal image={CoreTeamImg5} />
      </div>
      <div className="hex-grid-row box2">
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal id="container" image={CoreTeamImg5} />
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal image={CoreTeamImg5} />
      </div>
      <div className="hex-grid-row box1">
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal image={CoreTeamImg5} />
        <Hexagonal image={CoreTeamImg5} />
      </div>
    </div>
  );
};
export default HexGrid;
