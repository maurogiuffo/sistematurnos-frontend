import React from "react";
import Layout from "../components/layout/Layout";
//import styled from "@emotion/styled";

// 
// 


// Con las arrow functions si ponemos parentesis en lugar de llaves el retorno es implicito
// porlo tanto no ponemos 'return'
const Register = () => (
  <div>
   <Layout>
      {/* Todo lo que se ponga aca será el contenido dinamico querecibira como 
      props el Layout */}
      <h1> Registro </h1>
   </Layout>
  </div>
);

export default Register;
