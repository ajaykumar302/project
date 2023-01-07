import styles from "./styles.module.css";
import logo from "../images/white-rubixe-logo.png"
import image from "../images/160805-facebookacademy-submitted.jpg"
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Form from "../form/Form";
import Body from "../body/Body";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1><img src={logo} alt="" height="60px" width="200px"/></h1>
				<div>
				<ul type="none">
					<li><Link to="/home" className={styles.link}>HOME</Link></li>
					<li><Link to="/services" className={styles.link}>SERVICES</Link></li>
					<li><Link to="/products" className={styles.link}>PRODUCTS</Link></li>
					<li><Link to="/intenship" className={styles.link}>AI INTENSHIP</Link></li>
					<li><Link to="/career" className={styles.link}>CAREER</Link></li>
					<li><Link to="/blog" className={styles.link}>BLOG</Link></li>
					<li><Link to="/about" className={styles.link}>ABOUT</Link></li>
					<li><Link to="/contactus" className={styles.link}>CONTACT US</Link></li>
					<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
				</ul>
				</div>
			</nav>
			<div className={styles.adv}>
			<img src={image} alt="no image" className={styles.adv_img} />
			<div className={styles.heading}>
				<h1 className={styles.text1}>TECH</h1>
				<div className={styles.text2}><span className={styles.text3}>FOR</span> TEENS</div>
				<p className={styles.text4}>CREATING FUTURE<br/>TECHNOLOGY PROFESSIONALS<br/>OUT OF YOUNG HANDS</p>
			</div>
			</div>
			<Body/>
			<Form/>
			<Footer/>
		</div>
	);
};

export default Main;
