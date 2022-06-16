import { observer } from "mobx-react-lite";
import counter from "../store/counter";

const Counter = () => {
  const handlePlus = () => {
    counter.plusCount();
  };
  const handleMunis = () => {
    counter.munisCount();
  };
  return (
    <div>
      <button onClick={handlePlus}>+</button>
      <div>{counter.count}</div>
      <button onClick={handleMunis}>-</button>
    </div>
  );
};

export default observer(Counter);
