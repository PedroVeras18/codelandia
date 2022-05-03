import './Card.css';
import React from 'react';

import { FaRegHeart } from 'react-icons/fa'

export default function Card(props){
    return(
        <div className="Card">
            <div className="Primeira-Linha">
                <p>02 de jul, 2021</p>
                <FaRegHeart color='#574AE8' size={20} cursor='pointer'></FaRegHeart>
            </div>
            <div className="Title">
                <p>{props.title}</p>
            </div>
            <div className="SubTitle">
                <p>{props.subtitle}</p>
            </div>
        </div>
    )
}