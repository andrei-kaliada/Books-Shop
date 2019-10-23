import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';

const BookCard = (book) => {

  const {title, author, image, price, addToCart, addedCount} = book;

    return(
        <Card>
        <Image src={image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>
            <span className='date'>{author}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='rub' />
            {price}
          </a>
        </Card.Content>
        <Button 
        style={{backgroundColor:'green',}}
        onClick={addToCart.bind(this,book)}
        >Добавить в корзину ({addedCount})</Button>
      </Card>
    );
};

export default BookCard;