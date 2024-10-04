import React from 'react'
import { useNavigate } from 'react-router-dom'

const TotalReachDetails = () => {
    
  return (
    <div>
        <section className="details">
        <h2>Halal Dollars TotalReach Details</h2>
        <div className="goHigh">
        
            <form action="">
            <h3>GoHigh Level</h3>
            <label htmlFor="">Email</label><br />
            <input type="text" placeholder='hassanibrahim001@gmail.com' /><br />
            

            <label htmlFor="">Username</label><br />
            <input type="text" placeholder='Y24-001-Hassanibrahim' id='username' /><br />
            </form>

            </div>
            <div className="canva">
            <form action="">
            <h3>Canva</h3>
            <label htmlFor="">Email</label><br />
            <input type="text" placeholder='Halaldollars.canva@outlook.com' /><br />

            <label htmlFor="">Password</label><br />
            <input type="text" placeholder='Canvapro100%free' id='password' />

            </form>
            </div>
        </section>
    </div>
  )
}

export default TotalReachDetails