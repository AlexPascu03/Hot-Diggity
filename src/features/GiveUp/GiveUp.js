import clsx from "clsx"
import { useState } from "react"
import { useAuthContext } from "../auth/AuthContext"
import styles from "./giveup.module.css"


export function GiveUp(){
  const [values, setValues] = useState({
    name: '',
      breed: '',
      gender: '',
      age: '',
      sterilized: '',
      microchip:'',
      height:'',
      weight:'',
      description:'',
      photo:'',
      email:'',
      phoneNumber:'',
      location:'',
      firstName:','
  });
  const [errors, setErrors] = useState({
    name: '',
      breed: '',
      gender: '',
      age: '',
      sterilized: '',
      microchip:'',
      height:'',
      weight:'',
      description:'',
      photo:'',
      email:'',
      phoneNumber:'',
      location:'',
      firstName:','

  });

  

  function handleInputChange(e) {
    setErrors({ ...errors, [e.target.name]: '' });
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [message, setMessage] = useState()

  const {accessToken , user} = useAuthContext();

  

  async function handleSubmit(e) {
    e.preventDefault()

    const validation = validateForm(values);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    

      
    

    await fetch('http://localhost:3005/dogs',
    {
    method: 'POST',
    headers: {
      'Content-type':'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
      body: JSON.stringify({...values, userId: user.id}),
    }).then(res => res.json())

  setMessage('You succesfully listed the dog! If you ever change your mind you can anytime delete the post from your profile page.')
  }


  
  return(
    <>
    {user && (
      <div className={styles["main-container"]}>
        <form onSubmit={handleSubmit}>
        <h1>Give Up</h1>
        {message && (
          <p className="mt-1 text-green-500 bg-green-300 rounded w-96 m-auto p-3">
            {' '}
            {message}
          </p>
        )}
        <div className={styles["whole-container"]}>
        <div className={styles["dog-info"]}>
        <h3>Dog's informations</h3>
          <p className={styles["container-inputs"]}>
                <label htmlFor="name">Name(if unknown please leave empty!)</label>
                <input
                  className={clsx("border rounded border-black ml-1", {
                    'border-red-500': errors.name,
                  })}
                  type="text"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleInputChange}
                />
           </p>
                
           <p className={styles["container-inputs"]}>
                <label htmlFor="photo">Photo</label>
                <input
                  className={clsx("border rounded border-black ml-1", {
                    "border-red-500": errors.photo,
                  })}
                  type="text"
                  name="photo"
                  id="photo"
                  value={values.photo}
                  onChange={handleInputChange}
                />
          </p>
              {errors.photo && (
                  <p className="mt-1 text-red-500">{errors.photo}</p>
                )}

                <p className={styles["container-inputs"]}>
                  <label htmlFor="breed">Breed(if unknown please leave empty!)</label>
                  <input
                    className={clsx("border rounded border-black ml-1", {
                      'border-red-500': errors.breed,
                    })}
                    type="text"
                    name="breed"
                    id="breed"
                    value={values.breed}
                    onChange={handleInputChange}
                  />
                </p>
                {errors.breed && (
                  <p className="mt-1 text-red-500">{errors.breed}</p>
                )}

                <p className={styles["container-inputs"]}>
                  <label htmlFor="height">Height (in cm)</label>
                  <input
                    className={clsx("border rounded border-black ml-1", {
                      'border-red-500': errors.height,
                    })}
                    type="number"
                    min="1"
                    name="height"
                    id="height"
                    value={values.height}
                    onChange={handleInputChange}
                  />
                </p>
                {errors.height && (
                  <p className="mt-1 text-red-500">{errors.height}</p>
                )}
                
                <p className={styles["container-inputs"]}>
                  <label htmlFor="weight">Weight (in kg)</label>
                  <input
                    className={clsx("border rounded border-black ml-1", {
                      'border-red-500': errors.weight,
                    })}
                    type="number"
                    name="weight"
                    min="1"
                    id="weight"
                    value={values.weight}
                    onChange={handleInputChange}
                  />
                </p>
                {errors.weight && (
                  <p className="mt-1 text-red-500">{errors.weight}</p>
                )}
                
                <p className={styles["container-inputs"]}>
                  <label htmlFor="gender">Gender</label>
                  <select 
                    className={clsx("border rounded border-black ml-1", {
                      'border-red-500': errors.gender,
                    })}
                    name="gender"
                    id="gender"
                    value={values.gender}
                    onChange={handleInputChange}>
                    <option >-Select-</option>
                    <option value = "Male">Male</option>
                    <option value = "Female">Female</option>
                    <option value = "Unknown">Unknown</option>

                  </select>
                </p>
                {errors.gender && (
                  <p className="mt-1 text-red-500">{errors.gender}</p>
                )}
                
                <p className={styles["container-inputs"]}>
                  <label htmlFor="age">Age</label>
                  <select 
                    className={clsx("border rounded border-black ml-1", {
                      'border-red-500': errors.age,
                    })}
                    name="age"
                    id="age"
                    value={values.age}
                    onChange={handleInputChange}>
                    <option >-Select-</option>
                    <option value = "Unknown">Unknown</option>
                    <option value = "0-1">0-1</option>
                    <option value = "1">1</option>
                    <option value = "2">2</option>
                    <option value = "3">3</option>
                    <option value = "4">4</option>
                    <option value = "5">5</option>
                    <option value = "6">6</option>
                    <option value = "7">7</option>
                    <option value = "8">8</option>
                    <option value = "9">9</option>
                    <option value = "10+">10+</option>
                  </select>
                </p>
                {errors.age && (
                  <p className="mt-1 text-red-500">{errors.age}</p>
                )}

                <p className={styles["container-inputs"]}>
                  <label htmlFor="microchip">Microchiped</label>
                  <select 
                    className={clsx("border rounded border-black ml-1", {
                      'border-red-500': errors.microchip,
                    })}
                    name="microchip"
                    id="microchip"
                    value={values.microchip}
                    onChange={handleInputChange}>
                    <option >-Select-</option>
                    <option value = "Yes">Yes</option>
                    <option value = "No">No</option>
                    <option value = "Unknown">Unknown</option>

                  </select>
                </p>
                {errors.microchip && (
                  <p className="mt-1 text-red-500">{errors.microchip}</p>
                )}

                <p className={styles["container-inputs"]}>
                  <label htmlFor="vaccinated">Vaccinated</label>
                  <select 
                    className={clsx("border rounded border-black ml-1", {
                      'border-red-500': errors.vaccinated,
                    })}
                    name="vaccinated"
                    id="vaccinated"
                    value={values.vaccinated}
                    onChange={handleInputChange}>
                    <option >-Select-</option>
                    <option value = "Yes">Yes</option>
                    <option value = "No">No</option>
                    <option value = "Unknown">Unknown</option>

                  </select>
                </p>
                {errors.vaccinated && (
                  <p className="mt-1 text-red-500">{errors.vaccinated}</p>
                )}

                <p className={styles["container-inputs"]}>
                  <label htmlFor="sterilized">Sterilized</label>
                  <select 
                    className={clsx("border rounded border-black ml-1", {
                      'border-red-500': errors.sterilized,
                    })}
                    name="sterilized"
                    id="sterilized"
                    value={values.sterilized}
                    onChange={handleInputChange}>
                    <option >-Select-</option>
                    <option value = "Yes">Yes</option>
                    <option value = "No">No</option>
                    <option value = "Unknown">Unknown</option>

                  </select>
                </p>
                {errors.sterilized && (
                  <p className="mt-1 text-red-500">{errors.sterilized}</p>
                )}

                <p className={styles["container-inputs"]}>
                  <label htmlFor="description">Description</label>
                  <textarea onChange={handleInputChange} name="description" id="description" cols="30" rows="10" value={values.description}></textarea>
                </p>
                {errors.description && (
                  <p className="mt-1 text-red-500">{errors.description}</p>
                )}
               </div>
                <div className={styles["contact-info"]}>
                <h1>Contact form</h1>


                <p className={styles["container-inputs"]}>
                <label htmlFor="location">City</label>
                <input
                  className={clsx("border rounded border-black ml-1", {
                    'border-red-500': errors.location,
                  })}
                  type="text"
                  name="location"
                  id="location"
                  value={values.location}
                  onChange={handleInputChange}
                />
              </p>
              {errors.location && (
                <p className="mt-1 text-red-500">{errors.location}</p>
              )}
              <p className={styles["container-inputs"]}>
                <label htmlFor="phoneNumber">Phone number</label>
                <input
                  className={clsx("border rounded border-black ml-1", {
                    'border-red-500': errors.phoneNumber,
                  })}
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={values.phoneNumber}
                  onChange={handleInputChange}
                />
              </p>
              {errors.phoneNumber && (
                <p className="mt-1 text-red-500">{errors.phoneNumber}</p>
              )}
              <p className={styles["container-inputs"]}>
                <label htmlFor="email">email</label>
                <input
                  className={clsx("border rounded border-black ml-1", {
                    'border-red-500': errors.email,
                  })}
                  type="text"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleInputChange}
                />
              </p>
              {errors.email && (
                <p className="mt-1 text-red-500">{errors.email}</p>
              )}

              <p className={styles["container-inputs"]}>
                <label htmlFor="userName">First name</label>
                <input
                  className={clsx("border rounded border-black ml-1", {
                    'border-red-500': errors.userName,
                  })}
                  type="text"
                  name="userName"
                  id="userName"
                  value={values.userName || ""}
                  onChange={handleInputChange}
                />
              </p>
              {errors.userName && (
                <p className="mt-1 text-red-500">{errors.userName}</p>
              )}
              </div>

              

              </div>
              <p className="mt-1">
                <button className="rounded bg-teal-500 text-teal-900 px-2 py-1 cursor-pointer">
                Give Up
                </button>
              </p>
          </form>
      </div>
      )
    }
    {!user && (
      <h1>Please sign in to get this function</h1>
    )}
    </>
  )

}
export function validateForm(values) {
  const validation = {
    errors: {
      name: '',
      breed: '',
      gender: '',
      age: '',
      sterilized: '',
      microchip:'',
      height:'',
      weight:'',
      description:'',
      photo:'',
      email:'',
      phoneNumber:'',
      location:'',
      userName:'',






    },
    isValid: true,
  };


if (!values.name) {
values.name = "Unknown";
}

if (!values.breed) {
values.breed = "Unknown"
}

if (!values.gender) {
validation.isValid = false;
validation.errors.gender = 'Please select age.';
}

if (!values.weight) {
validation.isValid = false;
validation.errors.weight = 'Please enter weight in kg.';
}

if (!values.height) {
  validation.isValid = false;
  validation.errors.height = 'Please enter height in centimeters.';
}

if (!values.age) {
  validation.isValid = false;
  validation.errors.age = 'Please select age.';
}

if (!values.microchip) {
  validation.isValid = false;
  validation.errors.microchip = 'Please select wether the dog is microchiped or not.';
}

if (!values.sterilized) {
  validation.isValid = false;
  validation.errors.sterilized = 'Please select wether the dog is sterilized or not.';
}

if (!values.vaccinated) {
  validation.isValid = false;
  validation.errors.vaccinated = 'Please select wether the dog is sterilized or not.';
}

if (!values.description) {
  validation.isValid = false;
  validation.errors.description = 'Please write a brief description of the dog.';
}

if (!values.photo) {
  validation.isValid = false;
  validation.errors.photo = 'Please submit a photo.';
}

if (!values.phoneNumber) {
  validation.isValid = false;
  validation.errors.phoneNumber = 'Please enter your phone number.';
}

if (!values.location) {
  validation.isValid = false;
  validation.errors.location = 'Please enter the location of the dog.';
}

if (!values.email) {
  validation.isValid = false;
  validation.errors.email = 'Please enter your email .';
}

if (!values.userName) {
  validation.isValid = false;
  validation.errors.userName = 'Please enter your first name.';
}

return validation;
}
