import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import {
  getProductDetail,
  getProductDetailEmpty,
} from '../../redux/slice/productsSlice';

const ProductDetailChild = () => {
  const { t } = useTranslation('common');
  const { productId } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const { productDetail, loading, error } = useSelector(
    state => state.products
  );

  useEffect(() => {
    dispatch(getProductDetailEmpty());
    dispatch(getProductDetail(productId));
  }, [dispatch, productId]);

  return (
    <div>
      <div className="breadcrumbs">
        <div className="breadcrumbs__overlay"></div>
        <div className="container position-relative">
          <div className="breadcrumbs__link">
            <h1>{t('breadcrumbs.productDetail')}</h1>
            <Link to="/">{t('breadcrumbs.home')}</Link>
            <Link to={location.pathname}>{t('breadcrumbs.productDetail')}</Link>
          </div>
        </div>
      </div>

      <div className="product-detail">
        <div className="container">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error.message}</p>
          ) : (
            productDetail.map((e, i) => (
              <div className="product-detail__columns" key={i}>
                <div className="row">
                  <div className="col-lg-5 col-12">
                    <div className="product-detail__image">
                      <img src={e.image} alt="images" />
                    </div>
                  </div>
                  <div className="col-lg-7 col-12">
                    <div className="product-detail__content">
                      <h3 className="product-detail__content--name">
                        <Link to="/">{e.name}</Link>
                      </h3>

                      <div className="product-detail__content--ratings">
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
                      </div>

                      <div className="product-detail__content--price">
                        Giá: {e.newPrice}
                      </div>
                      <div className="product-detail__line"></div>
                      <div className="product-detail__info">
                        <div className="product-detail__info--categories">
                          <span>Thể loại: </span> {e.categories}
                        </div>
                        <div className="product-detail__info--color">
                          <span>Color: </span> Liên Hệ
                        </div>
                        <div className="product-detail__info--description">
                          <span>Mô tả: </span> {e.description}
                        </div>
                      </div>
                      <div className="product-detail__line"></div>
                      <div className="product-detail__hotline">
                        <span>Hỗ trợ trực tiếp: </span>036 2807 834
                      </div>
                      <div className="product-detail__line"></div>
                      <div className="product-detail__social-link">
                        <ul>
                          <li>
                            <Link to="/" className="facebook">
                              <i
                                className="fa fa-facebook"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/" className="skype">
                              <i className="fa fa-skype" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/" className="instagram">
                              <i
                                className="fa fa-instagram"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/" className="gmail">
                              <i
                                className="fa fa-envelope-o"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailChild;
