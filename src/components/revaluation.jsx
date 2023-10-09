import React from 'react'
import Home from './Home'
import './revaluation.css'
function revaluation() {
  return (
    <div>
      <Home />
      <div className='revaluation'>
        <h1>REVALUATION</h1>
          <table>
            <tr>
              <td><label>SEMESTER : </label></td>
              <td><input placeholder='Semester'></input><br /></td>
            </tr>
            <tr>
              <td><label >COURSE CODE : </label></td>
              <td><input placeholder='Course code'></input><br /></td>
            </tr>
            <tr>
              <td><label>COURSE TITLE : </label></td>
              <td><input placeholder='Course Title'></input><br /></td>
            </tr>
            <tr>
              <td><label>GRADE AWARDED : </label></td>
              <td><input placeholder='Grade'></input><br /></td>
            </tr>
            <tr>
              <td><label>RESULT : </label></td>
              <td>
                <select>
                  <option value="-select-">-select-</option>
                  <option value="Pass">Pass</option>
                  <option value="RA">RA</option>
                </select><br />
              </td>
            </tr>
          <button type='submit'>payment</button>
          </table>
      </div>
    </div>
  )
}

export default revaluation
