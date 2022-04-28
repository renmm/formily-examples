import { IRouterConfig, lazy } from 'ice';
import Layout from '@/Layouts/BasicLayout';

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Home = lazy(() => import('@/pages/Home'));
const NotFound = lazy(() => import('@/components/NotFound'));
const FormDetailCode = lazy(() => import('@/pages/FormDetail/code'));
const FormDetailJson = lazy(() => import('@/pages/FormDetail/json-schema'));
const FormDetailMarkup = lazy(() => import('@/pages/FormDetail/markup-schema'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: Layout,
    children: [{
      path: '/dashboard',
      component: Dashboard,
    },
    {
      path: '/formDetailCode',
      component: FormDetailCode,
    },
    {
      path: '/formDetailJson',
      component: FormDetailJson,
    },
    {
      path: '/formDetailMarkup',
      component: FormDetailMarkup,
    },
    {
      path: '/',
      exact: true,
      component: Home,
    }, {
      component: NotFound,
    }],
  },
];

export default routerConfig;
