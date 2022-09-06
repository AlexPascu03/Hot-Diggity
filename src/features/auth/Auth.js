import clsx from 'clsx';
import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuthContext } from './AuthContext';

export function Auth() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    retype_password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    location: '',
    picture:'',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    retype_password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    location: '',
    picture:'',
    serverError: '',
  });
  const { login, accessToken } = useAuthContext();

  

  const { pathname } = useLocation();
  const isRegister = pathname === '/register';

  if (accessToken) {
    return <Navigate to="/" />;
  }

  function handleInputChange(e) {
    setErrors({ ...errors, [e.target.name]: '' });
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    
    const validation = validateForm(values, isRegister);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    let { retype_password, ...dataForServer } = values;
    
    let apiPath = 'register';
    if (!isRegister) {
      dataForServer = {
        email: values.email,
        password: values.password,
      };
      apiPath = 'login';
    }

    const data = await fetch(`http://localhost:3005/api/${apiPath}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(dataForServer),
    }).then((res) => res.json());

    
    if (!data.accessToken) {
      setErrors({ ...errors, serverError: data });
      return;
    }

    login(data);

  }

  return (
    <>

      <h1 className="w-full text-3xl font-bold text-center">
        {isRegister ? 'Register' : 'Login'}
      </h1>
      {errors.serverError && (
        <p className="mt-1 text-red-500 bg-red-300 rounded w-96 m-auto p-3">
          {' '}
          {errors.serverError}
        </p>
      )}

        <form onSubmit={handleSubmit}>
          <p className="mt-1">
            <label htmlFor="email">Email</label>
            <input
              className={clsx('border rounded border-black ml-1', {
                'border-red-500': errors.email,
              })}
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleInputChange}
            />
          </p>
          {errors.email && <p className="mt-1 text-red-500">{errors.email}</p>}
          <p className="mt-1">
            <label htmlFor="password">Password</label>
            <input
              className={clsx('border rounded border-black ml-1', {
                'border-red-500': errors.password,
              })}
              type="password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleInputChange}
            />
          </p>
          {errors.password && (
            <p className="mt-1 text-red-500">{errors.password}</p>
          )}

          {isRegister && (
            <>
              <p className="mt-1">
                <label htmlFor="retype_password">Retype password</label>
                <input
                  className={clsx('border rounded border-black ml-1', {
                    'border-red-500': errors.retype_password,
                  })}
                  type="password"
                  name="retype_password"
                  id="retype_password"
                  value={values.retype_password}
                  onChange={handleInputChange}
                />
              </p>
              {errors.retype_password && (
                <p className="mt-1 text-red-500">{errors.retype_password}</p>
              )}
              <p className="mt-1">
                <label htmlFor="firstName">First Name</label>
                <input
                  className={clsx('border rounded border-black ml-1', {
                    'border-red-500': errors.firstName,
                  })}
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={values.firstName}
                  onChange={handleInputChange}
                />
              </p>
              {errors.firstName && (
                <p className="mt-1 text-red-500">{errors.firstName}</p>
              )}
              <p className="mt-1">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className={clsx('border rounded border-black ml-1', {
                    'border-red-500': errors.lastName,
                  })}
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={values.lastName}
                  onChange={handleInputChange}
                />
              </p>
              {errors.lastName && (
                <p className="mt-1 text-red-500">{errors.lastName}</p>
              )}
              <p className="mt-1">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  className={clsx('border rounded border-black ml-1', {
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
              
              <p className="mt-1">
                <label htmlFor="location">City</label>
                <input
                  className={clsx('border rounded border-black ml-1', {
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
              
              <p className="mt-1">
                <label htmlFor="gender">Gender</label>
                <select 
                  className={clsx('border rounded border-black ml-1', {
                    'border-red-500': errors.gender,
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
                <p className="mt-1 text-red-500">{errors.gender}</p>
              )}
              <p className="mt-1">
                <label htmlFor="picture">Profile photo</label>
                <input
                  className={clsx('border rounded border-black ml-1', {
                    'border-red-500': errors.picture,
                  })}
                  type="text"
                  name="picture"
                  id="picture"
                  value={values.picture}
                  onChange={handleInputChange}
                />
              </p>
              {errors.picture && (
                <p className={"mt-1 text-red-500"}>{errors.picture}</p>
              )}
              

              
            </>
          )}
          <p className="mt-1">
            <button className={clsx("rounded bg-yellow-900 text-yellow-600 px-2 py-1 cursor-pointer")}>
              {isRegister ? 'Register' : 'Login'}
            </button>
          </p>
        </form>
    </>
  );
}

function validateForm(values, isRegister) {
  const validation = {
    errors: {
      email: '',
      password: '',
      retype_password: '',
      firstName: '',
      lastName: '',
      phoneNumber:'',
      location:'',
      picture:'',

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

  if (!values.password || values.password.length < 6) {
    validation.isValid = false;
    validation.errors.password =
      'Please enter a password that is at least 6 characters long.';
  }

  if (isRegister) {
    if (values.password !== values.retype_password) {
      validation.isValid = false;
      validation.errors.retype_password = 'The two passwords do not match.';
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

    if (!values.gender) {
      validation.isValid = false;
      validation.errors.gender = 'Please enter your gender.';
    }

    if (!values.picture) {
     values.picture = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    }
  }

  return validation;
}
