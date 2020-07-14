import React from 'react'

export default function Title({ title, align }) {
    console.log(align);
    return (
        <div className={align === "section-title-center" ? "section-title" : "section-titleleft"} >
            <h4>{title}</h4>
            <div></div>
        </div >
    )
}