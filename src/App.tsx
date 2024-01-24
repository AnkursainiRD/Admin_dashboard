import {lazy,Suspense} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Loader from './components/Loader'

const Dashboard=lazy(()=>import("./pages/Dashboard"))
const Customers=lazy(()=>import("./pages/Customers.tsx"))
const Products=lazy(()=>import("./pages/Products"))
const Transaction=lazy(()=>import("./pages/Transaction"))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <Routes>
            <Route path='/admin/dashboard' element={<Dashboard/>} />
            <Route path='/admin/customers' element={<Customers/>} />
            <Route path='/admin/products' element={<Products/>} />
            <Route path='/admin/transaction' element={<Transaction/>} />

                  {/* Charts Area */}

                  { /* Apps Area */}
        </Routes>
      </Suspense>  
    </BrowserRouter>
  )
}

export default App