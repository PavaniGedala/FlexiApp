import React from 'react';

const input = (props) => {
  let inputElement = null;
  switch (props.elementConfig.type) {
    case "TextField":
      inputElement = <input name={props.name} type="text"/>;
      break;
      case "DropDown":
        inputElement = <select value={props.value}>
          {props.elementConfig.values.map(option => (<option key={option} value={option}>
            {option}
          </option>))}
        </select>;
        break;

    default:
      inputElement = <input name={props.name} {...props.elementConfig}/>;
  }

  return (
    <div>
      <label>{props.elementConfig.label}</label>
      {inputElement}
    </div>
  );
};

export default input;