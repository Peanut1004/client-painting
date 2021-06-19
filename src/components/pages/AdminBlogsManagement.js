import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getBlogs } from '../../redux/slice/blogsSlice';
import AdminSlideBar from '../partials/AdminSlideBar';
import HeaderTopBar from '../partials/HeaderTopBar';
import AdminAction from '../admin/AdminAction';

export default function AdminBlogsManagement() {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();
  const history = useHistory();
  const { blogs, loading, error } = useSelector(state => state.blogs);
  //   console.log(blogs)

  useEffect(() => {
    dispatch(getBlogs());
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

  const ADMIN_BLOG_MANAGEMENT = [
    t('admin.id'),
    t('admin.image'),
    t('admin.name'),
    t('admin.content'),
    t('admin.action'),
  ];

  const handleAddBlog = () => {
    const addBlogUrl = `/admin/blogsManagement/add`;
    history.push(addBlogUrl);
  };

  return (
    <div className="admin-blog-management-page">
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
                  className="admin-management__button add-blog"
                  onClick={handleAddBlog}
                >
                  {t('admin.addBlog')}
                </button>
                <table>
                  <thead>
                    <tr>
                      {ADMIN_BLOG_MANAGEMENT.map((e, i) => (
                        <th key={i}>{e}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {blogs.map((e, i) => (
                      <tr key={i}>
                        <td className="table__id" data-title="ID">
                          {e.id}
                        </td>
                        <td className="table__image" data-title="Image">
                          <img src={e.image} alt="images" />
                        </td>
                        <td className="table__name" data-title="Name">
                          {e.name}
                        </td>
                        <td
                          className="table__description"
                          data-title="Description"
                        >
                          <p>{e.content}</p>
                        </td>
                        <td className="table__action">
                          <AdminAction blogId={e.id} />
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
