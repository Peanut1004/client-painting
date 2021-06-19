import React from 'react';
import { useTranslation } from 'react-i18next';

const PuttyPaint = () => {
  const { t } = useTranslation('common');

  return (
    <div className="service-better">
      <div className="container">
        <div className="service-better__columns">
          <div className="col-50"></div>
          <div className="col-50">
            <div className="service-better__heading">
              <h2>{t('serviceBetterSection.title')}</h2>
            </div>

            <div className="service-better__box">
              <div className="service-better__icon">
                <img src="../../assets/images/section/05.png" alt="images" />
              </div>
              <div className="service-better__content">
                <h3 className="service-better__content--title">
                  {t('serviceBetterSection.articleOne')}
                </h3>
                <p>Description</p>
              </div>
            </div>

            <div className="service-better__box">
              <div className="service-better__icon">
                <img src="../../assets/images/section/06.png" alt="images" />
              </div>
              <div className="service-better__content">
                <h3 className="service-better__content--title">
                  {t('serviceBetterSection.articleTwo')}
                </h3>
                <p>Description</p>
              </div>
            </div>

            <div className="service-better__box">
              <div className="service-better__icon">
                <img src="../../assets/images/section/07.png" alt="images" />
              </div>
              <div className="service-better__content">
                <h3 className="service-better__content--title">
                  {t('serviceBetterSection.articleThree')}
                </h3>
                <p>Description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuttyPaint;
