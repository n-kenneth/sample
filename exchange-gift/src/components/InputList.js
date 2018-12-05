import React from "react";

const InputList = props => (
  <li>
    <input type="text" placeholder="Name" ref={`name`} />
    <input type="email" placeholder="email" ref={`email`} />
  </li>
);

export default InputList;
