import React from 'react'
import Home from './Home'
import './revaluation.css'
function revaluation() {
  return (
    <div>
      <Home />
      <div className='revaluation'>
        <h1>REVALUATION</h1>
        <form>
          <label>SEMESTER : </label>
          <input placeholder='Semester'></input><br />
          <label >COURSE CODE : </label>
          <input placeholder='Course code'></input><br />
          <label>COURSE TITLE : </label>
          <input placeholder='Course Title'></input><br />
          <label>GRADE AWARDED : </label>
          <input placeholder='Grade'></input><br />
          <label>RESULT : </label>
          <select>
            <option value="-select-">-select-</option>
            <option value="Pass">Pass</option>
            <option value="RA">RA</option>
          </select><br />
          <button type='submit'>payment</button>
        </form>
      </div>
    </div>
  )
}

export default revaluation
