import React from 'react';
import './Halal.css'
import { Link, useNavigate } from 'react-router-dom'
const TotalReach = () => {
  const navigate =useNavigate()

  const clickButton=()=>{
      navigate('/TotalReachDetails')
  }
  return (
  
    <div>
        <section className='wrapper'>
        <div className='field-one'>
        <h2>Halal Dollars TotalReach</h2>
        <p>Subscribe to Halal Dollars TotalReach (GoHighLevel Sub-account and Canva Pro) for just N30,000 for the rest of the year (instead of N30,000 per month). This is a limited-time offer, the price goes back to N30,000 per month once the offer ends. </p>

        <p className='What'>What’s Halal Dollars TotalReach</p>
       <p> TotalReach consists of two softwares needed by business owners, freelancers, and content creators.</p>
       
       
        <ul>
            <li>GoHighLevel (normally costs $970 yearly)</li>
            <li>Canva Pro (normally costs $119.99 yearly)</li>
        </ul>
        <div className="subscribe">
          <Link to='/totalreach_details'>
            <button onClick={clickButton}> <i class="fa-regular fa-credit-card"></i>  Subscribe Now</button>
          </Link>
        </div>
        </div>


        <div className='field-two'>
        <h2>The Complete Breakdown</h2>
        <p>The first one is a GoHighLevel sub-account subscription that gives you access to the all-in-one online platform, GoHighLevel that normally costs $970 yearly.</p>

        <p className='major'>The major features of GoHighLevel includes but not limited to;</p>
        <ul>
            <li>Unlimited websites</li>
            <li>Unlimited funnels</li>
            <li>Unlimited automations</li>
            <li>Unlimited forms</li>
            <li>Unlimited surveys</li>
            <li>Unlimited calendars</li>
            <li>Unlimited pipelines</li>
            <li>Unlimited leads</li>
            <li>Unlimited courses</li>
            <li>A/B split testing</li>
            <li>And much more</li>
        </ul>
        <p>
        The second one is Canva Pro, Canva is an online graphic design tool. It makes it easy to create and share professional designs such as social media posts, presentations, posters, videos, logos and more. Your subscription to Halal Dollars TotalReach gives you access to it's Pro version that normally costs $119.99 yearly</p>

        <div className="subscribe">
          <Link to='/totalreach_details'>
            <button onClick={clickButton}>   <i class="fa-regular fa-credit-card"></i>  Subscribe Now</button>
          </Link>
        </div>
        </div>
        </section>
    </div>
  )
}

export default TotalReach