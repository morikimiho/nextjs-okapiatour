import { SetStateAction, useEffect, useState } from "react";
import Layout from "../../../component/layout";


export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:8000/tours");
  const tours = await res.json();
  const paths = tours.map((tour: { id: number }) => {
    return {
      params: {
        id: tour.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};


export const getStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:8000/tours/${params?.id}`);
  const tour = await res.json();
  return {
    props: { tour },
    revalidate: 10,
  };
};



export default function Comment({tour}) {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const[tourid,setTourid]=useState(0)

useEffect(()=>{
  setTourid(tour.id)
},[])



  const submitHandler = async (e: { preventdefault: () => void; }) => {
    // e.preventdefault();
if(!text){
    
} else{
 
    const data = {
      tourid,
      name,
      text,
    };
    console.log(data);
    await fetch("/api/comment", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
}

  //リセット
  const clickHandler = () => {
    setText("");
    setName("");
  };

  const changetextHandler = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setText(e.target.value);
  };

  const changenameHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <Layout>
        <h2>口コミ</h2>
        <form onSubmit={submitHandler}>
          <h2>ツアーの感想ご記入をお願いいたします。</h2>
          <label htmlFor="">
            ニックネーム
            <br />
            <input type="text" value={name} onChange={changenameHandler} />
          </label>
          <br />
          <label htmlFor="">
            コメント
            <br />
            <textarea
              cols="50"
              rows="10"
              value={text}
              onChange={changetextHandler}
            ></textarea>
          </label>
          <br />
          <button type="submit">送信</button>
          <button onClick={clickHandler}>リセット</button>
        </form>
      </Layout>
    </div>
  );
}
