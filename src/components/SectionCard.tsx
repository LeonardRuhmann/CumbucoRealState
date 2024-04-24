type Props = {
  title: string;
};

export default function SectionCard({ title }: Props) {
  return (
    <>
      <div className="title-properties">
        <h1>{title}</h1>
      </div>
    </>
  );
}
