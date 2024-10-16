import React from "react";

const Link = ({ route }) => {
  return (
    <li key={route.id} className="hover:bg-yellow-200">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
