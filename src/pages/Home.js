import React from 'react'
import styles from './style'
import Homemain from '../components/Homemain'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Homemain />
      </div>
    </div>
    
    
  </div>
  )
}

export default Home