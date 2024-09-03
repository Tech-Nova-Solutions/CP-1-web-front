import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Produtos from './routes/Produtos.jsx'
import Sobre from './routes/Sobre.jsx'
import Contato from './routes/Contato.jsx'

const router = createBrowserRouter([{
  path:'/', element:<App/>,
  errorElement: <Error/>,

  children:[
    {path:'/', element:<Home/>},
    {path:'/produtos', element:<Produtos/>}, 
    {path:'/sobre', element:<Sobre/>},
    {path:'/contato', element:<Contato/>},

  ]

}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
