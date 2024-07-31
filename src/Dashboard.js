import React from 'react';
import {useNavigate} from 'react-router-dom';
import Dashboard1 from './Dashboard1.js';


function Dashboard(){
  const navigate=useNavigate()
    return(
        <div>
            
              <button className='dash-btn' onClick={()=>navigate("/form")}>More</button>   
          
              <Dashboard1/>
              
        </div>
      );
}
export default Dashboard;