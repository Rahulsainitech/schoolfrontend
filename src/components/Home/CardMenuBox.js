import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/App.css"

const CardMenuBox = () => {
  return (
    <div class="card11">
    <div class="box1">
        <div class="cardtop">
            <h5>School info</h5>
            <p>Sunrise Public Sr. Secondary School established in year 2000.We provide excellence learning....</p>
        </div>
        <div class="btn">
            <NavLink to="/about"><button>Read More</button></NavLink>
        </div>
    </div>
    <div class="box2">
        <div class="cardtop">
            <h5 className='py-2'>Time-table</h5>
            <p>Check the latest timetable of all the classes </p>
        </div>
        <div class="btn">
            <NavLink to="/timetable" className="abc"><button>Time Table</button></NavLink>
        </div>
    </div>
    <div class="box3">
        <div class="cardtop">
            <h5>Our alumani</h5>
            <p>Our Student are working in top organisation that are transforming the world.</p>
        </div>
        <div class="btn">
            <NavLink to="/about"><button>Click here</button></NavLink>
        </div>
    </div>
    <div class="box4">
        <div class="cardtop">
            <h5>Gallery</h5>
            <p>See the pictures of cultural fest and various activities that are performing various level</p>
        </div>
        <div class="btn">
        <NavLink to="/gallery"><button>Click here</button></NavLink>
        </div>
    </div>
</div>
  )
}

export default CardMenuBox