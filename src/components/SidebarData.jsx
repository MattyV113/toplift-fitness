import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import React from 'react';




 const SidebarData = [
     
     {
         name: "Tracker",
         logo: <FitnessCenterIcon />,
         link: "/tracker"

     },
     {
         name: "Calendar",
        logo: <CalendarMonthIcon />,
         link: "/calendar"

     },
     {
         name: "Profile",
        logo: <AccountCircleIcon />,
        link: "/profile"

     }
 ]
    

export default SidebarData;