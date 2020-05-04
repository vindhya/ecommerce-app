import React from 'react';

import './Directory.scss';
import MenuItem from '../MenuItem/MenuItem';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'stickers',
          imageUrl:
            'https://cdn.shopify.com/s/files/1/1403/8979/products/40pcs-Small-Hamster-Self-made-Waterproof-Scrapbooking-Stickers-DIY-Craft-DIY-Sticker-Pakc-Photo-Albums-Deco.jpg_640x640_84d99fa1-c517-4881-b794-6f87213829f1_1024x1024.jpg?v=1484942449',
          id: 1,
          linkUrl: 'shop/stickers'
        },
        {
          title: 'pins',
          imageUrl:
            'https://i.pinimg.com/originals/6c/a2/70/6ca27074948b6415ee42a986ced7d142.jpg',
          id: 2,
          linkUrl: 'shop/pins'
        },
        {
          title: 'keycaps',
          imageUrl:
            'https://i.etsystatic.com/6643859/r/il/ccaf8b/2078990026/il_1588xN.2078990026_adfa.jpg',
          id: 3,
          linkUrl: 'shop/keycaps'
        },
        {
          title: 'stuffed animals',
          imageUrl:
            'https://www.blippo.com/media/catalog/product/cache/4/image/800x/040ec09b1e35df139433887a97daa66f/2/0/20200407_130.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/stuffed-animals'
        },
        {
          title: 'prints',
          imageUrl:
            'https://i.etsystatic.com/12856198/r/il/cf0b2e/2157394414/il_1588xN.2157394414_qdzx.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/prints'
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
