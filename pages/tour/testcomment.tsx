// 表示しているツアーページの`tourId`取得

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:8000/tours/1`);
  const tour = await res.json();
  return {
    props: { tour },
  };
}

const ViewComment = ({tour} : {tour:any}) => {
  console.log(tour);
  return <h1>HEllo Monday</h1>;
};
export default ViewComment;
