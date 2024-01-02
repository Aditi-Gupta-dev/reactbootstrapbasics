import React from 'react'

const Webpage = () => {
  return (
    <>
        <h1 className='text-center text-danger text-capitalize m-4 text-success-emphasis'>welcome to my webpage</h1>
        <div className="container text-center">
        <div className="row">
         <div className="col"><div className="card shadow" >
  <img src="https://picsum.photos/id/227/200/300" className="card-img-top" alt="..."
    height="200px"
  />
  <div className="card-body bg-gradient">
    <h5 className="card-title text-capitalize text-primary">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div> </div>
        <div className="col"> <div className="card shadow-lg">
  <img src="https://picsum.photos/id/247/200/300" className="card-img-top" alt="..."
    height="200px"
  />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div> </div>
        <div className="col"><div className="card shadow-sm">
  <img src="https://picsum.photos/id/257/200/300" className="card-img-top" alt="..."
    height="200px"
  />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
         </div>
        </div>
    </>
  )
}

export default Webpage
