import Category from "../../components/category"
import Dashboard from "../../components/dashboard"
import Information from "../../components/information"
import styles from "./home.module.scss"

const Home = () => {
  return (
    <div className={styles.home}>
      <Dashboard />
      <Information/>
      <Category/>
    </div>
  )
}

export default Home
