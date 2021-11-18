import React, { useState } from "react";
import ReactDom from "react-dom";
import { ModalBackdrop, ModalButton, ModalContent, ModalIcons, ModalPrice, ModalTitle, ModalClose } from "./ModalElements";
import { VscChromeClose } from "react-icons/vsc";
import {TiTick} from 'react-icons/ti'

import counties from "../../counties";
import Input from "../Input";

const Modal = ({ show, children, total, closeModal, toggle, clear }) => {


  const [stage, setStage] = useState(1);

  // const [getCounty, setCounty] = useState();
  const [getTownList, setTownList] = useState([]);
  // const [getTown, setTown] = useState([]);

  const changeCounty = (event) => {
    const count = counties.find(
      (cntry) => cntry.name === event.target.value
    ).subs;

    // console.log(count[0].cities);
    // setCounty(event.target.value);
    setTownList(count);
    // setCounty(count);
  };

  // const changeTown = (e) => {
  //   setTown(e.target.value);
  // };


  const resetStage = () => {
    setStage(1);
  }


  const endModal = () => {
    closeModal();
    resetStage();
    toggle();
    clear();

  }


  const nextStage = () => {
    setStage(2);
  }

  const completePayment = () => {
    setStage(3);
  }



  if (!show) return null;

  if(stage === 1){
    return ReactDom.createPortal(
      <>
        <ModalBackdrop />
        
        <ModalContent>

          <ModalClose onClick={endModal}>
            <VscChromeClose />
          </ModalClose>
          

          <ModalTitle>Enter Your Address</ModalTitle>
          

          <Input elType="text" title="Address" name='Address' />

          <Input
            title="County"
            elType="Dropdown"
            placeholder="County"
            type="text"
            list={counties}
            onInput={changeCounty}
          />

          <Input
            title="Town"
            elType="Dropdown"
            placeholder="Town"
            type="text"
            list={getTownList}
            // onInput={changeTown}
          />

          <Input elType="text" title="Eircode" />

          <ModalButton onClick={nextStage}>
              Next
          </ModalButton>
        </ModalContent>
      </>

      ,
      document.getElementById("portal")
    )
  }

  if(stage === 2){
    return ReactDom.createPortal(
      <>
        <ModalBackdrop />
        <ModalContent>
          <ModalClose onClick={endModal}>
            <VscChromeClose />
          </ModalClose>
          <ModalTitle>Enter Payment Options</ModalTitle>

          <Input elType="text" title="Full Name" name='FullName'/>

          <Input elType="text" title="Card Details" name='CardDetails' />

          <Input elType="text" title="CV2 Number" name='CV2' />

          <ModalPrice>
            € {total}
          </ModalPrice>

          <ModalButton onClick={completePayment}>
              Pay
          </ModalButton>
        </ModalContent>
      </>
      ,
      document.getElementById("portal")
    );
  }
  if(stage === 3){
    return ReactDom.createPortal(
      <>
        <ModalBackdrop />
        <ModalContent>
          <ModalClose onClick={endModal}>
            <VscChromeClose />
          </ModalClose>
          <ModalTitle>Thank you for your order</ModalTitle>


          <ModalIcons>
            <TiTick></TiTick>
          </ModalIcons>
          

          

          <ModalButton onClick={endModal}>
              Close
          </ModalButton>
        </ModalContent>
      </>
      ,
      document.getElementById("portal")
    );
  }

  
};

export default Modal;
