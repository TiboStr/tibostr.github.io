import {BiCalendar} from "react-icons/bi";
import {MdPlace} from "react-icons/md";

function About() {
    return <>
        <div id="about" style={{height: "100vh", display: "flex", justifyContent: "space-around"}}>

            <div>
                <h1>Experience</h1>

                <h3>Summer Job Software Development</h3>
                <div><MdPlace/> Ghent University - IDLab</div>
                <div><BiCalendar/> Summer 2022</div>
            </div>


            <div>
                <h1>Education</h1>

                <div><MdPlace/> Ghent University</div>
                <div><BiCalendar/>2020 - 2023</div>
                <div>Bachelor of Science in Computer Science</div>

            </div>

        </div>

    </>
}

export default About;
