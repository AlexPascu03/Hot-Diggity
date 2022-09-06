import styles from "./donate.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSms } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import PayPal from "../../components/PayPal/PayPal";
import PayPal2 from "../../components/PayPal/PayPal2";
import PayPal3 from "../../components/PayPal/PayPal3";



function Donate(){
 
  const [checkout, setCheckout] = useState(false)
  
  return(
    <><div className={styles["big-container"]}>
        <div className={styles["donation-container"]}>
        <div className={styles["banner"]}>
          <h1>Help the dogs</h1>
          <p>Donate for the lifes that have no home. Do it for our community</p>
        <p>We help efficently, responsibly and transparent the community in which we live. <br /> We intervine directly in every dog's situation and give personalized and permanent help, because er find dogs that are hurt, hungry and alone.<br /> Moreover we give them food, shelter and medical assistence, most of them we manage to rehab and place them in adoptive families<br /> where they can start a new life. The ones that are not adopted remain in our hands for the rest of their lifes.<br /> WE NEVER PUT DOWN A DOG THAT HAS THE SLIGHTEST CHANCE OF LIFE.</p>
        <p>We never leave a dog behind. Together we transform the future that we want in our comunity</p> 
        </div>
        
          <div className={styles["donation-container-left"]}>
            <h2>You can donate in two ways</h2>
            <FontAwesomeIcon icon={faSms} size='2x'/>
            <p>Send an SMS to 1234 with the text "CARE"<br /> and you will donate 3$ to our organization</p>
          </div>
          <div className={styles["donation-container-right"]}>
            <FontAwesomeIcon icon={faCreditCard} size='2x'/>
            <p>Make a secure online payment</p>
           
            <div id="donation-box" className={styles['donate-box']}>
              <div className={styles['donate-box-left']}>
                <h2>Donate a meal for a dog</h2>
                <img src="https://media.istockphoto.com/photos/happy-dog-eating-kibble-dog-food-from-bawl-behind-table-picture-id1138228614?k=20&m=1138228614&s=170667a&w=0&h=zXDhNYLSpY6BsaIL6nSbSuIz63lzj-rbo2qz-Y2FtN8=" alt="" />
                <h2>5 €</h2>
                {checkout ? (
                  <PayPal />
                ) : (
                <button onClick={setCheckout(true)}>Checkout</button>
                )}
              </div>
              <div className={styles['donate-box-center']}>
                <h2>Donate a vaccine for a puppy</h2>
                <img src="https://vetstreet-brightspot.s3.amazonaws.com/d0/30/62da7ee44488bc7a996003c0cbe1/puppy-and-veterinarian-istock-101191253-mediumjpg.jpg" alt="" />
                <h2>15 €</h2>
                {checkout ? (
                  <PayPal2 />
                ) : (
                <button onClick={setCheckout(true)}>Checkout</button>
                )}
              
              </div>
              <div className={styles['donate-box-right']}>
                <h2>Donate a house for a dog</h2>
                <img src="https://previews.123rf.com/images/parilovv/parilovv1710/parilovv171000521/88487486-dog-in-cage-isolated-background-happy-labrador-lies-in-an-iron-box.jpg" alt="" />
                <h2>50 €</h2>
                {checkout ? (
                  <PayPal3 />
                ) : (
                <button onClick={setCheckout(true)}>Checkout</button>
                )}
              </div>              
            </div>
        </div>
      </div>
          
        
      </div>  
    </>
  )
}


export { Donate }
