import React from 'react'
import './result.css'
function result() {
  return (
    <div className='result'>
      <div className="sem1">
    <details>
  <summary>SEMESTER 1</summary>
  <details>
    <summary class="pt1result">PT 1 RESULT</summary>
    <table border="1" className="pt1table">
        <thead>
            <tr>
                <th>MATHEMATICS</th>
                <th>PHYSICS</th>
                <th>CHEMISTRY</th>
                <th>FOC</th>
                <th>ELECTRONICS</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>45</td>
                <td>30</td>
                <td>34</td>
                <td>40</td>
                <td>25</td>
            </tr>
        </tbody>
    </table>
    </details>
    <details>
      <summary class="pt2result">PT 2 RESULT</summary>
      <table border="1" className="pt2table">
        <thead>
            <tr>
                <th>MATHEMATICS</th>
                <th>PHYSICS</th>
                <th>CHEMISTRY</th>
                <th>FOC</th>
                <th>ELECTRONICS</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>36</td>
                <td>41</td>
                <td>38</td>
                <td>46</td>
                <td>29</td>
            </tr>
        </tbody>
    </table>
  </details>
  <details>
    <summary class="sem1result">SEMESTER 1 RESULT</summary>
    <table border="1" className="sem1table">
        <thead>
            <tr>
                <th>MATHEMATICS</th>
                <th>PHYSICS</th>
                <th>CHEMISTRY</th>
                <th>FOC</th>
                <th>ELECTRONICS</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>85</td>
                <td>93</td>
                <td>79</td>
                <td>80</td>
                <td>65</td>
            </tr>
        </tbody>
    </table>
  </details>
</details>
</div>
<div className ='sem2'>
<details>
  <summary>SEMESTER 2</summary>
  <details>
    <summary class="sem2pt1">PT 1 RESULT</summary>
    <table border="1" className="sem2pt1">
        <thead>
            <tr>
                <th>MATHEMATICS II</th>
                <th>PHYSICS II</th>
                <th>CHEMISTRY II</th>
                <th>ELECTRICAL</th>
                <th>CPS</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>45</td>
                <td>30</td>
                <td>34</td>
                <td>40</td>
                <td>35</td>
            </tr>
        </tbody>
    </table>
    </details>
    <details>
      <summary class="sem2pt2">PT 2 RESULT</summary>
      <table border="1">
        <thead>
            <tr>
            <th>MATHEMATICS II</th>
                <th>PHYSICS II</th>
                <th>CHEMISTRY II</th>
                <th>ELECTRICAL</th>
                <th>CPS</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>36</td>
                <td>41</td>
                <td>38</td>
                <td>36</td>
                <td>43</td>
            </tr>
        </tbody>
    </table>
  </details>
  <details>
    <summary class="sem2result">SEMESTER 2 RESULT</summary>
    <table border="1">
        <thead>
            <tr>
            <th>MATHEMATICS II</th>
                <th>PHYSICS II</th>
                <th>CHEMISTRY II</th>
                <th>ELECTRICAL</th>
                <th>CPS</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>75</td>
                <td>83</td>
                <td>69</td>
                <td>70</td>
                <td>85</td>
            </tr>
        </tbody>
    </table>
  </details>
</details>
</div>
    </div>
  )
}

export default result
