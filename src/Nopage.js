import React from 'react'

const Nopage = () => {
    return (
        <div className="nopage"
            style={{
                marginTop: "10rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <h1
                style={{
                    padding: "2rem",
                }}
            >{`Unable to Process now try sometime later!!! :)`}</h1>
            <a href='/'>Visit Our Homepage  "npm --prefix \"$RESOURCE_DIR\" run lint"</a>
        </div>
    )
}

export default Nopage