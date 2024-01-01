import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Bootstrap = () => {
  return (
    <>
        <h1>this is bootstrap</h1>
        <button className="btn btn-success">button 1</button>
        <div className="mb-3">
  <label for="formFile" className="form-label">Default file input example</label>
  <input className="form-control" type="file" id="formFile"/>
</div>
<div className="mb-3">
  <label for="formFileMultiple" className="form-label">Multiple files input example</label>
  <input className="form-control" type="file" id="formFileMultiple" multiple/>
</div>
<div className="mb-3">
  <label for="formFileDisabled" className="form-label">Disabled file input example</label>
  <input className="form-control" type="file" id="formFileDisabled" disabled/>
</div>
<div className="mb-3">
  <label for="formFileSm" className="form-label">Small file input example</label>
  <input className="form-control form-control-sm" id="formFileSm" type="file"/>
</div>
<div>
  <label for="formFileLg" className="form-label">Large file input example</label>
  <input className="form-control form-control-lg" id="formFileLg" type="file"/>
</div>

<label for="exampleColorInput" className="form-label">Color picker</label>
<input type="color" className="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color"></input>
    </>
  )
}

export default Bootstrap
