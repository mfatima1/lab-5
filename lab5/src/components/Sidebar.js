import React from 'react'

export const Sidebar = () => {
  return (
    <div className='container'>
    <div class="filter">
    <form>
        <label className='textbox'>
        <input type='textbox' placeholder='Enter a value 1-15'></input>
        </label>
        <br/>
    <button className='srchbtn'>Search</button>
      <h4>Sort By:</h4>
      <label>
        <input type="radio" name="sortBy" value="viewed" checked /> Most
        Viewed
      </label>
      <br />
      <label>
        <input type="radio" name="sortBy" value="shared" /> Most Shared
      </label>
      <br />
      <label>
        <input type="radio" name="sortBy" value="emailed" /> Most Emailed
      </label>
      <h4>Time Frame:</h4>
      <label>
        <input type="radio" name="timeFrame" value="1" checked /> Day
      </label>
      <br />
      <label>
        <input type="radio" name="timeFrame" value="7" /> Week
      </label>
      <br />
      <label>
        <input type="radio" name="timeFrame" value="30" /> Month
      </label>
    </form>
  </div>
  </div>
  )
}
