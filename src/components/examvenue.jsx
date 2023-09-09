import React from 'react'
import './examvenue.css'
import Home from './Home'
import { BsNewspaper,BsDownload } from 'react-icons/bs'
function examvenue() {
  return (
    <div>
      <Home />
    <div className='examvenue'>
      <h2>UPCOMING EXAMS <BsNewspaper /></h2>
      <div className='examtable'>
      <table>
        <tr>
          <th>S.no</th>
          <th>Exam</th>
          <th>Course code</th>
          <th>Course Name</th>
          <th>Exam Date</th>
          <th>Timing</th>
          <th>Venue</th>
          <th>Seat No.</th>
        </tr>
        <tr>
          <td>1</td>
          <td>PT1</td>
          <td>22CS103</td>
          <td>Data Structures 1</td>
          <td>09-09-2023</td>
          <td>9.30-11.00am</td>
          <td>ME107</td>
          <td>C5</td>
        </tr>
        <tr>
          <td>2</td>
          <td>PT1</td>
          <td>22CS103</td>
          <td>Data Structures 1</td>
          <td>09-09-2023</td>
          <td>9.30-11.00am</td>
          <td>ME107</td>
          <td>C5</td>
        </tr>
        <tr>
          <td>3</td>
          <td>PT1</td>
          <td>22CS103</td>
          <td>Data Structures 1</td>
          <td>09-09-2023</td>
          <td>9.30-11.00am</td>
          <td>ME107</td>
          <td>C5</td>
        </tr>
        <tr>
          <td>4</td>
          <td>PT1</td>
          <td>22CS103</td>
          <td>Data Structures 1</td>
          <td>09-09-2023</td>
          <td>9.30-11.00am</td>
          <td>ME107</td>
          <td>C5</td>
        </tr>
      </table>
      </div>
      <button onClick={window.print}><BsDownload />Hallticket</button>
    </div>
    </div>
  )
}

export default examvenue
