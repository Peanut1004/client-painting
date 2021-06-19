import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getWorksDonesHome } from '../../redux/slice/worksDonesSlice';

const WorksDone = () => {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();

  const { worksDones, loading, error } = useSelector(state => state.worksDones);

  useEffect(() => {
    dispatch(getWorksDonesHome());
  }, [dispatch]);

  return (
    <div className="works-done">
      <div className="container">
        <div className="title-section text-center">
          <h2 className="flat-title color-one">
            {t('titleSection.worksDone')}
          </h2>
          <p>Description</p>
        </div>
        <div className="works-done__grid">
          <div className="row">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error.message}</p>
            ) : (
              worksDones.map((e, i) => (
                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={i}>
                  <div className="works-done__box">
                    <div className="works-done__image">
                      <img src={e.image} alt="image" />
                      <Link to={`/worksDone-detail/${e.id}`}>
                        <i className="fas fa-link"></i>
                      </Link>
                    </div>
                    <div className="works-done__info">
                      <h3 className="works-done__info--name">
                        <Link to={`/worksDone-detail/${e.id}`}>{e.name}</Link>
                      </h3>
                      <div className="works-done__info--price">
                        Giá: {e.price}
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

export default WorksDone;
