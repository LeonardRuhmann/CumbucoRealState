import db from "../database/db";
export default function Tony() {
  return (
    <>
      <h1>{db.CJ1000.name}</h1>
      <img src={db.CJ1000.imgUrl} alt="" />
    </>
  );
}
