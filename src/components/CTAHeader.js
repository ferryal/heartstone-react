import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Menu, Image, Dropdown, Input } from 'semantic-ui-react'


class CTAHeader extends Component {
  render() {
    return (
      <Menu className='infopanel' fluid compact>
        <Menu.Menu position='left'>
          <Link to='/'>
            <Image src='images/logo-text-sm.png' size='small'/>
          </Link>
        </Menu.Menu>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input
              className='searchbar'
              icon='search'
              iconPosition='left'
              label={
                <Dropdown className='dropdownsearch' text='category'>
                  <Dropdown.Menu className='dropdownsearchmenu'>
                    <Dropdown.Item className='dropdownsearchitem' text='card sets' />
                    <Dropdown.Divider />
                    <Dropdown.Item className='dropdownsearchitem' text='guide' />
                    <Dropdown.Divider />
                    <Dropdown.Item className='dropdownsearchitem' text='adventures' />
                    <Dropdown.Divider />
                    <Dropdown.Item className='dropdownsearchitem' text='forum' />
                    <Dropdown.Divider />
                    <Dropdown.Item className='dropdownsearchitem' text='news' />
                    <Dropdown.Divider />
                    <Dropdown.Item className='dropdownsearchitem' text='heroes' />
                  </Dropdown.Menu>
                </Dropdown>
              }
              labelPosition='right'
              placeholder='Search'
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default CTAHeader
