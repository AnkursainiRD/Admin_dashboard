import React from 'react'
import AdminSidebar from '../components/AdminSidebar'

function Transaction() {
  return (
    <div className='adminContainer'>
            {/* Sidebar Area */}
          <AdminSidebar/>
            {/* Main Area */}
        <main>This is transaction</main>    
    </div>
  )
}

export default Transaction