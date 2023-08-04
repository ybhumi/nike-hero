import React from 'react'

const Hero = () => {
    const styles ={
        
        fontSize:'80px',

    
      }
      const but={
        MarginLeft:'5px',
      }
  return (
    
    <div class="container">
   <div class="row">
    <div class="col-6">
      <div>
        <b className='fw-bold' style={styles}>
            YOUR 
        FEET  <br/> DESERVES  <br/> THE BEST
        </b>
      </div>
      <p className='fs-5'> YOUR FEET DESERVES THE BEST AND WE'RE HERE TO HELP YOU WITH OIR SHOES.
      YOUR FEET DESERVES THE BEST AND WE'RE HERE TO HELP YOU WITH OIR SHOES.
      </p>
      <button className='btn btn-secondary'>shop now</button>
      <button className='btn btn-danger mx-auto' style={but}>shop now</button>
    </div>
    <div class="col-6">
    <img
          
          src="https://i5.walmartimages.com/asr/3c155adc-e988-469d-a0a6-ec818b328db3_1.c3e080980594048d054d34de51c9fec1.jpeg"
          width="700px"
          height="700px"
          alt="Logo"
          
        /> 
          

    </div>
   
  </div>
</div>
  )
}

export default Hero