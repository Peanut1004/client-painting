import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import {
  getBlogDetail,
  getBlogDetailEmpty,
} from '../../redux/slice/blogsSlice';

const BlogDetailChild = () => {
  const { t } = useTranslation('common');
  const { blogId } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const { blogDetail, loading, error } = useSelector(state => state.blogs);

  useEffect(() => {
    dispatch(getBlogDetailEmpty());
    dispatch(getBlogDetail(blogId));
  }, [dispatch, blogId]);

  return (
    <div>
      <div className="breadcrumbs">
        <div className="breadcrumbs__overlay"></div>
        <div className="container position-relative">
          <div className="breadcrumbs__link">
            <h1>{t('breadcrumbs.blogDetail')}</h1>
            <Link to="/">{t('breadcrumbs.home')}</Link>
            <Link to={location.pathname}>{t('breadcrumbs.blogDetail')}</Link>
          </div>
        </div>
      </div>
      <div className="blog-detail">
        <div className="container">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error.message}</p>
          ) : (
            blogDetail.map((e, i) => (
              <div className="blog-detail__wrap" key={i}>
                <div className="blog-detail__image">
                  <img src={e.image} alt="image" />
                </div>
                <div className="blog-detail__date">2022-06-23</div>
                <h3 className="blog-detail__title">{e.name}</h3>
                <p>{e.content}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailChild;
