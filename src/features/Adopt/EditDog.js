import clsx from "clsx"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useAuthContext } from "../auth/AuthContext"
import { validateForm } from "../GiveUp/GiveUp"
import  styles  from "./DogDetails.module.css";


export function EditDog(){
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
  });
  const {dogId} = useParams()

  useEffect(() => {
    fetch('http://localhost:3005/dogs/' + dogId)
    .then(res => res.json())
    .then(data => setValues(data))
  }, [dogId])

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

    await fetch('http://localhost:3005/dogs/' + values.id,{
    method: 'PATCH',
    headers: {
      'Content-type':'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify(values),
    }).then(res => res.json())
  
    setMessage('You succesfully changed the details!');
    
    
    
  }

  
  
  
  return(
    <>
      <h1 className={styles["headers"]}>Edit</h1>

        <form onSubmit={handleSubmit}>
        {message && (
          <p className="mt-1 text-green-800 bg-green-300 rounded w-96 m-auto p-3">
            {' '}
            {message}
          </p>
        )}
        <p className="mt-1">
            <label htmlFor="name">Name</label>
              <input
                className={clsx('border rounded border-black ml-1', {
                  'border-red-800': errors.name,
                })}
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={handleInputChange}
              />
        </p>

        <p className="mt-1">
              <label htmlFor="photo">Photo</label>
              <input
                className={clsx('border rounded border-black ml-1', {
                  'border-red-800': errors.photo,
                })}
                type="text"
                name="photo"
                id="photo"
                value={values.photo}
                onChange={handleInputChange}
              />
            </p>
            {errors.photo && (
                <p className="mt-1 text-red-800">{errors.photo}</p>
              )}

        <p className="mt-1">
            <label htmlFor="breed">Breed</label>
              <input
                className={clsx('border rounded border-black ml-1', {
                  'border-red-800': errors.breed,
                })}
                type="text"
                name="breed"
                id="breed"
                value={values.breed}
                onChange={handleInputChange}
              />
        </p>

        <p className="mt-1">
              <label htmlFor="height">Height (in cm)</label>
                <input
                  className={clsx('border rounded border-black ml-1', {
                    'border-red-800': errors.height,
                  })}
                  type="number"
                  name="height"
                  id="height"
                  value={values.height}
                  onChange={handleInputChange}
                />
          </p>
              {errors.height && (
                <p className="mt-1 text-red-800">{errors.height}</p>
              )}
              
              <p className="mt-1">
                <label htmlFor="weight">Weight (in kg)</label>
                <input
                  className={clsx('border rounded border-black ml-1', {
                    'border-red-800': errors.weight,
                  })}
                  type="number"
                  name="weight"
                  id="weight"
                  value={values.weight}
                  onChange={handleInputChange}
                />
              </p>
              {errors.weight && (
                <p className="mt-1 text-red-800">{errors.weight}</p>
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
                  <option value = "Male">Male</option>
                  <option value = "Female">Female</option>
                  <option value = "Unknown">Unknown</option>

                </select>
              </p>
              {errors.gender && (
                <p className="mt-1 text-red-800">{errors.gender}</p>
              )}
              
              <p className="mt-1">
                <label htmlFor="age">Age</label>
                <select 
                  className={clsx('border rounded border-black ml-1', {
                    'border-red-800': errors.age,
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
                <p className="mt-1 text-red-800">{errors.age}</p>
              )}

              <p className="mt-1">
                <label htmlFor="microchip">Microchiped</label>
                <select 
                  className={clsx('border rounded border-black ml-1', {
                    'border-red-800': errors.microchip,
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
                <p className="mt-1 text-red-800">{errors.microchip}</p>
              )}

              <p className="mt-1">
                <label htmlFor="vaccinated">Vaccinated</label>
                <select 
                  className={clsx('border rounded border-black ml-1', {
                    'border-red-800': errors.vaccinated,
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
                <p className="mt-1 text-red-800">{errors.vaccinated}</p>
              )}

              <p className="mt-1">
                <label htmlFor="sterilized">Sterilized</label>
                <select 
                  className={clsx('border rounded border-black ml-1', {
                    'border-red-800': errors.sterilized,
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
                <p className="mt-1 text-red-800">{errors.sterilized}</p>
              )}

              <p className="mt-1">
                <label htmlFor="description">Description</label>
                <textarea onChange={handleInputChange} name="description" id="description" cols="30" rows="10" value={values.description || ""}></textarea>
              </p>
              {errors.description && (
                <p className="mt-1 text-red-800">{errors.description}</p>
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
