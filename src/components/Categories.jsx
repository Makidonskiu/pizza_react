import React from 'react';

export const Categories = ({items}) => {
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {items.map((item, index) => <li key = {index}>{item}</li>)}
      </ul>
    </div>
  );
};
