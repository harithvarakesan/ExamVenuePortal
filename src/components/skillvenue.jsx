import React from 'react'
import './skillvenue.css'
import Home from './Home'
import { BsNewspaper,BsDownload } from 'react-icons/bs'
function examvenue() {
  return (
    <div>
      <Home />
    <div className='skillvenue'>
      <h2>Semester Schedule <BsNewspaper /></h2>
      <div className='skilltable'>
      <table>
        <tr>
          <th>S.no</th>
          <th>Skill</th>
          <th>From Date</th>
          <th>To Date</th>
          <th>Venue</th>
        </tr>
        <tr>
          <td>1</td>
          <td>C/C++</td>
          <td>09-09-2023</td>
          <td>18-09-2023</td>
          <td>ME107</td>
        </tr>
        <tr>
          <td>2</td>
          <td>C/C++</td>
          <td>09-09-2023</td>
          <td>18-09-2023</td>
          <td>ME107</td>
        </tr>
        <tr>
          <td>3</td>
          <td>C/C++</td>
          <td>09-09-2023</td>
          <td>18-09-2023</td>
          <td>ME107</td>
        </tr>
        <tr>
          <td>4</td>
          <td>C/C++</td>
          <td>09-09-2023</td>
          <td>18-09-2023</td>
          <td>ME107</td>
        </tr>
      </table>
      </div>
    </div>
    </div>
  )
}

export default examvenue
