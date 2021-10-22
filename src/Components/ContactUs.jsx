import React from "react";

export default function ContactUs() {
  const pic1 = require("../images/pic1.jpg");
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
            This is a example of About page with Image card. Here you can write using different boostrap component
          </p>
        </div>
      </div>
    </div>
  );
}
