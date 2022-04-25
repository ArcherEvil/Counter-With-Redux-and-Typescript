import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Sidebar from './Sidebar';
import '../styles/Navbar/index.css'
import { useDispatch, useSelector } from 'react-redux';
import {Sidebar as SidebarAction} from '../db/actions/index'

const Navbar:React.FC = () => {

    const SidebarState = useSelector((state: any) => state.sidebar);
    const dispatch = useDispatch();
    
  return (
    <nav className='Navbar'>
      <Sidebar on={SidebarState}><CloseIcon onClick={() => dispatch(SidebarAction())} /></Sidebar>
    <div className='menubtn' onClick={() => dispatch(SidebarAction())}>
    <div className='menubtn__burger'></div>
  </div>
    <a id="title">Redux Test</a>
</nav>
  )
}


export default Navbar