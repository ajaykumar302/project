import { Route, Routes, Navigate } from "react-router-dom";
// import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Home from "./pages/Home"
import Services from "./pages/Services"
import Career from "./pages/Career"
import Aiintenship from "./pages/Aiintenship"
import Products from "./pages/Products"
import Blog from "./pages/Blog"
<<<<<<< HEAD
import Admin from "./pages/Admin"
=======
import Admin from "./pages/About"
>>>>>>> a1c0ba6cfd52ecbeb36416f9b4ac3dc6b6df2cce
import Contact from "./pages/Contact"

function App() {
	const user = localStorage.getItem("token");

	return (
		<>
			<Routes>
			{user && <Route path="/" exact element={<Home/>} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			{/* <Route path="/home" exact element={<Main />} /> */}
			<Route path="/services" exact element={<Services/>} />
			<Route path="/products" exact element={<Products />} />
			<Route path="/intenship" exact element={<Aiintenship />} />
			<Route path="/career" exact element={<Career />} />
			<Route path="/blog" exact element={<Blog />} />
			<Route path="/admin" exact element={<Admin />} />
			<Route path="/contactus" exact element={<Contact />} />
			
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
		</>
		
	);
}

export default App;
