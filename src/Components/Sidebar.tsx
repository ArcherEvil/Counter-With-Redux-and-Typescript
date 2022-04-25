import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import '../styles/sidebar/main.css'

interface props {
    children?: React.ReactNode;
    on: boolean
}

const Sidebar: React.FC<props> = (props) => {
  return (
    <aside className={props.on ? 'sidebar open' : 'sidebar'}>
    {props.children}
    <span></span>
    <button><HomeIcon/>
    <p>Home</p>
    </button>
</aside>
  )
}

export default Sidebar