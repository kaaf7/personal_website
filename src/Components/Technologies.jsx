import React from "react";

 const Technologies = ({dimension}) => {
  return (
    <p align="left">
      {" "}
      <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
        {" "}
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
          alt="react"
          width ={dimension}
          height={dimension}
        />{" "}
      </a>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          alt="javascript"
          width ={dimension}
          height={dimension}
        />{" "}
      </a>{" "}
      <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
        {" "}
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
          alt="css3"
          width ={dimension}
          height={dimension}
        />{" "}
      </a>{" "}
      <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
        {" "}
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
          alt="html5"
          width ={dimension}
          height={dimension}
        />{" "}
      </a>
      <a href="https://nodejs.org" target="_blank" rel="noreferrer">
        {" "}
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
          alt="nodejs"
          width ={dimension}
          height={dimension}
        />{" "}
      </a>
      <a href="https://expressjs.com" target="_blank" rel="noreferrer">
        {" "}
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
          alt="express"
          width ={dimension}
          height={dimension}
        />{" "}
      </a>{" "}
      <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
        {" "}
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
          alt="mongodb"
          width ={dimension}
          height={dimension}
        />{" "}
      </a>{" "}
      <a href="https://redux.js.org" target="_blank" rel="noreferrer">
        {" "}
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
          alt="redux"
          width ={dimension}
          height={dimension}
        />{" "}
      </a>
    </p>
  );
};
export default Technologies