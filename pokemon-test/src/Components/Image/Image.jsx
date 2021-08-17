import React from 'react'

const Image = (props) => {
    const {src, alt, width, height, className} = props
    return (
       <img src={src} className={className} width={width} height={height} alt={alt} />
    )
}

export default Image
