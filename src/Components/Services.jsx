import React from 'react'

export default function Services() {
    const pic1 = require("../images/webservices.jpg");
    return (
        <div>
      <div
        className="card"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "40%",
        }}
      >
        <img src={pic1.default} class="card-img-top" alt="Alt" />
        <div className="card-body">
          <p className="card-text">
            HTML, CSS, JavaScript, Bootstrap, NodesJs, ReactJs
          </p>
        </div>
      </div>
    </div>
  );
}

