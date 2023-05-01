import {Link} from 'react-router-dom'

//For the header navigation I want to have 2-3 links that will navigate to the different pages for the app. 
//include the logo inside of the navigation or a search bar.
//maybe you can create the logo above the navigation if you want to get fancy. 

//first stub out with nav tags.
//then go into li- make sure that they are displayed in line with good padding. 

export default function Header(){
    return(
        <nav>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/'>Contact</Link></li>
        </nav>
    )
}