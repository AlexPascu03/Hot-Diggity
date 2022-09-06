import  styles  from "./adopt.module.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBabyCarriage,  faDog} from "@fortawesome/free-solid-svg-icons";



export function DogCard({ doggie }) {
  return(
    <Link to={`/dogDetails/${doggie.id}`}>
      <article className={styles["dog-card"]}>
        <div className={styles["dog-card-inner"]}>
        
          <div className={styles["dog-card-front"]}>
            <img src={doggie.photo} alt={doggie.photo} />
          </div>
          
          <div className={styles["dog-card-back"]}>
            <div className={styles["container"]}>
              <img src={doggie.photo} alt={doggie.photo} />
              <div className={styles["dog-card-back-info"]}>
                <h1>{doggie.name}</h1>
                <div className={styles["inline-info"]}> 
                <p><FontAwesomeIcon icon={faBabyCarriage} /> {doggie.age} year(s) old</p> 
                <p><FontAwesomeIcon icon={faDog}/> {doggie.breed}</p>
                <p><i className="fa-solid fa-location-crosshairs"></i> {doggie.location}</p>
                </div>
                <p>Cick for more details!</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>



    /*<Link to={`/dogDetails/${doggie.id}`}>
    <article className={styles['dog-card']}>
        <div className="dog-card-front">
          <img src={doggie.photo} alt={doggie.photo} />
        </div>
        <div className="dog-card-back">
          <h2>{doggie.photo}  ●  {doggie.age} year(s) ● {doggie.breed} </h2>
        </div>
   </article>
   setTimeout(()=> {
    Navigate('/Adopt');
   }, 2000)
   </Link>*/

  )
}
