import { Avatar, Button, Icon } from "@material-ui/core";
import React from "react";
import Color from "../Config/Color";
import "./My.css";

export default function CartItem({ item }) {
  return (
    <div className="cartBox">
      <div className="cardDetail" style={{ padding: 0 }}>
        <div className="cardTitle">
          <div style={{ display: "flex", alignItems: "center", fontSize: 18 }}>
            <Avatar
              variant="square"
              src="https://images8.alphacoders.com/903/thumb-350-903178.jpg"
              style={{ margin: "0px 5px" }}
            />
            {item.title}
          </div>
          <div style={{ fontSize: 14, margin: "5px 5px", color: "grey" }}>
            {item.specification.join()}
          </div>
          <div
            style={{ margin: "0px 5px", color: Color.green, cursor: "pointer" }}
            onClick={() => console.log(alert("hello"))}
          >
            Remove
          </div>
        </div>
        <div style={{ alignSelf: "center" }}>
          <div style={{ textAlign: "center" }}>&#8377; {item.price}</div>
          <div
            style={{
              backgroundColor: "white",
              border: "2px solid #5E7E47",
              borderRadius: 20,
              margin: "10px 5px",
              display: "flex",
            }}
          >
            <div>
              <Button
                style={{
                  padding: 0,
                  margin: 0,
                  minWidth: 25,
                }}
                onClick={() => {
                  // if (itemQuantity == 1) {
                  //   closeModal();
                  //   return;
                  // }
                  // setItemQuantity(itemQuantity - 1);
                }}
              >
                <Icon>remove</Icon>
              </Button>
            </div>

            <div
              style={{
                backgroundColor: "#5E7E47",
                padding: "3px 10px",
                color: "white",
              }}
            >
              {item.quantity}
            </div>
            <div>
              <Button
                style={{
                  padding: 0,
                  margin: 0,
                  minWidth: 25,
                }}
                // style={{
                //   padding: "5px 10px",
                //   border: "2px solid black",
                //   margin: "15px 5px 0px 0px",
                //   borderRadius: 20,
                // }}
                // onClick={() => setItemQuantity(itemQuantity + 1)}
              >
                <Icon>add</Icon>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
