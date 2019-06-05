import React from 'react'
import Link from './Link'


const MenuBar = (props) => {

  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  return (
    <div className="ui four item menu">
      <Link {...props} icon="user" name="profile"></Link>
      <Link {...props} icon="photo" name="photo"></Link>
      <Link {...props} icon="cocktail" name="cocktail"></Link>
      <Link {...props} icon="themeisle" name="pokemon"></Link>
    </div>
  )

}

export default MenuBar
