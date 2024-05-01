export type Props = {
  img1: string | undefined;
  img2: string | undefined;
  img3: string | undefined;
};

export default function LayoutImages({ img1, img2, img3 }: Props) {
  return (
    <>
      <div
        className={
          img2 === undefined || img1 === undefined || img3 === undefined
            ? "noGrid properties-container"
            : "properties-container"
        }
      >
        <div
          style={{
            backgroundImage: img1,
            display: img1 === undefined ? "none" : "grid",
          }}
          className="properties-grid"
        ></div>
        <div
          style={{
            height: "171.8%",
            backgroundImage: img2,
            display: img2 === undefined ? "none" : "grid",
          }}
          className="properties-grid"
        ></div>
        <div
          style={{
            backgroundImage: img3,
            display: img3 === undefined ? "none" : "grid",
          }}
          className="properties-grid"
        ></div>
      </div>
    </>
  );
}
