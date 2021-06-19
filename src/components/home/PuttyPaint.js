import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PuttyPaint = () => {
  const { t } = useTranslation('common');

  const { products, loading, error } = useSelector(state => state.products);
  const putty = 'putty';

  return (
    <div className="putty-paint">
      <div className="container">
        <div className="title-section text-center">
          <h2 className="flat-title color-one">{t('titleSection.putty')}</h2>
          <p>Description</p>
        </div>
        <div className="row putty-paint__columns four-columns">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error.message}</p>
          ) : (
            products
              .filter(e => e.categories === putty)
              .map((e, i) => (
                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={i}>
                  <div className="paint__box" key={i}>
                    <div className="paint__item">
                      <Link to={`/product-detail/${e.id}`}>
                        <img
                          src={e.image}
                          alt="images"
                          className="paint-image"
                        />
                      </Link>
                    </div>
                    <div className="group-button">
                      <div className="cart item-button">
                        <Link to="/">
                          <i className="fas fa-cart-plus"></i>
                        </Link>
                      </div>
                      <div className="search item-button">
                        <Link to={`/product-detail/${e.id}`}>
                          <i className="fas fa-search"></i>
                        </Link>
                      </div>
                      <div className="heart item-button">
                        <Link to="/">
                          <i className="fas fa-heart"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="paint__content">
                      <h3 className="paint__title">
                        <Link to={`/product-detail/${e.id}`}>{e.name}</Link>
                      </h3>
                      <p className="paint__ratings">
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i
                          className={
                            e.ratings >= 2 ? 'fas fa-star' : 'far fa-star'
                          }
                          aria-hidden="true"
                        ></i>
                        <i
                          className={
                            e.ratings >= 3 ? 'fas fa-star' : 'far fa-star'
                          }
                          aria-hidden="true"
                        ></i>
                        <i
                          className={
                            e.ratings >= 4 ? 'fas fa-star' : 'far fa-star'
                          }
                          aria-hidden="true"
                        ></i>
                        <i
                          className={
                            e.ratings >= 5 ? 'fas fa-star' : 'far fa-star'
                          }
                          aria-hidden="true"
                        ></i>
                      </p>
                      <div className="paint__price">
                        {/* <p className="old-price">Giá: {e.oldPrice}</p> */}
                        <p className="new-price">Giá: {e.newPrice}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
      <div className="image-position">
        <img src="../assets/images/section/02.png" alt="images" />
      </div>
    </div>
  );
};

export default PuttyPaint;
