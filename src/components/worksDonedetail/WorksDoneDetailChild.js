import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import {
  getWorksDoneDetail,
  getWorksDoneDetailEmpty,
} from '../../redux/slice/worksDonesSlice';

const WorksDoneDetailChild = () => {
  const { t } = useTranslation('common');
  const { worksDoneId } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const { worksDoneDetail, loading, error } = useSelector(
    state => state.worksDones
  );

  useEffect(() => {
    dispatch(getWorksDoneDetailEmpty());
    dispatch(getWorksDoneDetail(worksDoneId));
  }, [dispatch, worksDoneId]);

  return (
    <div>
      <div className="breadcrumbs">
        <div className="breadcrumbs__overlay"></div>
        <div className="container position-relative">
          <div className="breadcrumbs__link">
            <h1>{t('breadcrumbs.worksDoneDetail')}</h1>
            <Link to="/">{t('breadcrumbs.home')}</Link>
            <Link to={location.pathname}>
              {t('breadcrumbs.worksDoneDetail')}
            </Link>
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
            worksDoneDetail.map((e, i) => (
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

                      <div className="product-detail__content--price">
                        Giá: {e.price}
                      </div>
                      {/* <div className="product-detail__line"></div> */}
                      {/* <div className="product-detail__info">
                      <div className="product-detail__info--categories">
                        <span>Thể loại: </span> {e.categories}
                      </div>
                      <div className="product-detail__info--color">
                        <span>Color: </span> Liên Hệ
                      </div>
                      <div className="product-detail__info--description">
                        <span>Mô tả: </span> {e.description}
                      </div>
                    </div> */}
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

export default WorksDoneDetailChild;
