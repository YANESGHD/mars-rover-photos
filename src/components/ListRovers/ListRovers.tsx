import { FC } from 'react';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
// import { ProductCard } from './ProductCard';

export const ListRovers: FC = () => {
  return (
    <Container>
        <Grid container justifyContent='center' alignItems='center' xs={12}>
          {products.map((product) => (
            <Grid item xs={3}>
              <p>Item</p>
              {/* <ProductCard key={product.name} product={product} />    */}
            </Grid>
          ))}
        </Grid>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 40px;
`;

const products = [
    {
      "name": "Red Bench",
      "category": "people",
      "price": 3.89,
      "currency": "USD",
      "image": {
        "src": "https://images.pexels.com/photos/65958/bench-red-sky-blue-65958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "alt": ""
      },
      "bestseller": true,
      "featured": false,
      "details": null
    },
    {
      "name": "Egg Balloon",
      "category": "people",
      "price": 93.89,
      "currency": "USD",
      "image": {
        "src": "https://images.pexels.com/photos/9958944/pexels-photo-9958944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "alt": ""
      },
      "bestseller": true,
      "featured": false,
      "details": null
    },
    {
      "name": "Man",
      "category": "people",
      "price": 100,
      "currency": "USD",
      "image": {
        "src": "https://images.pexels.com/photos/9794899/pexels-photo-9794899.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "alt": ""
      },
      "bestseller": false,
      "featured": false,
      "details": null
    },
    {
      "name": "Red Bench",
      "category": "people",
      "price": 3.89,
      "currency": "USD",
      "image": {
        "src": "https://images.pexels.com/photos/65958/bench-red-sky-blue-65958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "alt": ""
      },
      "bestseller": true,
      "featured": false,
      "details": null
    },
    {
      "name": "Egg Balloon",
      "category": "people",
      "price": 93.89,
      "currency": "USD",
      "image": {
        "src": "https://images.pexels.com/photos/9958944/pexels-photo-9958944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "alt": ""
      },
      "bestseller": true,
      "featured": false,
      "details": null
    },
    {
      "name": "Man",
      "category": "people",
      "price": 100,
      "currency": "USD",
      "image": {
        "src": "https://images.pexels.com/photos/9794899/pexels-photo-9794899.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "alt": ""
      },
      "bestseller": false,
      "featured": false,
      "details": null
    },
    {
      "name": "Woman",
      "category": "people",
      "price": 100,
      "currency": "USD",
      "image": {
        "src": "https://images.pexels.com/photos/9640282/pexels-photo-9640282.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "alt": ""
      },
      "bestseller": false,
      "featured": false,
      "details": null
    },
    {
      "name": "Architecture",
      "category": "landmarks",
      "price": 101,
      "currency": "USD",
      "image": {
        "src": "https://images.pexels.com/photos/3757136/pexels-photo-3757136.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "alt": ""
      },
      "bestseller": true,
      "featured": false,
      "details": null
    }
  ]