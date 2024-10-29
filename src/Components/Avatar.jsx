import React from 'react'

const Avatar = ({ name }) => {
    const getInitials = (name) => {
        let name_arr = name.split(' ');
        // console.log(name_arr);
        let ini = ''
        for(let i=0; i<name_arr.length; i++){
            ini += `${name_arr[i][0]}`
        }
        return ini;
    }
    const generateBgColor = (name) => {
        let hash = 0;
        let i = 0;
        for(i=0; i<name.length; i++){
            hash = name.charCodeAt(i) + ((hash << 5) - hash)
        }
        let color = '#';
          for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        return color;
    }
    let initials = getInitials(name)
    let bgcolor = generateBgColor(name)
    const cusStyle = {
        display: "flex",
        height: "20px",
        width: "20px",
        borderRadius: "100px",
        color: "white",
        background: bgcolor,
    }
  return (
    <div style={cusStyle}>
        <span style={{margin: 'auto', fontSize: '10px'}}> {initials} </span>
    </div>
  )
}

export default Avatar