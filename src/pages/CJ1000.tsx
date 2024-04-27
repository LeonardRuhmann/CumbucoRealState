import React from "react";
import db from "../../database/db";
export default function Tony() {
  return (
    <>
      <h1>{db.CV7500.name}</h1>
      <img src={db.CV7500.imgUrl} alt="" />
    </>
  );
}
