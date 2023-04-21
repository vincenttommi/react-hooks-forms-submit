import React, { useState } from "react";

function Form(props) {

const[firstName, setFirstName] = useState("vincent")

//uses useState hook from react to create  a state variable in form of array
//named firstname
// hook returns an array with two elements
//firstelement of the array is initialised with string"vincent"
//second element of array  setfirstName is 
// a function used to update the first element
const[lastName, setlastName] =useState("tommi");
const[submittedData, setSubmittedData] = useState([]);

// these code creates a state variable and initialises it with an empty array wherebyby the hook returns an array with two elements
//then provides a function setSubmitteddata  that can be used to update its value of submitted data
  // function handleSubmit(event){
  //    event.preventDefault();
  //    //prevents the page from reloading

  //    const formData={

  //     //defines a Constant variable formData and assigns it to objects where
  //     //lastname and firstnamw where our data is being captured and also putting
  //     //all together current formData into an object using stored values in state

  //       firstName: e.target[0].value,
  //       lastName: e.target[1].value,

     
  // };


  function handleFirstNameChange(event){
// its a  function handleLastNamechange 
// which expects  an event objects as its argument

     setFirstName(event.target.value);
     //uses  setFirstName function to update  state variable lastname
     //with event to targetted value in inout form
  }

  function handleLastNameChange(event){

   setlastName(event.target.value);


   //overalll this code  defines a function that updates
   // value of  state variable lastname using setLastNam function
   // purpose of this code is to update  value of lastName when uset inputs their last name into a form


  }


 function handleSubmit(event){

  event.preventDefault();
  const formData = {firstName: firstName, lastName: lastName};
  // defines Constant array formData where  it has objects firstname and lastname where 
  // it captures and stores data in state  variable
  const dataArray = [...submittedData, formData];

  //  dataarray conatains all that data that  has been submitted bythuser'
  // spread operator creates new array  with elements of existing 
   // arrays

   //overall this code creates a  new array data array that includes all the data submitted
  setSubmittedData(dataArray);
  setFirstName("");
  // empties the input value when then captured data is submitted
  setlastName(""); 

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
    
    <h3>Submissions</h3>
    {listofSubmissions}
  </div>
);
}


export default Form;
