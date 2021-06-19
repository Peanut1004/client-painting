import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getChange } from '../../redux/slice/i18nSlice';

const HeaderTopBar = () => {
  const { t, i18n } = useTranslation('common');
  const history = useHistory();
  const dispatch = useDispatch();

  const { status } = useSelector(state => state.i18n);

  const token = localStorage.getItem('token');

  const handleLogOut = () => {
    localStorage.clear();
    history.push('/');
  };

  const handleVi = () => {
    i18n.changeLanguage('vi');
    dispatch(getChange(false));
  };

  const handleEn = () => {
    i18n.changeLanguage('en');
    dispatch(getChange(true));
  };

  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar__columns">
          <div className="topbar__logo">
            <Link to="/" title="Logo">
              <img src="../assets/images/logo/01.png" alt="images" />
            </Link>
          </div>

          <div className="topbar__contact">
            <div className="topbar__contact--inner">
              <i className="fas fa-phone-alt"></i>
              <div className="topbar__contact--content">
                <span>{t('contact.contact')}</span>
                <h4>036 2807 834</h4>
              </div>
            </div>
            <div className="topbar__contact--inner">
              <i className="far fa-clock"></i>
              <div className="topbar__contact--content">
                <span>{t('contact.openTime')}</span>
                <h4>24/7</h4>
              </div>
            </div>
          </div>
          {/* {token ? (
              <div className="topbar__lr">
                <Link to="/" onClick={handleLogOut}>
                  <i className="fa fa-sign-out"></i>
                  {t('authentication.logout')}
                </Link>
              </div>
            ) : (
              <div className="topbar__lr">
                <Link to="/login" className="topbar__lr--login">
                  <i className="fa fa-user"></i>
                  {t('authentication.login')}
                </Link>

                <Link to="/register" className="topbar__lr--register">
                  <i className="fa fa-user-plus"></i>
                  {t('authentication.register')}
                </Link>
              </div>
            )} */}

          <div className="topbar__language">
            <button
              className={
                status === false
                  ? 'topbar__language--vn active'
                  : 'topbar__language--vn'
              }
              onClick={handleVi}
            >
              VN
            </button>
            <button
              className={
                status === true
                  ? 'topbar__language--en active'
                  : 'topbar__language--en'
              }
              onClick={handleEn}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopBar;
