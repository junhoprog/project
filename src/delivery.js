import { useState } from "react";
import { db } from "./Firebase";
import { collection } from "firebase/firestore";

const list = db.collection("Orderlist");

export default function Delivery() {
  let [modal, setModal] = useState(false);
  let [orderData, setOrderData] = useState({});
  let [orderId, setOrderId] = useState("");

  function loadOrderData(orderId) {
    let DBdata = {};
    //DB 내에서 orderId가 제목인 문서 찾기
    // result 변수에 할당
    list
      .doc(orderId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          DBdata = doc.data();
          DBdata != null ? setModal(true) : null;
          setOrderData(DBdata);
          return DBdata;
        } else {
          return null;
        }
      });
  }

  return (
    <>
      <input
        onChange={(e) => {
          setOrderId(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          console.log("안녕하세요");
          loadOrderData(orderId);

          // setState(orderData);
          //비교해서 맞으면
          //data를 db랑 비교
        }}
      >
        확인
      </button>
      {modal == true ? (
        <Modal
          date={orderData["date"]}
          product={orderData["product"]}
          weight={orderData["weight"]}
          quality={orderData["quality"]}
        />
      ) : null}
    </>
  );
}

function Modal(props) {
  return (
    <div>
      <p>날짜:{props.date}</p>
      <p>상품명:{props.product}</p>
      <p>무게:{props.weight}</p>
      <p>상태:{props.quality}</p>
    </div>
  );
}
