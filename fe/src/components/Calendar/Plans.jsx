import {React, useState}  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PlanCard from './PlanCard';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Plans() {
  const data = useSelector((state) => state.schedule)

  return (
    // <Box sx={{display: 'flex', justifyContent: 'center'}}>
    //   {data.map((plan, index) => {
        
    //     return <PlanCard key={index} plan={plan}/>
    //   })}
    // </Box>
    <div>hi</div>
  );
  
}
