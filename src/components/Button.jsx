import React from "react";

const Button = ({ name, class_name }) => {
      return <button className={class_name}>{name}</button>;
};

export default Button;
