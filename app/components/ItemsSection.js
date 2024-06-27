import React from 'react';
import ItemCard from './ItemCard';
import tshirtW from '@/app/assets/imgs/tshirtW.webp';
import hoodieB from '@/app/assets/imgs/hoodieB.webp';
import shortB from '@/app/assets/imgs/shortB.webp';
import capP from '@/app/assets/imgs/capP.webp';
import capG from '@/app/assets/imgs/capG.webp';
import bagB from '@/app/assets/imgs/bagB.webp';
import bagR from '@/app/assets/imgs/bagR.webp';
import shoesP from '@/app/assets/imgs/shoesP.webp';
import shoesB from '@/app/assets/imgs/shoesB.webp';
import flipFlopP from '@/app/assets/imgs/flipFlopP.webp';
import flipFlopO from '@/app/assets/imgs/flipFlopO.webp';
import braceletW from '@/app/assets/imgs/braceletW.webp';

export default function ItemsSection() {
    const items = [
        { name: 'item1', price: 10, img: tshirtW },
        { name: 'item2', price: 20, img: hoodieB },
        { name: 'item3', price: 30, img: shortB },
        { name: 'item4', price: 5, img: capP },
        { name: 'item5', price: 88, img: capG },
        { name: 'item6', price: 7, img: bagB },
        { name: 'item7', price: 12, img: bagR },
        { name: 'item8', price: 53, img: shoesP },
        { name: 'item9', price: 11, img: shoesB },
        { name: 'item10', price: 4, img: flipFlopP },
        { name: 'item11', price: 8, img: flipFlopO },
        { name: 'item12', price: 93, img: braceletW },
    ];
    return (
        <article className="grid grid-cols-4 gap-8 w-full h-full mt-4">
            {items.map((item, index) => (
                <ItemCard
                    key={index + item}
                    itemName={item.name}
                    itemPrice={item.price}
                    itemImg={item.img}
                />
            ))}
        </article>
    );
}
