import styles from "./modal.module.css"
import  ReactDOM  from "react-dom"
import { useAuthContext } from "../../features/auth/AuthContext"
import { useNavigate, useParams } from "react-router-dom"


export function Modal({ open, children, onClose }){

  const { dogId } = useParams();
  const {accessToken } = useAuthContext()
  const navigate = useNavigate();

  if(!open) return null
  

  

  return ReactDOM.createPortal(
    <>      
          <div className={styles["overlay"]}></div>
            <div className={styles["modal"]}>
            <img src="https://img.freepik.com/free-vector/cute-puppy-dog-bite-ball-cartoon-vector-icon-illustration-animal-sport-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3549.jpg?w=200" alt="" />

                  <h4>Are you sure you want to delete this post?</h4>
                  <div className={styles["modal-buttons"]}>
                      <button onClick={onClose}  className={styles["close-button"]}>Cancel</button>
                      <button onClick={handleDeleteDog} className={styles["delete-button"]}>Yes</button>
                  </div>

              </div>
        
    </>,
    document.getElementById('portal')
  )

  function  handleDeleteDog(){

    fetch('http://localhost:3005/dogs/' + dogId, {
      method: 'DELETE',
      headers: {
        'Authorization' : `Bearer ${accessToken}`,
      }
    });navigate('/home')
    
    
  }
}
