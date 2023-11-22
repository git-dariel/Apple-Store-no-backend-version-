import React from "react";
import style from "../styles/Home/NavBar";

import appleLogo from "../assets/img/apple-white.png";

const NavBar = () => {
  return (
    <style.Container>
      <style.Wrapper>
        <style.Left>
          <style.Logo src={appleLogo} alt="apple logo" />
        </style.Left>
      </style.Wrapper>
    </style.Container>
  );
};

export default NavBar;
