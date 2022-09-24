import React from "react";
import EncFrm from "./components/text2img/EncFrm";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

const encrypt = () => {
    return (
        <>
            <Navbar current="encrypt" />
            
            <Cards />
        </>
    );
};

export default encrypt;
