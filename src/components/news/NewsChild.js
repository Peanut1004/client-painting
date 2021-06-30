import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlogs } from '../../redux/slice/blogsSlice';

const NewsChild = () => {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();

  const { blogs, loading, error } = useSelector(state => state.blogs);

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  return (
    <div>
      <div className="breadcrumbs">
        <div className="breadcrumbs__overlay"></div>
        <div className="container position-relative">
          <div className="breadcrumbs__link">
            <h1>{t('breadcrumbs.news')}</h1>
            <Link to="/">{t('breadcrumbs.home')}</Link>
            <Link to="/">{t('breadcrumbs.news')}</Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="pd100-70">
          <div className="row">
            <div className="col-lg-10 col-12">
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>{error.message}</p>
              ) : (
                blogs.map((e, i) => (
                  <div className="blog__box blogList blogListBig" key={i}>
                    <div className="blog__poster">
                      <Link to={`/blog-detail/${e.id}`}>
                        <img src={e.image} alt="images" />
                      </Link>
                    </div>
                    <div className="blog__content">
                      <h3 className="blog__title">
                        <Link to={`/blog-detail/${e.id}`}>{e.name}</Link>
                      </h3>
                      <div className="blog__date">{e.date}</div>
                      <p className="blog__description line-clamp-3">
                        {e.content}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="col-lg-2 col-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsChild;
