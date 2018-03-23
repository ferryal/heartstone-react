import React, { Component } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'

class NavBar extends Component {
  render(){
    return(
      <Menu className='menubar' fluid compact>
        <Menu.Item>
          <Dropdown className='menu-link' text='Game Guides'>
          </Dropdown>
        </Menu.Item>
        <Menu.Item>
          <Dropdown className='menu-link' text='Card Sets'>
          </Dropdown>
        </Menu.Item>
        <Menu.Item>
          <Dropdown className='menu-link' text='Community'>
          </Dropdown>
        </Menu.Item>
        <Menu.Item>
          <Dropdown className='menu-link' text='News'>
          </Dropdown>
        </Menu.Item>
        <Menu.Item>
          <Dropdown className='menu-link' text='Fireside Gatherings'>
          </Dropdown>
        </Menu.Item>
        <Menu.Item>
          <Dropdown className='menu-link' text='Esports'>
          </Dropdown>
        </Menu.Item>
      </Menu>
    )
  }
}

export default NavBar
