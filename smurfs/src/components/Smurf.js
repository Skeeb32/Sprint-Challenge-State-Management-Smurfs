import React from "react";
import { connect } from "react-redux";
import { getSmurfs, postSmurf } from "../actions/actions";
import FormikForm from "../components/Form";
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
 border: 5px solid rgb(38, 155, 233);
&:hover {
  transform: translate(-5px) scale(1.05);
}

`;

function Smurf(props) {
  const getSmurfs = () => {
    props.getSmurfs();
  };

  return (
    <div className="App">
      <button
        onClick={() => {
          getSmurfs();
        }}
      >
        Click Me to retrive the Smurfs
      </button>
      <CardStyle>
      {props.smurfs ? (
        props.smurfs.map(smurf => (
          <>
            <h3>Name: {smurf.name}</h3>
            <h3>Age: {smurf.age}</h3>
            <h3>Height: {smurf.height}</h3>
          </>
        ))
      ) : (
        <h1> Loading, please wait</h1>
      )}</CardStyle>
      <FormikForm postSmurf={props.postSmurf} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { getSmurfs, postSmurf })(Smurf);