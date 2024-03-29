import React from 'react'
import { IconType } from 'react-icons'
import { Link,Location,useLocation } from 'react-router-dom';
import { RiDashboardFill, RiShoppingBag3Fill,RiCoupon3Fill } from 'react-icons/ri';
import { AiFillFileText } from 'react-icons/ai';
import { IoIosPeople } from 'react-icons/io';
import { FaChartBar,FaChartPie,FaChartLine,FaStopwatch,FaGamepad} from 'react-icons/fa';

function AdminSidebar() {
    const location=useLocation()
  return (
    <aside>
      <h2>Logo</h2>
      <div>
          <h5>Dashboard</h5>
          <ul>
            <Li url='/admin/dashboard' text='Dashboard' Icon={RiDashboardFill} location={location}/>
            <Li url='/admin/products' text='Products' Icon={RiShoppingBag3Fill} location={location}/>
            <Li url='/admin/customers' text='Customers' Icon={IoIosPeople} location={location}/>
            <Li url='/admin/transaction' text='Transaction' Icon={AiFillFileText} location={location}/>
          </ul>
      </div>

      <div>
          <h5>Charts</h5>
          <ul>
            <Li url='/admin/chart/bar' text='Bar' Icon={FaChartBar} location={location}/>
            <Li url='/admin/chart/pie' text='Pie' Icon={FaChartPie} location={location}/>
            <Li url='/admin/chart/line' text='Line' Icon={FaChartLine} location={location}/>
          </ul>
      </div>

      <div>
          <h5>Apps</h5>
          <ul>
            <Li url='/admin/apps/stopwatch' text='Stopwatch' Icon={FaStopwatch} location={location}/>
            <Li url='/admin/apps/cupon' text='Cupon' Icon={RiCoupon3Fill} location={location}/>
            <Li url='/admin/apps/toss' text='Toss' Icon={FaGamepad} location={location}/>
          </ul>
      </div>
    </aside>
  )
}
interface Liprops{
  url:string,
  text:string,
  location:Location,
  Icon:IconType
}

function Li({url,text,location,Icon}:Liprops){
  return(<>
  <li style={{
    backgroundColor:location.pathname.includes(url) ?"rgba(0,115,125,0.1)":"white"
  }}>
    <Link to={url} style={{color:location.pathname.includes(url) ?"rgb(0,115,255)":"black"}}>
      <Icon/>{text}</Link>
  </li>
  </>)
}

export default AdminSidebar