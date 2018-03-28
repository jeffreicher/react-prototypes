import React from 'react';

const ScrapImages = (props) => {
    const {src} = props.about;
    return (
        <img className="scrapbook-image" src={src} />
    );
}
export default ScrapImages;