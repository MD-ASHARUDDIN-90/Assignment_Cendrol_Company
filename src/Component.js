import React, { useState } from 'react';
import Style from './Component.module.css';

export default function Component({ cendol }) {
  var a = true;

  const [data, setData] = useState(cendol);
  const [btn, setBtn] = useState(a);
  const [color, setColor] = useState('rgba(46,223,192,255)');
  const [bgColor, setBgColor] = useState('rgba(252, 194, 0, 255);');

  function handleCounter() {
    setData(+data + 10);
  }

  function handleColor() {
    setBgColor('rgba(46,223,192,255)')
    setData(+data + 10);
    if (btn == true) {
      setColor('red');
      setBtn(false);
    } else {
      setColor('blue');
      setBtn(true);
    }
  }

  return (
    <div className={Style.wrapper}>
      <div className={Style.main}>
        <div className={Style.content} style={data === "02" ?{backgroundColor : "yellow" }: {backgroundColor : bgColor}}>
          <h1>{data}</h1>
          <p onClick={handleCounter}>Click to increase counter</p>
        </div>
      </div>
      <button
        style={{ backgroundColor: color }}
        className={Style.btn}
        onClick={handleColor}
      >
        Change Color And Increase Counter
      </button>
    </div>
  );
}
