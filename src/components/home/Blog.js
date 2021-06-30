import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlogsHome } from '../../redux/slice/blogsSlice';

const Blog = () => {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();

  const { blogs, loading, error } = useSelector(state => state.blogs);
  console.log(blogs);

  useEffect(() => {
    dispatch(getBlogsHome());
  }, [dispatch]);

  return (
    <div className="blog">
      <div className="container">
        <div className="title-section text-center">
          <h2 className="flat-title color-one">{t('titleSection.blog')}</h2>
          <p>Description</p>
        </div>
        <div className="blog__columns">
          <div className="row ">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error.message}</p>
            ) : (
              blogs.map((e, i) => (
                <div className="col-lg-4 col-md-4 col-sm-6 col-12" key={i}>
                  <div className="blog__box blogGrid">
                    <div className="blog__poster">
                      <Link to={`/blog-detail/${e.id}`}>
                        <img src={e.image} alt="images" />
                      </Link>
                    </div>
                    <div className="blog__content">
                      <div className="blog__date">{e.date}</div>
                      <h3 className="blog__title">
                        <Link to={`/blog-detail/${e.id}`}>{e.name}</Link>
                      </h3>
                      <p className="blog__description line-clamp-3">
                        {e.content}
                      </p>
                      <div className="blog__continue">
                        <Link to={`/blog-detail/${e.id}`}>Đọc tiếp</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
