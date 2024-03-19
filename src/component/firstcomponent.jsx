import { useState } from "react";

const FirstComponent = (props) => {
  const [name, setName] = useState("yash");
  // console.log(name)
  console.log(props, "6788");
  // const a = data.props
  // console.log(a)
  const { data, setData } = props;
  console.log(data);

  const warm = () => {
    setData("bhaiya");
  };

  const swipe = () => {
    setName("kashyap");
  };
  return (
    <div>
      <button onClick={warm}>click me</button>
      <div>This is my FirstComponent</div>
      <div>
        {name}
        <button onClick={swipe}>hit</button>
      </div>
    </div>
  );
};
export default FirstComponent;
