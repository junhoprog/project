import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Order from "./Order";
import Delivery from "./delivery";
import "./App.css";
import { useState } from "react";

function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>NatureFruit</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/order");
              }}
            >
              주문하기
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

      <div className="Fruit_Img"></div>
      <Routes>
        <Route
          path={"/"}
          element={
            <>
              <button
                onClick={() => {
                  navigate("/delivery");
                }}
              >
                배송 조회
              </button>
            </>
          }
        />
        <Route path={"/delivery"} element={<Delivery />} />
        <Route path={"/order"} element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
