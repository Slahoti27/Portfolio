import React from "react";
import './edu.css';
import edu from '../../Assets/Projects/edu.jpeg'
function Education() {
  return (
    <section className="Education" id="Education">
        <h1 className="heading"> my <span>education</span></h1>

        <div className="box-container">

            <div className="box">
                <i class="fas fa-graduation-cap"></i>
                <span>2018</span>
                <h3>SSC</h3>
                <p>S.F.L. Highschool and Junior College<br>
                </br>
                93.20%</p>

            </div>

            <div className="box">
                <i class="fas fa-graduation-cap"></i>
                <span>2020</span>
                <h3>HSC</h3>
                <p>S.F.L. Highschool and Junior College<br>
                </br>
                93.69%</p>
            </div>

            <div className="box">
                <i class="fas fa-graduation-cap"></i>
                <span>2024</span>
                <h3>Computer Science and Ebgineering</h3>
                <p>SSGMCE<br>
                </br>
                Pursuing</p>
            </div>
            <div className="image">
            <img src={edu} alt="education"/></div>
        </div>
    </section>
  );
}

export default Education;
