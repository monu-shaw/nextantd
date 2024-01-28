'use client'
import React, { useState, useEffect } from 'react';
import { Card, Image, Row, Col, Typography, Button } from 'antd';
import axios from 'axios';

const ProductsCards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Row gutter={[8,8]}>
      {products.map((product) => (
            <Col xm={24} sm={24} md={8} lg={6}>
        <Card
            cover={<Image
                height={'220px'}
                src={product.image}
                alt={product.title}
              />}
        key={product.id}>
              
              <Typography.Title ellipsis={{rows:2}} level={4}>{product.title}</Typography.Title>
              <Typography.Paragraph ellipsis={{rows:3}}>{product.description}</Typography.Paragraph>
              <Typography.Text strong>${product.price} </Typography.Text>
              <Button type="primary">View Details</Button>
        </Card>
            </Col>
      ))}
    </Row>
  );
};

export default ProductsCards;
