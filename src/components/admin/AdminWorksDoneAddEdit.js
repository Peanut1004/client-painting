import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {
  postWorksDone,
  getWorksDoneDetail,
  putWorksDone,
} from '../../redux/slice/adminWorksDoneAddEditSlice';

export default function AdminWorksDoneAddEdit() {
  const { t } = useTranslation('common');
  const { worksDoneId } = useParams();
  console.log(worksDoneId);
  const history = useHistory();
  const dispatch = useDispatch();
  const [worksDone, setWorksDone] = useState({
    image: '',
    name: '',
    price: '',
  });
  const { successError, loading, loadingGetWorksDone, error } = useSelector(
    state => state.worksDoneAddEdit
  );

  useEffect(() => {
    if (worksDoneId) {
      async function getDataWorksDone() {
        const res = await dispatch(getWorksDoneDetail(worksDoneId));
        if (!res.error) {
          setWorksDone({
            image: res.payload.image,
            name: res.payload.name,
            price: res.payload.price,
          });
        }
      }
      getDataWorksDone();
    }
  }, [dispatch, worksDoneId]);

  const onSubmit = async e => {
    e.preventDefault();

    if (!worksDoneId) {
      const res = await dispatch(postWorksDone(worksDone));
      if (res.error) {
        alert(res.error.message);
      } else if (res.payload.length) {
        alert(res.payload);
      } else {
        alert('Create WorksDone Success');
        history.push('/admin/worksDonesManagement');
      }
    } else {
      await dispatch(putWorksDone({ worksDoneId, worksDone }));
      alert('Edit Success');
      history.push('/admin/worksDonesManagement');
    }
  };

  return (
    <div className="admin-worksdone-add-edit frames__add-edit">
      <div className="container">
        {loadingGetWorksDone ? (
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
                  value={worksDone.image}
                  placeholder="VD: nhập link của hình ảnh"
                  onChange={e =>
                    setWorksDone({ ...worksDone, image: e.target.value })
                  }
                />
              </fieldset>
              <fieldset>
                <label>{t('admin.name')}:</label>
                <input
                  type="text"
                  value={worksDone.name}
                  onChange={e =>
                    setWorksDone({ ...worksDone, name: e.target.value })
                  }
                />
              </fieldset>
              <fieldset>
                <label>{t('admin.price')}:</label>
                <input
                  type="text"
                  value={worksDone.price}
                  onChange={e =>
                    setWorksDone({ ...worksDone, price: e.target.value })
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
                ) : worksDoneId ? (
                  t('admin.editWorksDone')
                ) : (
                  t('admin.addWorksDone')
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
