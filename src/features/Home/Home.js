import { Link } from 'react-router-dom'
import  styles  from './home.module.css'

function Home(){
  return(
    <>
      <div className={styles["main-container"]}>
        <div className={styles["first-container"]}>
            <h1>Welcome to Hot Diggity Dog!</h1>
            <p>Our website is the perfect place to meet your next life partner and more.</p>
          </div>
          <div className={styles["container-before-after"]}>
            <div className={styles["before"]}>
              <h3>Before</h3>
              <img src="https://rolda.ro/wp-content/uploads/sites/48/2021/12/nabi1.jpg" alt="" />
            </div>
            <div className={styles["middle"]}>
              <h3>In July Lola was found near Cluj-Napoca <br /> with an injured leg <br /> Now she lives a happy life in Oradea</h3>
            </div>
            <div className={styles["after"]}>
              <h3>After</h3>
              <img src="https://rolda.ro/wp-content/uploads/sites/48/2021/12/SWTZ_nabi_apr20.jpg" alt="" />
            </div>
          </div>
          <div className={styles["third-container"]}>
          <img src="https://img.freepik.com/free-vector/cute-puppy-dog-bite-ball-cartoon-vector-icon-illustration-animal-sport-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3549.jpg?w=200" alt="" />
          <h1> <span> 7 </span> out of 10 puppies&nbsp;<span>don't</span>&nbsp; survive on streets</h1>
          <p>Every female dog and her puppies raise the homeless dogs number by 400 every 4 years</p>
          </div>
          <div className={styles["fourth-container"]}>
            <div className={styles["left"]}>
              <img src="https://rolda.ro/wp-content/uploads/sites/48/2021/12/sterilizare.jpg" alt="" />
              <div className={styles["text"]}>
                <h1>Help us reduce the homeless dogs. Sterilize your pet!</h1>
                <p>Alongside partner vets Hot Diggity started a sterilization campaign from rural areas of Oradea. Until the end of 2022 we have a goal of 1500 pets.</p>
              </div>
            </div>
            <div className={styles["right"]}>
              <img src="https://rolda.ro/wp-content/uploads/sites/48/2021/12/valerie.jpg" alt="" />
              <div className={styles["text"]}>
                <h1>The cheapest treatment is prevention. Help us vaccinate the rescued puppies!</h1>
                <p>This puppy was sufering of parvo, a disease that transfers thru unvaxed puppies which starts with dihareea. Dehydrated and starved the puppy died after some days. The prevention of this disees is made with a vax that costs 15 euro. Please consider donating and help us protect more puppies! </p>
                <Link to={`/Donate`}><button className={styles['donate-button']}> Donate</button></Link>
              </div>
            </div>

          </div>
      </div>
    </>
  )
}

export { Home }
