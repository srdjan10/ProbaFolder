import classesnav from '../components/Navigation.module.css';
import Contact from '../page/Contact';


const Navigation =()=>{
return (
<ul className={classesnav.ul}>
<li className={classesnav.li}>
      <a href="#">Home page</a>
    </li>
    <li className={classesnav.li}>
      <a href="#">Project</a>
    </li>
    <li className={classesnav.li}>
      <a href="#">Tutorial</a>
    </li>
    <li className={classesnav.li}>
    <a href="https://www.nba.com/" target="_blank">Sport NBA</a>
    </li>
    <li className={classesnav.li}>
    <a href="#">News</a>
    </li>
    <li className={classesnav.li}>
    <a href="#">React learn</a>
    </li>
   <li className={classesnav.li}>
    <a href="/Contact">Contact</a>
    </li> 
    </ul>
)
}

export default Navigation