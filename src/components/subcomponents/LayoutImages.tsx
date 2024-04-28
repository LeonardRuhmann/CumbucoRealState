export type Props = {
  img1: string;
  img2: string;
  img3: string;
};

export default function LayoutImages({ img1, img2, img3 }: Props) {
  return (
    <>
      <div className="properties-container">
        <div
          style={{
            backgroundImage: img1,
          }}
          className="properties-grid"
        ></div>
        <div
          style={{
            height: "171.8%",
            backgroundImage: img2,
          }}
          className="properties-grid"
        ></div>
        <div
          style={{
            backgroundImage: img3,
          }}
          className="properties-grid"
        ></div>
      </div>
    </>
  );
}
