import React from 'react'

function StockDetail({ title, description }) {
  return (
    <div className="stockdetailblock">
      <div className="stockdetailblockTitle">{title}</div>
      <div className="stockdetailblockDescription">{description}</div>
    </div>
  )
}

export default StockDetail
