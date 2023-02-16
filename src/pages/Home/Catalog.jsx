import React from 'react';
import Card from '../../Components/Card';
import { Link } from 'react-router-dom';

const Catalog = () => {
  return (
    <section className='catalog'>
      <div className="container">
        <div className="catalog__title">
          <h3 className="catalog__title-text title">Хит продаж</h3>
          <button className="btn-secondary catalog-title-btn"><Link to={''}>Смотреть все</Link></button>
        </div>

        <div className="catalog__row">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
      
    </section>
  );
}

export default Catalog;
