import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from "./Firebase";
import { Row, Col, Container, Form, option } from "react-bootstrap";
import { collection } from "firebase/firestore";

const list = db.collection("Orderlist");
let Orders = [""];
let priceF;

function AddOrderData(Orders, priceF) {
  list.doc("20230201").set({
    date: "2023년2월1일",
    product: Orders[2],
    weight: Orders[3],
    quality: "특",
    price: priceF,
  });
  console.log("주문완료");
}

function Order() {
  let [check, setcheck] = useState([false, true, false, false]);
  let [modal, setModal] = useState(false);
  let Fruit = ["아오리(사과)", "부사(사과)", "복숭아", "자두"];
  let [Sel, setSel] = useState("");
  let img = [
    "./아오리사과.jpeg",
    "./부사사과.jpeg",
    "./복숭아.jpeg",
    "./자두.jpeg",
  ];

  return (
    <>
      <Container>
        <Row>
          {img.map(function (a, i) {
            return (
              <Col key={i}>
                <img src={a} />
                {check[i] == true ? (
                  <div
                    onClick={() => {
                      setSel(Fruit[i]);
                      setModal(true);
                    }}
                    style={{ color: "red" }}
                  >
                    {Fruit[i]}
                  </div>
                ) : (
                  <div>{Fruit[i]}</div>
                )}
              </Col>
            );
          })}
        </Row>
      </Container>

      {modal == true ? <Modal product={Sel} /> : <div></div>}
    </>
  );
}

function Modal(props) {
  const Fruitprice = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const weight = ["5kg", "10kg", "20kg"];
  const quality = ["중", "상", "특"];
  const [Selected, setSelected] = useState(0);
  const [Selected2, setSelected2] = useState(0);
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  const handleSelect2 = (e) => {
    setSelected2(e.target.value);
  };

  return (
    <div>
      <div>{props.product}</div>
      <select onChange={handleSelect} value={Selected}>
        <option value="0">{weight[0]}</option>
        <option value="1">{weight[1]}</option>
        <option value="2">{weight[2]}</option>
      </select>
      <select onChange={handleSelect2} value={Selected2}>
        <option value="0">{quality[0]}</option>
        <option value="1">{quality[1]}</option>
        <option value="2">{quality[2]}</option>
      </select>
      <div>{Fruitprice[Selected][Selected2]}</div>
      <button
        onClick={() => {
          Orders.push(quality[Selected2]);
          Orders.push(props.product);
          Orders.push(weight[Selected]);
          Orders.push(quality[Selected2]);
          priceF = Fruitprice[Selected][Selected2];
          AddOrderData(Orders, priceF);
        }}
      >
        주문
      </button>
    </div>
  );
}
export default Order;
/*function loadsellData() {
  let DBdata = {};
  //DB 내에서 orderId가 제목인 문서 찾기
  // result 변수에 할당
  list
    .doc("product")
    .get()
    .then((doc) => {
     DBdata=doc.data();
    });
} */
