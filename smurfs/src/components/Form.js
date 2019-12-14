import { withFormik, Form, Field } from "formik";
import React from "react";
import styled from "styled-components";

const CardStyle = styled.div `   

width: 44%;  
background: white;
color: black;
margin-left: 27%;
margin-top: 4%;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
transition: transform 0.2s ease-in;
 border: 5px solid black;
&:hover {
  transform: translate(-5px) scale(1.05);
}

`;

function postSmurfForm() {
  return (
      <CardStyle>
    <Form className="form">
      <div />
      <div>
        <label>Name: </label>
        <Field name="name" type="text" placeHolder="Name" />
      </div>
      <div>
        <label>Age: </label>
        <Field name="age" type="text" placeHolder="Age" />
      </div>
      <div>
        <label>Height: </label>
        <Field name="height" type="text" placeHolder="Height" />
      </div>
      <button className="button" type="submit">Send new smurf to the village</button>
    </Form>
    </CardStyle>
  );
}

const FormikForm = withFormik({
  mapPropsToValues({ name, age, height }) {
    return {
      name: name || "",
      age: age || "",
      height: height || ""
    };
  },
  handleSubmit(values, { resetForm, props }) {
    console.log("props on handleSubmit");
    console.log(props);
    props.postSmurf(values);
    resetForm();
  }
})(postSmurfForm);

export default FormikForm;