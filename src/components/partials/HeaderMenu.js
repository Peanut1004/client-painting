import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getProductSearch } from '../../redux/slice/searchProductSlice';

const HeaderMenu = () => {
  const { t } = useTranslation('common');
  const location = useLocation();
  const dispatch = useDispatch();

  const { listProduct, loading, error } = useSelector(
    state => state.searchProduct
  );
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getProductSearch(search));
  }, [dispatch, search]);

  const showProductSearch = () => {
    return listProduct.map((e, i) => (
      <li key={i}>
        <Link to={`/movie-detail/${e.id}`}>
          <img src={e.image} alt="image" />
          <p>{e.name}</p>
        </Link>
      </li>
    ));
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__flex">
          <div className="menu__content">
            <div className="menu__mobile" onClick={() => setOpen(!open)}>
              <i className="fa fa-bars"></i>
              <ul
                className={
                  open ? 'menu__mobile--sub block' : 'menu__mobile--sub none'
                }
              >
                <li className={location.pathname === '/' ? 'active' : ''}>
                  <Link to="/">{t('menu.home')}</Link>
                </li>
                <li
                  className={
                    location.pathname === '/interior-paint-list' ? 'active' : ''
                  }
                >
                  <Link to="/interior-paint-list">
                    {t('menu.interiorPaint')}
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === '/exterior-paint-list' ? 'active' : ''
                  }
                >
                  <Link to="/exterior-paint-list">
                    {t('menu.exteriorPaint')}
                  </Link>
                </li>

                <li
                  className={
                    location.pathname === '/putty-list' ? 'active' : ''
                  }
                >
                  <Link to="/putty-list">{t('menu.putty')}</Link>
                </li>
                <li
                  className={location.pathname === '/contact' ? 'active' : ''}
                >
                  <Link to="/contact">{t('menu.contact')}</Link>
                </li>
              </ul>
            </div>
            <nav className="menu__nav">
              <ul className="menu">
                <li className="menu__list">
                  <Link
                    to="/"
                    className={
                      location.pathname === '/'
                        ? 'menu__list--link active'
                        : 'menu__list--link'
                    }
                  >
                    {t('menu.home')}
                  </Link>
                </li>

                <li className="menu__list">
                  <Link
                    to="/interior-paint-list"
                    className={
                      location.pathname === '/interior-paint-list'
                        ? 'menu__list--link active'
                        : 'menu__list--link'
                    }
                  >
                    {t('menu.interiorPaint')}
                  </Link>
                </li>

                <li className="menu__list">
                  <Link
                    to="/exterior-paint-list"
                    className={
                      location.pathname === '/exterior-paint-list'
                        ? 'menu__list--link active'
                        : 'menu__list--link'
                    }
                  >
                    {t('menu.exteriorPaint')}
                  </Link>
                </li>

                <li className="menu__list">
                  <Link
                    to="/putty-list"
                    className={
                      location.pathname === '/putty-list'
                        ? 'menu__list--link active'
                        : 'menu__list--link'
                    }
                  >
                    {t('menu.putty')}
                  </Link>
                </li>

                {/* <li className="menu__list">
                    <Link
                      to="/member"
                      className={
                        location.pathname === '/member'
                          ? 'menu__list--link active'
                          : 'menu__list--link'
                      }
                    >
                      {t('menu.member')}
                    </Link>
                  </li> */}
                <li className="menu__list">
                  <Link
                    to="/contact"
                    className={
                      location.pathname === '/contact'
                        ? 'menu__list--link active'
                        : 'menu__list--link'
                    }
                  >
                    {t('menu.contact')}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__search">
            {error ? (
              <p>
                {t('headerTopBar.search')} : {error.message}
              </p>
            ) : (
              <form className="header__search--form">
                <div className="input-append">
                  <input
                    placeholder={
                      loading
                        ? t('headerTopBar.loading')
                        : t('headerTopBar.search')
                    }
                    type="search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                  <button>
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </form>
            )}

            {search ? <ul>{showProductSearch()}</ul> : ''}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMenu;
