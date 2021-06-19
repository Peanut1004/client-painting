import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getProducts } from '../../redux/slice/productsSlice';
import AdminSlideBar from '../partials/AdminSlideBar';
import HeaderTopBar from '../partials/HeaderTopBar';
import AdminAction from '../admin/AdminAction';

export default function AdminProductsManagement() {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();
  const history = useHistory();
  const { products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts());
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

  const ADMIN_PRODUCT_MANAGEMENT = [
    t('admin.id'),
    t('admin.image'),
    t('admin.name'),
    t('admin.categories'),
    t('admin.oldPrice'),
    t('admin.newPrice'),
    t('admin.ratings'),
    t('admin.description'),
    t('admin.action'),
  ];

  const handleAddProduct = () => {
    const addProductUrl = `/admin/productsManagement/add`;
    history.push(addProductUrl);
  };

  return (
    <div className="admin-product-management-page">
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
                  className="admin-management__button add-product"
                  onClick={handleAddProduct}
                >
                  {t('admin.addProduct')}
                </button>
                <table>
                  <thead>
                    <tr>
                      {ADMIN_PRODUCT_MANAGEMENT.map((e, i) => (
                        <th key={i}>{e}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((e, i) => (
                      <tr key={i}>
                        <td className="table__id" data-title="ID">
                          {e.id}
                        </td>
                        <td className="table__image" data-title="Image">
                          <img src={e.image} alt="images" />
                        </td>
                        <td className="table__name" data-title="Name">
                          <h4>{e.name}</h4>
                        </td>
                        <td
                          className="table__categories"
                          data-title="Categories"
                        >
                          {e.categories}
                        </td>
                        <td className="table__price" data-title="Old Price">
                          {e.oldPrice}
                        </td>
                        <td className="table__price" data-title="New Price">
                          {e.newPrice}
                        </td>
                        <td className="table__ratings" data-title="Ratings">
                          {e.ratings}
                        </td>
                        <td
                          className="table__description"
                          data-title="Description"
                        >
                          <p>{e.description}</p>
                        </td>
                        <td className="table__action">
                          <AdminAction productId={e.id} />
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
