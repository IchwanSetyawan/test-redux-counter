import React from "react";
import CardImage from "./CardImage";
import DetailCard from "./DetailCard";
import CounterCard from "./CounterCard";
import Button from "./Button";
import TitleCard from "./TitleCard";
import image1 from "../assets/image/baju1.png";
import image2 from "../assets/image/baju2.png";
import { useSelector } from "react-redux";

const Bodycard = () => {
  const counterChart = useSelector((value) => value.value);

  return (
    <>
      <div>
        <div className="row ">
          <div className="col-md-1" />
          <div className="col-md-7">
            <section id="list-card">
              <div className="list-card">
                <div className="card p-4 shadow bg-body rounded">
                  <div className="title mb-3">
                    <TitleCard name="Cart(2 Items)" />
                  </div>
                  <div className="body-card ">
                    <div className="row my-3">
                      <CardImage name={image1} />
                      <DetailCard />
                      <CounterCard />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="col-md-3 ">
            <section id="price">
              <div className="price">
                <div className="card p-4 shadow bg-body rounded">
                  <div className="heading-total pb-3">
                    <h5>The total ammount of</h5>
                  </div>
                  <div className=" row ">
                    <div className=" col body-total-atas-kiri">
                      <p>temporary ammount</p>
                      <p>Shooping</p>
                    </div>
                    <div className="col-4 body-total-atas-kanan ">
                      <p>${counterChart * 17}</p>
                      <p>Gratis</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row body-total-bawah-bawah my-3">
                    <div className=" col body-total-bawah-kiri">
                      <h6>The total ammount of</h6>
                      <h6>(including VAT)</h6>
                    </div>
                    <div className=" col-4 body-total-bawah-kanan">
                      <h6>${counterChart * 17}</h6>
                    </div>
                  </div>
                  <Button name="GO TO CHECKOUT" />
                </div>
              </div>
              <div className="card p-4 shadow bg-body rounded mt-4 dropdown">
                <p
                  className="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Add a Discount code (optional){" "}
                </p>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Discount 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Discount 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Discount 3
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <div className="col-md-1" />
      </div>
    </>
  );
};

export default Bodycard;
