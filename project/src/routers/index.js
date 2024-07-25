import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Doc from '../pages/Doc'
import GitHub from '../pages/GitHub'




const  router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
           {
             path:"/",
            element:<Home/>,
           },
           {
            path:"/Doc",
           element:<Doc/>,
          },
          {
            path:"/GitHub",
           element:<GitHub/>,
          },
           
           
          
        ]
    }
])
export default router;