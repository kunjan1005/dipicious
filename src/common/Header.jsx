import React,{useEffect} from 'react'
import logo from '../images/dpcs_logo.png'
import HomeIcone from '@material-ui/icons/Home';
import ExploreOutlined from '@material-ui/icons/ExploreOutlined'
import PlusOneRounded from '@material-ui/icons/PlusOneRounded'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import Tooltip from '@material-ui/core/Tooltip';
import Profile from '@material-ui/icons/PersonOutline'
import { NavLink } from 'react-router-dom'
import {getProfile} from '../actions/index'
import { useSelector,useDispatch } from "react-redux";
const Header = () => {
    let dispatch=useDispatch()
    useEffect(()=>{
      dispatch(getProfile())
    },[1])
    return (


        <header className="header">
            <div className="header_main">
                <div className="container">
                    <div className="row">
                        <div className="offset-1 col-lg-1 col-sm-2 col-2 order-1 logo-div">
                            <div className="logo_container">
                                <div className="logo"><img src={logo} alt="logo" /></div>
                            </div>
                        </div>
                        <div className="offset-2 col-lg-3 col-sm-2 col-2 order-1 logo-div header_search p-1">
                            <div className="logo_container">
                                    <div className="serach_box">
                                        <input type="search" id="" className="search_input" placeholder='search here' />
                                  
                                    </div>
                            </div>
                        </div>
                        {/* <div className="offset-2 col-lg-3 col-12 order-lg-2 order-3 text-lg-left text-right header_search">
                            <input type='text' placeholder='search here'></input>
                        </div>  */}


                        <div className="col-lg-4 col-12 order-lg-3 order-1 ">
                            <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end ">
                                <div className="d-flex flex-row align-items-center justify-content-end  nav_link">
                                    <Tooltip title='home'>
                                        <NavLink className='links' activeclass='active' to='/'><div className="wishlist_icon"><HomeIcone /></div></NavLink>
                                    </Tooltip>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-end  nav_link">
                                    <Tooltip title='explore'>
                                        <NavLink className='links' activeclass='active' to='/explore#cuisines'><div className="wishlist_icon"><ExploreOutlined /></div></NavLink>
                                    </Tooltip>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-end  nav_link">
                                    <Tooltip title='new post'>
                                        <NavLink className='links' activeclass='active' to='/post'><div className="wishlist_icon"><PlusOneRounded /></div></NavLink>
                                    </Tooltip>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-end  nav_link">
                                    <Tooltip title='notifications'>
                                        <NavLink className='links' activeclass='active' to='/notifications'><div className="wishlist_icon"><NotificationsActiveIcon /></div></NavLink>
                                    </Tooltip>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-end  nav_link">
                                    <Tooltip title='profile'>
                                        <NavLink className='links' activeclass='active' to='/profile'><div className="wishlist_icon"><Profile /></div></NavLink>
                                    </Tooltip>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>


    )
}

export default Header