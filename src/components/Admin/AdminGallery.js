import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {FcGallery} from 'react-icons/fc'
// import{MdSchool} from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import "../styles/App.css"
import AdminNav from './AdminNav'

const AdminGallery = () => {
  return (<>
       <AdminNav/>
    <div className='d-flex justify-content-center align-content-center flex-wrap mainlogin' style={{"min-height":"60vh"}}>
        <Card style={{ width: '14rem',height:'30vh' }} className="mx-2">
      <Card.Body>
        <Card.Title className="mb-2 fs-1 text-center"><FcGallery/></Card.Title>
        <Card.Title className='text-center'>View All Photos</Card.Title>
        <NavLink to={"/admin/allgalleryimages"} className="nostyle"><Button className='d-block my-3 mx-auto ' variant='outline-info'>Click here</Button></NavLink>
      </Card.Body>
    </Card>
    <Card style={{ width: '14rem',height:'30vh' }} className='mx-2'>
      <Card.Body>
        <Card.Title className="mb-2 fs-1 text-center"><FcGallery/><sup style={{padding:"0px 5px",borderRadius:"50%",border:"1px solid green"}}>+</sup></Card.Title>
        <Card.Title className='text-center'>Add new pic</Card.Title>
        <NavLink to={"/admin/addpic"} className="nostyle"> <Button className='d-block my-3 mx-auto' variant='outline-info'>click here</Button></NavLink>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default AdminGallery