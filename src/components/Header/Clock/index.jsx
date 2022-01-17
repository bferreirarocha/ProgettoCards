import { useState, useEffect } from "react";
import "./style.scss";

const Clock = () => {
  const [ora, setOra] = useState();
  useEffect(() => {
    setInterval(() => setOra(getTime(), 60000));
  }, []);

  const getTime = () => {
    var today = new Date();
    return today.getHours() + ":" + today.getMinutes();
  };
  return (
    <div className="Clock">
      <span>{ora}</span>
    </div>
  );
};

export default Clock;
