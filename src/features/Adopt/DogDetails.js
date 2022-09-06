import { faArrowAltCircleLeft,  faIdBadge } from "@fortawesome/free-regular-svg-icons";
import { faBabyCarriage,  faDog, faMarsAndVenus, faRulerVertical, faShieldVirus, faSimCard, faSyringe,  faWeightHanging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState,  } from "react";
import {  useParams, Link } from "react-router-dom"
import { Modal } from "../../components/Modal/modal";
import { useAuthContext } from "../auth/AuthContext";
import  styles  from "./DogDetails.module.css";



export function DogDetails(){
  const { dogId } = useParams();
  const [ dog, setDog] = useState()

 


  const { user } = useAuthContext()

  
  useEffect(() => {
    fetch('http://localhost:3005/dogs/' + dogId)
    .then ((res) =>res.json())
    .then ((data) => setDog(data))
  }, [dogId])

  const [isOpen, setIsOpen] = useState(false)
  

  if (!dog){
    return <strong>Loading...</strong>
  }
  
  

  

    return (
    <>
    <section className={styles['details-container']}> 
    
     {(!user || user) &&(
      <>
      <div className={styles['dog-container']}>
        <div className={styles['header']}>
          <Link to={`/Adopt`}><FontAwesomeIcon icon={faArrowAltCircleLeft}/> </Link>
          <h1>{dog.name}</h1>
        </div>
        <img className={styles["main-photo"]} src={dog.photo} alt={dog.name}></img>
        <div className={styles["short-info"]}>
          <p><FontAwesomeIcon icon={faDog} /> Breed: {dog.breed}</p>
          <p><FontAwesomeIcon icon={faMarsAndVenus} /> Gender: {dog.gender}</p>
          <p><FontAwesomeIcon icon={faBabyCarriage} /> Age: {dog.age}</p>
          <p><FontAwesomeIcon icon={faWeightHanging} /> Weight: {dog.weight}kg</p>
          <p><FontAwesomeIcon icon={faRulerVertical} /> Height: {dog.height}cm</p>
          <p><FontAwesomeIcon icon={faSimCard} /> Microchip: {dog.microchip}</p>
          <p><FontAwesomeIcon icon={faShieldVirus} /> Vaccinated: {dog.vaccinated}</p>
          <p><FontAwesomeIcon icon={faSyringe} /> Sterilized: {dog.sterilized}</p>
          </div>
          <div  className={styles['description']}>
          <p>{dog.description}</p>
          </div>
          
      </div>
       <div className={styles['user-container']}>

        <h2><FontAwesomeIcon icon={faIdBadge} /> Contact: {dog.userName}</h2>
        <div className={styles['contact-details']}>
          <h2><i className="fa-solid fa-phone"></i>  {dog.phoneNumber}</h2>
          <h2><i className="fa-regular fa-envelope"></i>  {dog.email}</h2>
        </div>
        <a href= {`http://maps.google.com/?q=${dog.location}`} target="_blank" rel="noreferrer">
        <div className={styles['location']}>
            <h2><i className="fa-solid fa-location-crosshairs"></i>  {dog.location}</h2>
            <img src="https://www.olx.ro/app/static/media/staticmap.65e20ad98.svg" alt="" /> 
        </div></a>
        {user && (
          <div className="fav">fav</div>
        )}
        {user && user.id === dog.userId &&(
      <div className={styles['functions-container']}>
      <button className={styles['del-btn']} onClick={() => setIsOpen(true)}><i className="fa-solid fa-x"></i> Delete post</button>
      <button className={styles['edit-btn']}><Link to={`/dogs/edit/${dog.id}`}><i className="fa-solid fa-pen-to-square"></i> Edit this post</Link></button>
      </div>
      )}
      </div> 

      </>
      )}  
      
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Fancy
      </Modal>
    </section>    
    </>
    
  )
}


