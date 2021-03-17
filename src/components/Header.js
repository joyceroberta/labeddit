import React from "react";
import { useHistory } from "react-router-dom";
import { HeaderH1, HeaderP } from "../styled/styled";




function Header(){
const history = useHistory()





return (
  <>
    <HeaderH1>LabEddit</HeaderH1>
    <HeaderP>A sua melhor rede social!</HeaderP>

    
  </>
);
}
export default Header;