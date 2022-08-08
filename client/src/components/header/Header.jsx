import { Navbar } from "../navbar/Navbar"
import "./header.css"
export const Header = ()=>{
    return (
        <div className="headerBox">
            <Navbar></Navbar>
            <div className="bar">
                <span className="baritem">Hotels</span>
                <span className="baritem">Flight</span>
                <span className="baritem">Train</span>
            </div>
        </div>
    )
}