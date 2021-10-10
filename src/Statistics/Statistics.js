export default function Statistics({
  good,
  neutral,
  bad,
  total,
  percentsApproving,
}) {
  return (
    <>
      <p>{good}</p>
      <p>{neutral}</p>
      <p>{bad}</p>
      <p>{total}</p>
      <p>{percentsApproving}%</p>
    </>
  );
}
