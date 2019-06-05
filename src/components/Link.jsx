import React from 'react'

const Link = (props) => {
  const aClass = props.selected === props.name ? 'item active' : 'item';
  const iClass = `${props.icon} large icon`;
  return (
    <a className={aClass} id={props.name} onClick={props.clickHandler}>
        <i className={iClass} id={props.name}/>
    </a>
  )
}

export default Link