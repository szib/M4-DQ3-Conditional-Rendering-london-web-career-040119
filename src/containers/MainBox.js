import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    selected: 'profile'
  }

  clickHandler = (e) => {
    this.setState({
      selected: e.target.id
    })
  }

  render() {

    const detailsToDisplay = () => {
      switch (this.state.selected) {
        case 'profile':
          return (<Profile></Profile>)
        case 'photo':
          return <Photos></Photos>
        case 'cocktail':
          return <Cocktails></Cocktails>
        case 'pokemon':
          return <Pokemon></Pokemon>
        default:
          break;
      }
    }

    return (
      <div>
        <MenuBar selected={this.state.selected} clickHandler={this.clickHandler}/>
        {detailsToDisplay()}
      </div>
    )
  }

}

export default MainBox
