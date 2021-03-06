import EmptyHeart from "components/EmptyHeart/EmptyHeart";
import FullHeart from "components/FullHeart/FullHeart";
import "./Health.css";

const HealthUnit = ({ filled }) => {
  let unit = <EmptyHeart />;
  if (filled) {
    unit = <FullHeart />;
  }
  return <div className="health-unit">{unit}</div>;
};

const Health = ({ value, maxValue }) => {
  let healthUnits = Array(maxValue)
    .fill()
    .map((_, index) => {
      return <HealthUnit key={index} filled={value >= index + 1} />;
    });
  return <div className="health-bar">{healthUnits}</div>;
};

export default Health;
