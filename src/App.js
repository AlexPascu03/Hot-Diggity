import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./features/Home/Home";
import { Nav } from "./components/Nav/Nav";
import { Adopt } from "./features/Adopt/Adopt";
import { Donate } from "./features/Donate/Donate"
import { GiveUp } from "./features/GiveUp/GiveUp"
import { Auth } from "./features/auth/Auth";
import { AuthContextProvider } from "./features/auth/AuthContext";
import { DogDetails } from "./features/Adopt/DogDetails";
import { EditDog } from "./features/Adopt/EditDog.js"
import { UserProfile } from "./features/User/userProfile";
import { UserProfileEdit } from "./features/User/userProfileEdit";




function App() {
  return (

    <AuthContextProvider>
    <BrowserRouter>
    <Nav />
    <Routes>
    
    <Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/Adopt" element={<Adopt/>} />
    <Route path="/dogDetails/:dogId" element={<DogDetails/>} />
    <Route path="/Donate" element={<Donate/>} />
    <Route path="/GiveUp" element={<GiveUp/>} />
    <Route path="/register" element={<Auth/>} />
    <Route path="/login" element={<Auth/>} />
    <Route path="/userProfile/:userId" element={<UserProfile/>} />
    <Route path="/userProfile/edit/:userId" element={<UserProfileEdit/>} />
    <Route path="dogs/edit/:dogId" element={<EditDog/>} />




    </Routes>
    </BrowserRouter>
    </AuthContextProvider>
  ) 
};

export default App ;
