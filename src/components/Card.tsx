import React, {FC, useState} from 'react';

export enum CardVariation {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width: string;
    height: string;
    variation: CardVariation;
}

const Card: FC<CardProps> = ({width, height, variation, children}) => {
    const [state, setState] = useState(0);
    return (
        <div style={{width, height, 
                    border: variation === CardVariation.outlined ? '1px solid gray' : 'none',
                    background: variation === CardVariation.primary ? 'lightgray' : ''}}>
            {children}
        </div>
    );
};

export default Card;