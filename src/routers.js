import React from 'react';
import AdminProductAddEdit from './components/admin/AdminProductAddEdit';
import AdminUserAddEdit from './components/admin/AdminUserAddEdit';
import AdminProductsManagement from './components/pages/AdminProductsManagement';
import AdminUsersManagement from './components/pages/AdminUsersManagement';
import AdminBlogsManagement from './components/pages/AdminBlogsManagement';
import Error404 from './components/pages/Error404';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Contact from './components/pages/Contact';
import Member from './components/pages/Member';
import ProductDetail from './components/pages/ProductDetail';
import BlogDetail from './components/pages/BlogDetail';
import Register from './components/pages/Register';
import InteriorPaintList from './components/pages/InteriorPaintList';
import ExteriorPaintList from './components/pages/ExteriorPaintList';
import PuttyList from './components/pages/PuttyList';
import AdminWorksDonesManagement from './components/pages/AdminWorksDonesManagement';
import AdminWorksDoneAddEdit from './components/admin/AdminWorksDoneAddEdit';
import WorksDoneDetail from './components/pages/WorksDoneDetail';
import AdminBlogAddEdit from './components/admin/AdminBlogAddEdit';

const routers = [
  {
    path: '/admin/productsManagement',
    exact: true,
    main: () => <AdminProductsManagement />,
  },
  {
    path: '/admin/productsManagement/edit/:productId',
    exact: true,
    main: () => <AdminProductAddEdit />,
  },
  {
    path: '/admin/productsManagement/add',
    exact: true,
    main: () => <AdminProductAddEdit />,
  },
  {
    path: '/admin/usersManagement',
    exact: true,
    main: () => <AdminUsersManagement />,
  },
  {
    path: '/admin/usersManagement/edit/:userId',
    exact: true,
    main: () => <AdminUserAddEdit />,
  },
  {
    path: '/admin/usersManagement/add',
    exact: true,
    main: () => <AdminUserAddEdit />,
  },
  {
    path: '/admin/worksDonesManagement',
    exact: true,
    main: () => <AdminWorksDonesManagement />,
  },
  {
    path: '/admin/worksDonesManagement/edit/:worksDoneId',
    exact: true,
    main: () => <AdminWorksDoneAddEdit />,
  },
  {
    path: '/admin/worksDonesManagement/add',
    exact: true,
    main: () => <AdminWorksDoneAddEdit />, 
  },
  {
    path: '/admin/blogsManagement',
    exact: true,
    main: () => <AdminBlogsManagement />,
  },
  {
    path: '/admin/blogsManagement/edit/:blogId',
    exact: true,
    main: () => <AdminBlogAddEdit />,
  },
  {
    path: '/admin/blogsManagement/add',
    exact: true,
    main: () => <AdminBlogAddEdit />,
  },
  {
    path: '/member',
    exact: true,
    main: () => <Member />,
  },
  {
    path: '/product-detail/:productId',
    exact: true,
    main: () => <ProductDetail />,
  },
  {
    path: '/worksDone-detail/:worksDoneId',
    exact: true,
    main: () => <WorksDoneDetail />,
  },
  {
    path: '/blog-detail/:blogId',
    exact: true,
    main: () => <BlogDetail />,
  },
  {
    path: '/interior-paint-list',
    exact: true,
    main: () => <InteriorPaintList />,
  },
  {
    path: '/exterior-paint-list',
    exact: true,
    main: () => <ExteriorPaintList />,
  },
  {
    path: '/putty-list',
    exact: true,
    main: () => <PuttyList />,
  },
  {
    path: '/contact',
    exact: true,
    main: () => <Contact />,
  },
  {
    path: '/',
    exact: true,
    main: () => <Home />,
  },
  {
    path: '/login',
    exact: true,
    main: () => <Login />,
  },
  {
    path: '/register',
    exact: true,
    main: () => <Register />,
  },
  {
    path: '/*',
    exact: true,
    main: () => <Error404 />,
  },
];

export default routers;
