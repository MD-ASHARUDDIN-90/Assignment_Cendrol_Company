import React,{useState} from "react";
import Component from "./Component"
import "./style.css";

export default function App() {
 let cendol = "02"
  return (
    <div>
     <Component cendol={cendol} />
    </div>
  );
}
