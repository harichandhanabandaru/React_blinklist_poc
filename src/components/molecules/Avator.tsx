import React from 'react'
import avator from "../../images/avator.png";
import KeyboardArrowDownOutlinedIcon  from '@mui/icons-material/KeyboardArrowDownOutlined';
import useStyle from '../../styles';

function Avator() {
  const classes=useStyle();
  return (
    <>
    <a href="#">
      <span><div className={classes.avator}  >
     <img src={avator} alt="Account"/>
     <div className={classes.textOnAvator}>A</div>
     </div>
   <KeyboardArrowDownOutlinedIcon  className={classes.avatorArrow}/>
   </span>
</a>
    </>
  )
}

export default Avator
