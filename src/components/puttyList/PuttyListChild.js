import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlogs } from '../../redux/slice/blogsSlice';
import { getProducts } from '../../redux/slice/productsSlice';

const PuttyListChild = () => {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(state => state.products);
  const { blogs } = useSelector(state => state.blogs);
  const putty = 'putty';

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getBlogs());
  }, [dispatch]);

  return (
    <div>
      <div className="breadcrumbs">
        <div className="breadcrumbs__overlay"></div>
        <div className="container position-relative">
          <div className="breadcrumbs__link">
            <h1>{t('breadcrumbs.putty')}</h1>
            <Link to="/">{t('breadcrumbs.home')}</Link>
            <Link to="/">{t('breadcrumbs.putty')}</Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="listItem__hSidebar">
          <div className="col-70">
            <div className="putty-paint__columns three-columns">
              <div className="row ">
                {loading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p>{error.message}</p>
                ) : (
                  products
                    .filter(e => e.categories === putty)
                    .map((e, i) => (
                      <div
                        className="col-lg-4 col-md-4 col-sm-6 col-12"
                        key={i}
                      >
                        <div className="paint__box">
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
                              <Link to="/">{e.name}</Link>
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
                              <p className="new-price">Giá: Liên hệ</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                )}
              </div>
            </div>
          </div>
          <div className="col-30">
            <div className="sidebar__inner">
              <div className="sidebar__widget">
                <h4 className="sidebar__widget--title">
                  {t('widget.lastestNew')}
                </h4>
                <div className="sidebar__blog">
                  {loading ? (
                    <p>Loading...</p>
                  ) : error ? (
                    <p>{error.message}</p>
                  ) : (
                    blogs.map((e, i) => (
                      <div className="blog__box blogList blogListSmall" key={i}>
                        <div className="blog__poster">
                          <Link to={`/blog-detail/${e.id}`}>
                            <img src={e.image} alt="images" />
                          </Link>
                        </div>
                        <div className="blog__content">
                          <h3 className="blog__title">
                            <Link to={`/blog-detail/${e.id}`}>{e.name}</Link>
                          </h3>
                          <div class="blog__date">{e.date}</div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuttyListChild;
