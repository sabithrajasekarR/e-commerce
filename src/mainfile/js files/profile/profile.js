import React, { useState, useEffect } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Address from '../addressmodal/modal'
import { profileState, remove, update } from './profileLogic'
import { useDispatch, useSelector } from 'react-redux'
import UpdateModal from '../updateModal/updatemodl';
import Person2Icon from '@mui/icons-material/Person2';

function Profile() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [userAddress, setUserAddress] = useState({
        houseNo_street: "",
        area: "",
        city: ''
    })


    const users = useSelector(profileState)
    const dispatch = useDispatch()

    function addressGet(houseNo, area, city) {
        setUserAddress({
            houseNo_street: houseNo,
            area: area,
            city: city
        })
    }

    // const [address, setAddress] = useState([
    //     {
    //         houseNo_street: "no 4/856 rajendran nagar 1st street",
    //         area: "neelangarai",
    //         city: "chennai"
    //     }
    // ])

    // Boolean(userAddress.city) && address.push(userAddress)
    // console.log(userAddress);
    // console.log(users);

    return (
        <>
            <span class="material-symbols-outlined" onClick={handleShow}>
                <Person2Icon />
            </span>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Profile</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='profile'>
                        <img
                            src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png'
                            height='100'
                        />
                    </div>
                    <div className='username'>
                        <h5>Username : <span>SABITH</span></h5>
                        <h5>Email : <span>sabtithrajasekar@gmail</span></h5>
                    </div>
                    <div className='address-plus'>
                        <h3>Address</h3>
                        <Address
                            addressGet={addressGet}
                        />
                    </div>
                    <div className='address'>
                        {
                            users.map((val) => {
                                return (
                                    <div>
                                        <h5>{val.houseNO_street}</h5>
                                        <h5>{val.area}</h5>
                                        <h5>{val.city}</h5>
                                        <section className='update-remove'>
                                            <UpdateModal houseNO_street={val.houseNO_street} />
                                            <button
                                                onClick={() => dispatch(remove(val.houseNO_street))}
                                            >Remove</button>
                                        </section>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='profile-btn'>
                        <button><Link to="/">Log out</Link></button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Profile