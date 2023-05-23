import React, { useState } from 'react'
import './Counter.css'
import { Col, Container, Row } from 'react-bootstrap'


function Counter() {
    const [num,setNum]=useState(0)
     
    function incNum(){
        setNum(num+1)
    }

    function decNum(){
setNum(num-1)
    }

    
    function resetNum(){
        
        setNum(0)
            }
   
  
  return (
    <div>
    <Container className='  cont'>
    <Col>
    <Row lg={12} >
    <h1 className='text-light fs-1 mt-5 txt'>{num}</h1>

    </Row>
    <Row lg={12} className=' bttn p-5' >
   <button className='btn bg-primary w-25' onClick={incNum}>Inc</button>    <button className='btn bg-warning w-25 ms-2'onClick={resetNum} >Reset</button>     <button className='btn bg-primary w-25 ms-2' onClick={decNum}>Dec</button>
    </Row>
    </Col>
    </Container>
    </div>
  )
}

export default Counter