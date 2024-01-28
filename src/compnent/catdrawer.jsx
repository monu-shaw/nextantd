'use client'
import React, { useState, useEffect } from 'react';
import { Drawer, List, Avatar, Menu } from 'antd';
import axios from 'axios';

const App = ({visible, setVisible}) => {
  const [categories, setCategories] = useState([]);
  

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const uniqueCategories = [...new Set(response.data.map((product) => product.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Drawer
        title="Categories"
        placement="left"
        onClose={onClose}
        open={visible}
      >
        <List
          dataSource={categories}
          renderItem={(item) => (
            <List.Item key={item}>
              <List.Item.Meta
                title={item}
              />
            </List.Item>
          )}
        />
      </Drawer>
    </>
  );
};

export default App;
