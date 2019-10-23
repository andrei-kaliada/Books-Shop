import React from 'react';
import { Menu, Popup, List, Image, Button } from 'semantic-ui-react';

const CartComponent = ({title, id, image, removeFromCarte}) => {
    return(
      <List selection verticalAlign='middle'>
      <List.Item>
        <List.Content floated="right">
          <Button onClick={removeFromCarte.bind(this,id)} color="red">Remove</Button>
        </List.Content>
        <Image avatar src={image} />
        <List.Content>
          <List.Header>{title}</List.Header>
        </List.Content>
      </List.Item>
    </List>
    );
};

const MenuComponents = ({totalPrice, count, items}) => {

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
      <Popup

        trigger ={
          <Menu.Item
          name='help'
          >
          Корзина (<b>{count ? count : '0'}</b>)
        </Menu.Item>
        }
        content={
          items.map(book =>  <CartComponent key={book.id} {...book}/>)
        }
        on="click"
        hideOnScroll
          />
        </Menu.Menu>
      </Menu>
    );
};

export default MenuComponents;
