import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

export default function AdminSlideBar() {
  const { t } = useTranslation('common');

  const location = useLocation();

  const ADMIN_SLIDE_BAR = [
    { to: '/admin/usersManagement', title: t('admin.usersManagement') },
    { to: '/admin/productsManagement', title: t('admin.productsManagement') },
    {
      to: '/admin/worksDonesManagement',
      title: t('admin.worksDonesManagement'),
    },
    { to: '/admin/blogsManagement', title: t('admin.blogsManagement') },
  ];

  return (
    <div className="admin-slide-bar">
      <ul>
        {ADMIN_SLIDE_BAR.map((e, i) => (
          <li key={i}>
            <Link
              to={e.to}
              className={location.pathname === e.to ? 'active' : ''}
            >
              {e.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
