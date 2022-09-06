import clsx from "clsx"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useAuthContext } from "../auth/AuthContext"
import styles from "./userProfile.module.css"

export function UserProfileEdit(){
  const [values, setValues] = useState({
    firstName:'',
    lastName:'',
    email:'',
    phoneNumber:'',
    location:'',
    picture:'',

  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email:'',
    phoneNumber: '',
    location: '',
    picture:'',
    serverError: '',
  });

  const {userId} = useParams()


  useEffect(() => {
    fetch('http://localhost:3005/users/' + userId,{
      headers:{
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(res => res.json())
    .then(data => setValues(data))
  },[userId])

  function handleInputChange(e) {
    setErrors({ ...errors, [e.target.name]: '' });
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [message, setMessage] = useState()

  const {accessToken} = useAuthContext();

  async function handleSubmit(e) {
    e.preventDefault()

    const validation = validateForm(values);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    const data = await fetch('http://localhost:3005/users/' + values.id,{
    method: 'PATCH',
    headers: {
      'Content-type':'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify(values),
  }).then(res => res.json())

  setMessage('You succesfully changed the details')
  }

  
  
  return(
    <>
      <h1>Edit</h1>

        <form className={styles["form-container"]} onSubmit={handleSubmit}>
        {message && (
          <p className="mt-1 text-green-800 bg-green-300 rounded w-96 m-auto p-3">
            {' '}
            {message}
          </p>
        )}
        
        <p className="mt-1">
              <label htmlFor="firstName">First Name</label>
              <input
                className={clsx('border rounded border-black ml-1', {
                  'border-red-800': errors.firstName,
                })}
                type="text"
                name="firstName"
                id="firstName"
                value={values.firstName || ""}
                onChange={handleInputChange}
              />
        </p>
        {errors.firstName && (
                <p className="mt-1 text-red-800">{errors.firstName}</p>
              )}
        <p className="mt-1">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={clsx('border rounded border-black ml-1', {
                  'border-red-800': errors.lastName,
                })}
                type="text"
                name="lastName"
                id="lastName"
                value={values.lastName || ""}
                onChange={handleInputChange}
              />
        </p>
        {errors.lastName && (
                <p className="mt-1 text-red-800">{errors.lastName}</p>
              )}
        <p className="mt-1">
              <label htmlFor="email">email</label>
              <input
                className={clsx('border rounded border-black ml-1', {
                  'border-red-800': errors.email,
                })}
                type="email"
                name="email"
                id="email"
                value={values.email || ""}
                onChange={handleInputChange}
              />
        </p>
        <p className="mt-1">
              <label htmlFor="phoneNumber">Phone number</label>
              <input
                className={clsx('border rounded border-black ml-1', {
                  'border-red-800': errors.phoneNumber,
                })}
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                value={values.phoneNumber || ""}
                onChange={handleInputChange}
              />
        </p>
        {errors.phoneNumber && (
                <p className="mt-1 text-red-800">{errors.phoneNumber}</p>
              )}
        <p className="mt-1">
              <label htmlFor="location">City</label>
              <input
                className={clsx('border rounded border-black ml-1', {
                  'border-red-800': errors.location,
                })}
                type="text"
                name="location"
                id="location"
                value={values.location || ""}
                onChange={handleInputChange}
              />
        </p>
        {errors.location && (
                <p className="mt-1 text-red-800">{errors.location}</p>
              )}

              <p className="mt-1">
                <label htmlFor="gender">Gender</label>
                <select 
                  className={clsx('border rounded border-black ml-1', {
                    'border-red-800': errors.gender,
                  })}
                  name="gender"
                  id="gender"
                  value={values.gender}
                  onChange={handleInputChange}>
                  <option >-Select-</option>
                  <option value = "male">Male</option>
                  <option value = "female">Female</option>
                </select>
              </p>
              {errors.gender && (
                <p className="mt-1 text-red-800">{errors.gender}</p>
              )}
              <p className="mt-1">
                <label htmlFor="picture">Profile picture</label>
                <input
                  className={clsx('border rounded border-black ml-1', {
                    'border-red-800': errors.picture,
                  })}
                  type="text"
                  name="picture"
                  id="picture"
                  value={values.picture}
                  onChange={handleInputChange}
                />
              </p>
              {errors.picture && (
                <p className="mt-1 text-red-800">{errors.picture}</p>
              )}     
        <p className="mt-1">
          <button className="rounded bg-teal-500 text-teal-900 px-2 py-1 cursor-pointer">
            Edit
          </button>
        </p>
        </form>
    </>
  )
}
function validateForm(values) {
    const validation = {
      errors: {
        email: '',
        password: '',
        retype_password: '',
        firstName: '',
        lastName: '',
        phoneNumber:'',
        location:'',
      },
      isValid: true,
    };
/* eslint-disable no-control-regex*/
const emailRegex =
/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

if (!values.email || !emailRegex.test(values.email)) {
validation.isValid = false;
validation.errors.email = 'Please enter a valid email address';
}

if (!values.firstName) {
  validation.isValid = false;
  validation.errors.firstName = 'Please enter your first name.';
}

if (!values.lastName) {
  validation.isValid = false;
  validation.errors.lastName = 'Please enter your last name.';
}

if (!values.phoneNumber) {
  validation.isValid = false;
  validation.errors.phoneNumber = 'Please enter your phone number.';
}

if (!values.location) {
  validation.isValid = false;
  validation.errors.location = 'Please enter your location.';
}

return validation;
}
