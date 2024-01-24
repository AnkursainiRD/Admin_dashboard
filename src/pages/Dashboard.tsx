import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { BsSearch } from 'react-icons/bs'
import { FaRegBell } from 'react-icons/fa'
import userpic from "../assets/userpic.png"
import { HiTrendingUp,HiTrendingDown } from 'react-icons/hi'
import data from "../assets/data.json"
import { BarChart } from '../components/Chart'

function Dashboard() {
  return (
    <div className='adminContainer'>
            {/* Sidebar Area */}
        <AdminSidebar/>
            {/* Main Area */}
        <main className='dashboard'>
            <div className="bar">
              <BsSearch/>
              <input type='text' placeholder='Search for the data' />
              <FaRegBell/>
              <img src={userpic} alt="userimg" />
            </div>  

            <section className='widgetContainer'>
              <WidgetItems percent={40} amount={true} value={34000} heading="Revenue" color="rgb(0,115,255)"/>
              <WidgetItems percent={60} amount={true} value={12000} heading="Transaction" color="rgb(255 196 0)"/>
              <WidgetItems percent={-20} amount={false} value={25000} heading="Sales" color="rgb(0,198,202)"/>
              <WidgetItems percent={50} amount={true} value={4500} heading="Products" color="rgb(76 0 255)"/>

            </section>

            <section className='graphContainer'>
                  <div className="revenueChart">
                    <h2>Revenue & Transaction</h2>
                      <BarChart 
                        data_1={[300,144,143,655,237,755,190]} data_2={[200,344,543,255,537,705,490]}
                        title_1='Revenue' title_2='Transaction'
                        bg_color_1='rgb(0,115,255)' bg_color_2='rgba(53,162,235,0.8)'/>
                  </div>
                  <div className="dasboardCategory">
                          <h2>Invetory</h2>
                          {data.categories.map((val)=>(
                          <CategoryItem key={val.heading} heading={val.heading} value={val.value} color={`hsl(${val.value*2},100%,50%)`}/>
                          ))}
                    </div>
            </section>
        </main>    
    </div>       
  )
}

interface widgetItemProps {
    heading:string;
    value:number;
    percent:number;
    color:string;
    amount?:boolean;
}


const WidgetItems=({heading,percent,value,color,amount}:widgetItemProps)=> (
  <article className='widget'>
      <div className='widgetInfo'>
        <p>{heading}</p>
        <h4>{amount ?`$${value}`:value}</h4>
        {
          percent>0?(<span className='green'><HiTrendingUp/>+{percent}%</span>):(<span className='red'><HiTrendingDown/>{percent}%</span>)
        }
      </div> 
      <div className='widgetCircle' style={{
        background:`conic-gradient(
          ${color} ${Math.abs(percent)/100*360}deg,
          rgb(255,255,255) 0
        )`
      }}>
            <span style={{color}}>{percent}%</span>
        </div> 
   </article>
)

// Category data

interface CategoryItemProps{
    color:string;
    value:number;
    heading:string;
}

const CategoryItem=({color,value,heading}:CategoryItemProps)=>(
  <div className="categoryItem">
  <h5>{heading}</h5>
  <div>
    <div
      style={{
        backgroundColor: color,
        width: `${value}%`,
      }}
    ></div>
  </div>
  <span>{value}%</span>
</div>
)

export default Dashboard;