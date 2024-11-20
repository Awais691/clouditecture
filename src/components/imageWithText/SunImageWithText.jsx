import React from 'react'

const SunImageWithText = ({data}) => {
    console.log("sumImageData => ",data)
  return (
    <>
    <div className="flex">
        <div className="image">
            <img src={data.image} alt={data.image} />
        </div>
        <div className="text-content">
            <h4>{data.title}</h4>
            <p>{data.description}</p>
        </div>
    </div>
    </>
  )
}

export default SunImageWithText