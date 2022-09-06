/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../auth/AuthContext";
import { DogCard } from "../Adopt/DogCard";
import styles from "../User/userProfile.module.css";

export function UserProfile(){
  let { userId } = useParams();
  const [ user, setUser] = useState()

  


  const {accessToken, logout} = useAuthContext()
  const navigate = useNavigate();

  async function handleDeleteAccount(){
    const res = window.confirm('Do you really want to  delete this post?')
    if(!res) {
      return
    }
  
   await fetch('http://localhost:3005/users/' + userId, {
      method: 'DELETE',
      headers: {
        'Authorization' : `Bearer ${accessToken}`,
      }
    })

    logout()
    navigate("/home")
  }
  const [dogs, setDogs] =useState(null)
  
  useEffect(() => {
    fetch(`http://localhost:3005/api/dogs`).then((res) =>res.json()).then(data => setDogs(data))  
    }, [])  

  useEffect(() => {
      fetch('http://localhost:3005/users/' + userId, {
        headers: {
          'Authorization' : `Bearer ${accessToken}`,
        }
      })
      .then ((res) =>res.json())
      .then ((data) => setUser(data))
    },[accessToken, userId])
    if (!user) {
      return <strong>loading...</strong>
    }
      return(
      <><div className={styles["main-container"]}>
          <img src={user.picture} alt="{user.picture}" />
          <p>First name: {user.firstName}</p>
          <p>Last name: {user.lastName}</p>
          <p>Email: {user.email}</p>
          <p>User ID: {user.id}</p>
          <p>Phone number: {user.phoneNumber}</p>
          <p>City: {user.location}</p>

        
          <div className={styles["more-functions"]}>
            <button onClick={handleDeleteAccount}>Delete account</button>
            <button><Link to={`/userProfile/edit/${user.id}`}>Edit your account</Link></button>
          </div>
      <section className={styles['posts-list']}>


      <h1>Posts</h1>


      {dogs.filter(dog => dog.userId == userId).map(filteredDog => (
        <DogCard key={filteredDog.id} doggie={filteredDog} />
      ))}
      </section>
        </div>
        
        </> 
    )
  
    
     
      
      
}
    


/*
////////////////////////////////////////////////////

        <section className={styles['dogs-list']}>
        <h1>My posts</h1>
        {dogs.map(dog => (
          <DogCard key={dog.id} doggie={dog} />
        ))}
        </section>
*/    

