import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import productsApi from '../../api/productsApi';
import usersApi from '../../api/usersApi';
import blogsApi from '../../api/blogsApi';
import worksDonesApi from '../../api/worksDonesApi';
import { removeProduct } from '../../redux/slice/productsSlice';
import { removeUser } from '../../redux/slice/adminUsersManagementSlice';
import { removeWorksDone } from '../../redux/slice/worksDonesSlice';
import { removeBlog } from '../../redux/slice/blogsSlice';

export default function AdminAction(props) {
  const { t } = useTranslation('common');

  const { userId, productId, worksDoneId, blogId } = props;

  const dispatch = useDispatch();

  const history = useHistory();

  const handleRemove = (userId, productId, worksDoneId, blogId) => {
    if (userId) {
      if (window.confirm(t('admin.confirmUser'))) {
        dispatch(removeUser(userId));
        usersApi.deleteUser(userId);
      }
    }
    if (productId) {
      if (window.confirm(t('admin.confirmProduct'))) {
        dispatch(removeProduct(productId));
        productsApi.deleteProduct(productId);
      }
    }
    if (worksDoneId) {
      if (window.confirm(t('admin.confirmWorksDone'))) {
        dispatch(removeWorksDone(worksDoneId));
        worksDonesApi.deleteWorksDone(worksDoneId);
      }
    }
    if (blogId) {
      if (window.confirm(t('admin.confirmBlog'))) {
        dispatch(removeBlog(blogId));
        blogsApi.deleteBlog(blogId);
      }
    }
  };

  const handleEdit = (userId, productId, worksDoneId, blogId) => {
    if (userId) {
      const editUserUrl = `/admin/usersManagement/edit/${userId}`;
      history.push(editUserUrl);
    }
    if (productId) {
      const editProductUrl = `/admin/productsManagement/edit/${productId}`;
      history.push(editProductUrl);
    }
    if (worksDoneId) {
      const editWorksDonetUrl = `/admin/worksDonesManagement/edit/${worksDoneId}`;
      history.push(editWorksDonetUrl);
    }
    if (blogId) {
      const editBlogUrl = `/admin/blogsManagement/edit/${blogId}`;
      history.push(editBlogUrl);
    }
  };

  return (
    <div className="admin-action">
      <button
        className="admin-action--edit"
        onClick={() => handleEdit(userId, productId, worksDoneId, blogId)}
      >
        {t('admin.edit')}
      </button>

      <button
        className="admin-action--remove"
        onClick={() => handleRemove(userId, productId, worksDoneId, blogId)}
      >
        {t('admin.remove')}
      </button>
    </div>
  );
}
