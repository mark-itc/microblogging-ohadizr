import React from 'react'
import { useReducer } from 'react';
import './Wellcome.css'
import SignIn from './SignIn'
import SingUp from './SignUp';

export const ACTION = {
  NOFORM_WELLCOME: 'noform_wellcome',
  SIGNIN_WELLCOME: 'signin_wellcome',
  REGISTER_WELLCOME: 'register_wellcome'
};
// useLayoutEffect(() => {
//   first

// }, [third])
function reducer(wellcomeState, action) {
  switch (action.type) {
    case ACTION.NOFORM_WELLCOME:
      return null;
    case ACTION.SIGNIN_WELLCOME:
          return <SignIn/>
      case ACTION.REGISTER_WELLCOME:
          return <SingUp/>
      default:
        return null;
  }
}

export default function Wellcome() {
  const [wellcomeState, dispatch] = useReducer(reducer, "noform_wellcome");
  return (
<>
    <div className='signInWelcomeContainer'
    onClick={()=>dispatch({type: ACTION.NOFORM_WELLCOME})}>
    <div className='wellcomeStatment'>
      <h1 className='wellcomeTitle'>Wellcome to the sparrow anti-social club </h1>
      <h3 className='wellcomeText'>Only gang members are allowed to tweet </h3>
      <h3 className='wellcomeText'>Join the flock or get out!</h3>
    <div className='signInOrRegister'>
    <button 
    className='buttonStandard'
    onClick={(e)=>{
      e.stopPropagation();
      dispatch({type: ACTION.SIGNIN_WELLCOME})}}
    >SignIn</button>
    <button 
    className='buttonStandard RegisterBut'
    onClick={(e)=>{
      e.stopPropagation();
      dispatch({type: ACTION.REGISTER_WELLCOME})}}
    >Register</button> 
    </div>
    </div>
    <div 
    className='welcomeAuth'
    onClick={(e)=>{
      e.stopPropagation()}}
    >
    {wellcomeState }
    </div>
</div>

</>
  )
}
