import { useEffect, useState } from "react"
import { DogCard } from "./DogCard"
import  styles  from "./adopt.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"



export function Adopt(){
  const [dogs, setDogs] =useState(null)
  
  useEffect(() => {
  fetch(`http://localhost:3005/api/dogs`).then((res) =>res.json()).then(data => setDogs(data));
  }, [])

  if(!dogs) {
    return <strong> loading </strong>
  }


return(
  <>
    <section className={styles['dogs-list']}>
    <div className={styles["adopt-header"]}>
    <h1>Adopt</h1>
      <div className={styles["exclamation"]}>
      <FontAwesomeIcon icon={faExclamationCircle} color="" /><p>Place the mouse over image to see more</p>
      </div>
    </div>
      {dogs.map(dog => (
        <DogCard key={dog.id} doggie={dog} />
      ))}
      </section>
  </>
)
  
}

