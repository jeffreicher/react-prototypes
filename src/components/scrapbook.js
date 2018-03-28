import React from 'react';
import './css/scrapbook.css';
import ImageData from './image_data';
import ScrapImages from './scrapbook_images';

export default () => {
    const images = ImageData.map((img, index) => {
        return <ScrapImages key={index} about={img} />
    });
    return (
        <div className="scrapbook-container">
            {images}
        </div>
    );
}