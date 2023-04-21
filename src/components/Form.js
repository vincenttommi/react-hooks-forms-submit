import React, { useState } from "react";

function Form(props) {

const[firstName, setFirstName] = useState("vincent")

//uses useState hook from react to create  a state variable in form of array
//named firstname
// hook returns an array with two elements
//firstelement of the array is initialised with string"vincent"
//second element of array  setfirstName is 
// a function used to update the first element
const[lastName, setLastName] =useState("tommi");
const[submittedData, setSubmittedData] = useState([]);
  function handleFirstNameChange(event){
// its a  function handleLastNamechange 
// which expects  an event objects as its argument

     setFirstName(event.target.value);
     //uses  setFirstName function to update  state variable lastname
     //with event to targetted value in inour form
  }

  function handleLastNameChange(event){

   setLastName(event.target.value);


   //overalll this code  defines a function that updates
   // value of  state variable lastname using setLastNam function
   // purpose of this code is to update  value of lastName when uset inputs their last name into a form


  }




const [errors, setErrors] = useState([]);
  //adding state for holding error messages
 function handleSubmit(event){

  event.preventDefault();

  ///validating inputs fields

  if(firstName.length > 0){
  const formData = {firstName: firstName, lastName: lastName};
  // defines Constant array formData where  it has objects firstname and lastname where 
  // it captures and stores data in state  variable
  const dataArray = [...submittedData, formData];

  //  dataarray conatains all that data that  has been submitted bythuser'
  // spread operator creates new array  with elements of existing 
   // arrays

   //overall this code creates a  new array data array that includes all the data submitted
  setSubmittedData(dataArray);
  // setSubmiiteddata is  afunction that sets the value of a state 
  // variable named submittedData to Dataarray
  setFirstName("");
  // empties the input value when then captured data is submitted
  setLastName(""); 
  setErrors([]);
  }else{


  setErrors(['First name is required!']);

  }

 }



const  listofSubmissions = submittedData.map((data, index)=>{


  //creates a  new array called listofsubmissions by using map
  // function
  //map function  creates  a new array by calling  a provided 
  // function   by using parameters  passed in the function that is  data and index

return(
// when returned the   function accesses  submittedData  via map method and 
// creates a new div of lastname and firstname of  elements in submitted data


  <div key={index}>

  {data.firstName}{data.lastName}

  </div>
);

}); 




return(
  <div>

    <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleFirstNameChange} value={firstName} />
    <input type="text" onChange={handleLastNameChange} value={lastName} />
    <button type="submit">Submit</button>
    </form>


    {/* condittionally render error messages */}
    {errors.length > 0
    
      ? errors.map((error, index) => (
        <p key={index} style={{color: "red"}}>
          {error}
        </p>
      ))
    : null}

    
    <h3>Submissions</h3>
    {listofSubmissions}
  </div>
);
}


export default Form;
