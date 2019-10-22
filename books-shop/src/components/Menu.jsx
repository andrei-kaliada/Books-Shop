import React from 'react';
import { Menu } from 'semantic-ui-react';

const MenuComponents = ({totalPrice, count}) => {

    return(
        <Menu>
        <Menu.Item
          name='browse'
          
        >
          Books Shop
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item
            name='signup'
           
          >
            Итого: &nbsp; <b>{totalPrice ? totalPrice : '0'}</b>
          </Menu.Item>

          <Menu.Item
            name='help'
           
          >
            Корзина (<b>{count ? count : '0'}</b>)
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
};

export default MenuComponents;
