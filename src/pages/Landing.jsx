import styles from "./Landing.module.css";
import img1 from "../assets/Screenshot (746).png"
// import Logo from "../components/UI/Logo";
import FeatureCard from "../components/FeatureCards";
import {cardDetails} from "../util/FeatureCardDetails";
// import Benefits from "../components/Benifits";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

export default function Landing() {
  return(
    <div className={styles.container}>
      <header className={styles.nav}>
        <nav className={styles.nav_container}>
          {/* <div className={styles.logo}> */}
          {/*   <Logo/> */}
          {/* </div> */}
          <ul className={styles.nav_list}>
            <li className={styles.nav_list_item}><Link>Features</Link></li>
            <li className={styles.nav_list_item}><Link to={"/login"}>Login</Link></li>
            <li className={styles.nav_list_item}><Link to={"/register"}>SignUp</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className={styles.hero}>
          <div className={styles.hero_content}>
            <div className={styles.cont}>
              <h1>Tas<span>kerr</span></h1>
              <h3>Simplify <span>your tasks with ease,</span></h3>
              <h3>Always stay <span>organized,</span></h3>
              <h3>Accomplish <span>your goals.</span></h3><br/><br/>
              <Link to="/register"  className={styles.btn}>Get Started</Link>
            </div>
          </div>
          <div className={styles.img_container}>
            <img src={img1} className={styles.img}/>
          </div>
        </section>
        <div className={styles.divider}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className={styles.fill}></path>
          </svg>
        </div>
        <section className={styles.feature_contaniner}>
          <div className={styles.grid_container}>
            {cardDetails.map(({title,description,icon},i)=>{
              return(
                <FeatureCard key={i} title={title} description={description} icon={icon}/>
              );
            })}
          </div>
          {/* <div className={styles.divider1}> */}
          {/*   <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"> */}
          {/*     <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className={styles.fill}></path> */}
          {/*   </svg> */}
          {/* </div> */}
        </section>
        <section className={styles.cta_section}>
          <div className={styles.cta_content}>
            <h2 className={styles.cta_heading}>Get Started Today!</h2>
            <p className={styles.cta_description}>Sign up now and start managing your tasks efficiently.</p>
            <a href="#" className={styles.cta_button}>Sign Up</a>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
