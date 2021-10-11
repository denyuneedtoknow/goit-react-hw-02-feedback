import s from "./Statistics.module.css"
export default function Statistics({
  good,
  neutral,
  bad,
  total,
  percentsApproving,
}) {
  return (
    <>
      <div className={s.gradeThumb}>
        <p className={s.gradeDescription}>Great!</p>
        <p className={s.grades}>{good}</p>
      </div>
      <div className={s.gradeThumb}>
        <p className={s.gradeDescription}>Meh...</p>
        <p className={s.grades}>{neutral}</p>
      </div >
      <div className={s.gradeThumb}>
        <p className={s.gradeDescription}>Bad :(</p>
        <p className={s.grades}>{bad}</p>
      </div >
      <div className={s.gradeThumb}>
        <p className={s.gradeDescription}>Reviews</p>
        <p className={s.grades}>{total}</p>
      </div >
      <div className={s.gradeThumb}><p className={s.gradeDescription} >Reviwers approved</p><p className={s.grades}>{percentsApproving}%</p></div >
    </>
  );
}
