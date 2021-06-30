import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {
  postProduct,
  getProductDetail,
  putProduct,
} from '../../redux/slice/adminProductAddEditSlice';

export default function AdminProductAddEdit() {
  const { t } = useTranslation('common');
  const { productId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    image: '',
    name: '',
    ratings: '',
    categories: '',
    oldPrice: '',
    newPrice: '',
    description: '',
  });
  const { successError, loading, loadingGetProduct, error } = useSelector(
    state => state.productAddEdit
  );

  useEffect(() => {
    if (productId) {
      async function getDataProduct() {
        const res = await dispatch(getProductDetail(productId));
        if (!res.error) {
          setProduct({
            image: res.payload.image,
            name: res.payload.name,
            categories: res.payload.categories,
            oldPrice: res.payload.oldPrice,
            newPrice: res.payload.newPrice,
            ratings: res.payload.ratings,
            description: res.payload.description,
          });
        }
      }
      getDataProduct();
    }
  }, [dispatch, productId]);

  const onSubmit = async e => {
    e.preventDefault();

    if (!productId) {
      const res = await dispatch(postProduct(product));
      if (res.error) {
        alert(res.error.message);
      } else if (res.payload.length) {
        alert(res.payload);
      } else {
        alert('Create Product Success');
        history.push('/admin/productsManagement');
      }
    } else {
      await dispatch(putProduct({ productId, product }));
      alert('Edit Success');
      history.push('/admin/productsManagement');
    }
  };

  return (
    <div className="admin-product-add-edit frames__add-edit">
      <div className="container">
        {loadingGetProduct ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error.message}</p>
        ) : (
          <form onSubmit={onSubmit}>
            <div className="admin-frames">
              <fieldset>
                <label>{t('admin.image')}:</label>
                <input
                  type="text"
                  value={product.image}
                  placeholder="VD: nhập link của hình ảnh"
                  onChange={e =>
                    setProduct({ ...product, image: e.target.value })
                  }
                />
              </fieldset>
              <fieldset>
                <label>{t('admin.name')}:</label>
                <input
                  type="text"
                  value={product.name}
                  onChange={e =>
                    setProduct({ ...product, name: e.target.value })
                  }
                />
              </fieldset>
              {/* <fieldset>
                <label>{t('admin.categories')}:</label>
                <input
                  type="text"
                  value={product.categories}
                  onChange={e =>
                    setProduct({ ...product, categories: e.target.value })
                  }
                />
              </fieldset> */}
              <fieldset>
                <label>{t('admin.categories')} :</label>
                <select
                  value={product.categories}
                  onChange={e =>
                    setProduct({ ...product, categories: e.target.value })
                  }
                >
                  <option value="" disabled></option>
                  <option value="furniture">Sơn Nội Thất</option>
                  <option value="exterior">Sơn Ngoại Thất</option>
                  <option value="putty">Bội trét</option>
                </select>
              </fieldset>
              <fieldset>
                <label>{t('admin.oldPrice')}:</label>
                <input
                  type="text"
                  value={product.oldPrice}
                  onChange={e =>
                    setProduct({ ...product, oldPrice: e.target.value })
                  }
                />
              </fieldset>
              <fieldset>
                <label>{t('admin.newPrice')}:</label>
                <input
                  type="text"
                  value={product.newPrice}
                  onChange={e =>
                    setProduct({ ...product, newPrice: e.target.value })
                  }
                />
              </fieldset>
              <fieldset>
                <label>{t('admin.ratings')}:</label>
                <input
                  type="number"
                  value={product.ratings}
                  min="1"
                  max="5"
                  onChange={e =>
                    setProduct({ ...product, ratings: e.target.value })
                  }
                />
              </fieldset>
              <fieldset>
                <label>{t('admin.description')}:</label>
                <textarea
                  type="text"
                  value={product.description}
                  onChange={e =>
                    setProduct({ ...product, description: e.target.value })
                  }
                />
              </fieldset>
              <button className="submit" type="submit">
                {loading ? (
                  <i className="fas fa-spinner fa-spin"></i>
                ) : error ? (
                  t('authentication.retry')
                ) : successError.length ? (
                  t('authentication.retry')
                ) : productId ? (
                  t('admin.editProduct')
                ) : (
                  t('admin.addProduct')
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
