import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {
  postBlog,
  getBlogDetail,
  putBlog,
} from '../../redux/slice/adminBlogAddEditSlice';

export default function AdminBlogAddEdit() {
  const { t } = useTranslation('common');
  const { blogId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [blog, setBlog] = useState({
    image: '',
    name: '',
    content: '',
  });
  const { successError, loading, loadingGetBlog, error } = useSelector(
    state => state.blogAddEdit
  );

  useEffect(() => {
    if (blogId) {
      async function getDataBlog() {
        const res = await dispatch(getBlogDetail(blogId));
        if (!res.error) {
          setBlog({
            image: res.payload.image,
            name: res.payload.name,
            content: res.payload.content,
          });
        }
      }
      getDataBlog();
    }
  }, [dispatch, blogId]);

  const onSubmit = async e => {
    e.preventDefault();

    if (!blogId) {
      const res = await dispatch(postBlog(blog));
      if (res.error) {
        alert(res.error.message);
      } else if (res.payload.length) {
        alert(res.payload);
      } else {
        alert('Create Blog Success');
        history.push('/admin/blogsManagement');
      }
    } else {
      await dispatch(putBlog({ blogId, blog }));
      alert('Edit Success');
      history.push('/admin/blogsManagement');
    }
  };

  return (
    <div className="admin-product-add-edit frames__add-edit">
      <div className="container">
        {loadingGetBlog ? (
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
                  value={blog.image}
                  onChange={e => setBlog({ ...blog, image: e.target.value })}
                />
              </fieldset>
              <fieldset>
                <label>{t('admin.name')}:</label>
                <input
                  type="text"
                  value={blog.name}
                  onChange={e => setBlog({ ...blog, name: e.target.value })}
                />
              </fieldset>
              <fieldset>
                <label>{t('admin.content')}:</label>
                <textarea
                  type="text"
                  value={blog.content}
                  onChange={e =>
                    setBlog({ ...blog, content: e.target.content })
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
                ) : blogId ? (
                  t('admin.editBlog')
                ) : (
                  t('admin.addBlog')
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
