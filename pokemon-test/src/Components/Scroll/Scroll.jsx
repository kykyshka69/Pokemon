import React from 'react';
const Scroll = (props) => {
    return (
        <div className={'scroll-mouse scroll-mouse__block'}>
        <span className={'scroll-mouse__block--text'}>Tap to scroll down</span>
        <svg onClick={props.onClick} style={{cursor: 'pointer'}}
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="36"
      fill="none"
      viewBox="0 0 43 36"
    >
      <path
        fill="#474747"
        d="M10.5 12H.5C.5 6.08 4.84 1.14 10.5.18V12zm26-4h-4v12h-6l8 8 8-8h-6V8zM14.5.18V12h10c0-5.92-4.34-10.86-10-11.82zM.5 24c0 6.6 5.4 12 12 12s12-5.4 12-12v-8H.5v8z"
      ></path>
    </svg>
        </div>
    )
}

export default Scroll
