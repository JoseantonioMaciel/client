import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Services() {
return (
  <ImageList sx={{ width: 500, }}  cols={2}>
    {itemData.map((item) => (
      <ImageListItem key={item.img}>
        <img
          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>
);
}

const itemData = [
{
  img: "https://drive.google.com/uc?/export=view&id=1EsrfBj7t3nM_8iOE-Z-SwApaaI5SBVEB",
  title: 'Breakfast',
},
{
  img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
  title: 'Burger',
},
{
  img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
  title: 'Camera',
},
{
  img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
  title: 'Coffee',
},
];
