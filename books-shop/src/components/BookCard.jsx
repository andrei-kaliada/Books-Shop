import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';

const BookCard = ({title, author, image, price, onAddedToCart}) => {

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
        onClick={onAddedToCart}
        >Добавить в корзину</Button>
      </Card>
    );
};

export default BookCard;