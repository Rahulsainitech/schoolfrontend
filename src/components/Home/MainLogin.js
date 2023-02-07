import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {RiAdminFill} from 'react-icons/ri'
import{MdSchool} from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import "../styles/App.css"

const MainLogin = () => {
  return (
    <div className='d-flex justify-content-center align-content-center flex-wrap mainlogin' style={{"min-height":"60vh"}}>
        <Card style={{ width: '14rem',height:'30vh' }} className="mx-2">
      <Card.Body>
        <Card.Title className="mb-2 fs-1 text-center"><RiAdminFill/></Card.Title>
        <Card.Title className='text-center'>Faculty Login</Card.Title>
        <NavLink to={"/facultylogin"} className="nostyle"><Button className='d-block my-3 mx-auto ' variant='outline-info'>Click here</Button></NavLink>
       <NavLink to={"/facultyregister"} className="nostyle"> <Card.Link className='nostyle'>Don't have an Account? Click here...</Card.Link></NavLink>
      </Card.Body>
    </Card>
    <Card style={{ width: '14rem',height:'30vh' }} className='mx-2'>
      <Card.Body>
        <Card.Title className="mb-2 fs-1 text-center"><MdSchool/></Card.Title>
        <Card.Title className='text-center'>Student Login</Card.Title>
        <NavLink to={"/studentlogin"} className="nostyle"> <Button className='d-block my-3 mx-auto' variant='outline-info'>click here</Button></NavLink>
       <NavLink to={"/studentregister"} className="nostyle"> <Card.Link className='nostyle'>Don't have an Account? Click here...</Card.Link></NavLink>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MainLogin