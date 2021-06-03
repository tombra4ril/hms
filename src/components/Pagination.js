import React from 'react'

const Pagination = ({start, setStart, end, setEnd, total, page, setPage, numberOfItems}) => {
  // function for handling clicking on the first button in the pagination section
  const handleFirst = () => {
    let _start = 0
    let _end = _start + numberOfItems - 1

    setStart(_start)
    setEnd(_end)
    setPage(1)
  }

  // function for handling clicking on the last button in the pagination section
  const handleLast = () => {
    let _end = total - 1
    let _start = _end - numberOfItems + 1
    setStart(_start)
    setEnd(_end)
    setPage(Math.ceil(total / numberOfItems))
  }

  // function for handling clicking on the next button in the pagination section
  const handleNext = () => {
    if(start + numberOfItems <= total - 1){
      let _start = end + 1
      _start = (_start > total -1)? total - 1: _start
      let _end = end + numberOfItems
      _end = (_end > total -1)? total - 1: _end
  
      // set start and end
      setStart(_start)
      setEnd(_end)
      setPage(Math.ceil(_end / numberOfItems))
    }
  }
  
  // function for handling clicking on the previous button in the pagination section
  const handlePrevious = () => {
    if(start === 0){
      return
    }else{
      // set end position
      let _end = start - 1
      _end = (_end > total - 1)? total - 1: _end
      // set start position
      let _start = _end - numberOfItems + 1
      if(_start < 0){
        _start = 0
        _end = _start + numberOfItems - 1
      }
      
      // set start and end
      setStart(_start)
      setEnd(_end)
      setPage(Math.ceil(_end / numberOfItems))
    }
  }

  return (
    <div className="pagination flex-element flex-wrap flex-just-sp-between flex flex-align-cent">
      <div className="page-count">
        <span>Showing {start + 1} to {end + 1} of {total} entries</span>
      </div>
      <div className="page-buttons">
        <span onClick={handleFirst} className="page-button">First</span>
        <span onClick={handlePrevious} className="page-button">Previous</span>
        <span className="page-page">{page}</span>
        <span onClick={handleNext} className="page-button">Next</span>
        <span onClick={handleLast} className="page-button">Last</span>
      </div>
    </div>
  )
}

export default Pagination
