import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getWorksDones } from '../../redux/slice/worksDonesSlice';
import AdminSlideBar from '../partials/AdminSlideBar';
import HeaderTopBar from '../partials/HeaderTopBar';
import AdminAction from '../admin/AdminAction';

export default function AdminWorksDonesManagement() {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();
  const history = useHistory();
  const { worksDones, loading, error } = useSelector(state => state.worksDones);

  useEffect(() => {
    dispatch(getWorksDones());
  }, [dispatch]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const base64Url = token.split('.')[1];
      const getValueToToken = JSON.parse(atob(base64Url));
      const getEmailToToken = getValueToToken.email;
      if (getEmailToToken !== 'admin@gmail.com') {
        history.push('/');
      }
    } else {
      history.push('/');
    }
  }, [history]);

  const ADMIN_WORKSDONE_MANAGEMENT = [
    t('admin.id'),
    t('admin.image'),
    t('admin.name'),
    t('admin.price'),
    t('admin.action'),
  ];

  const handleAddWorksDone = () => {
    const addWorksDoneUrl = `/admin/worksDonesManagement/add`;
    history.push(addWorksDoneUrl);
  };

  return (
    <div className="admin-worksDone-management-page">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <div>
          {/* <HeaderTopBar /> */}
          <div className="admin">
            <div className="admin__left">
              <AdminSlideBar />
            </div>
            <div className="admin__right">
              <div className="admin-management">
                <button
                  className="admin-management__button add-worksDone"
                  onClick={handleAddWorksDone}
                >
                  {t('admin.addWorksDone')}
                </button>
                <table>
                  <thead>
                    <tr>
                      {ADMIN_WORKSDONE_MANAGEMENT.map((e, i) => (
                        <th key={i}>{e}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {worksDones.map((e, i) => (
                      <tr key={i}>
                        <td className="table__id" data-title="ID">
                          {e.id}
                        </td>
                        <td className="table__image" data-title="Image">
                          <img src={e.image} alt="image" />
                        </td>
                        <td className="table__name" data-title="Name">
                          {e.name}
                        </td>
                        <td className="table__price" data-title="Price">
                          {e.price}
                        </td>
                        <td className="table__action">
                          <AdminAction worksDoneId={e.id} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
