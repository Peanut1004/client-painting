import { configureStore } from '@reduxjs/toolkit';
import blogAddEditReducer from './slice/adminBlogAddEditSlice';
import productAddEditReducer from './slice/adminProductAddEditSlice';
import userAddEditReducer from './slice/adminUserAddEditSlice';
import usersReducer from './slice/adminUsersManagementSlice';
import worksDoneAddEditReducer from './slice/adminWorksDoneAddEditSlice';
import blogsReducer from './slice/blogsSlice';
import i18nReducer from './slice/i18nSlice';
import loginReducer from './slice/loginSlice';
import memberReducer from './slice/memberSlice';
import productsReducer from './slice/productsSlice';
import registerReducer from './slice/registerSlice';
import searchProductReducer from './slice/searchProductSlice';
import worksDonesReducer from './slice/worksDonesSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    userAddEdit: userAddEditReducer,
    productAddEdit: productAddEditReducer,
    worksDoneAddEdit: worksDoneAddEditReducer,
    blogAddEdit: blogAddEditReducer,
    register: registerReducer,
    login: loginReducer,
    searchProduct: searchProductReducer,
    blogs: blogsReducer,
    products: productsReducer,
    worksDones: worksDonesReducer,
    member: memberReducer,
    i18n: i18nReducer,
  },
});
export default store;
