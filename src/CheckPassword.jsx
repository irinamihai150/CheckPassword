import React, { useState } from "react";
import validator from 'validator';


function CheckPassword() {


const [errorMessage, setErrorMessage] = useState('');


const validate= (value)=> {
  if(validator.isStrongPassword(value, {
    minLength:8,
    minLowercase:1,
    minUppercase:1,
    minNumbers:1,
    minSymbols:1,
  })) {
    setErrorMessage('Is strong password')
  }else {
    setErrorMessage("Is not strong password")
  }
}
{
  return (
    <div>
      	<div style={{textAlign:"center", color:"green", margin:"3em"}}>
			<pre>
				<h1>Checking password check</h1>
				<span> Enter password:</span>
				<input
					type="text"
					onChange={(e) => {
						validate(e.target.value);
					}}
				/>
				{errorMessage === "" ? null : (
					<span
						style={{
							fontWeight: "bold",
							color: "red",
						}}
					>
						{errorMessage}
					</span>
				)}
			</pre>
		</div>
    </div>
  )
}}

export default CheckPassword
