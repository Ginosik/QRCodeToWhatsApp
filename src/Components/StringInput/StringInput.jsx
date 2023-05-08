import React from "react";
import { useDispatch } from "react-redux";
import { setQrCodeLink } from "../../features/qrcodeSlice"
import "./StringInput.css";

const StringInput = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputElement = e.target.elements.stringinput;
    dispatch(setQrCodeLink(inputElement.value));
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="stringinput">Link:</label>
        <input type="text" name="stringinput" id="stringinput" />
        <button type="submit">Generate</button>
      </form>
    </>
  );
};

export default StringInput;
