import View from '@/pages/components/view';
const Template = () => import(/* webpackChunkName: "index" */ '@/pages/index');
const Detail = () => import(/* webpackChunkName: "detail" */ '@/pages/test');

const routes = [
    {
        path: '/children1',
        component: View,
        meta: {
            title: '子应用'
        },
        children: [
            {
                path: 'index',
                component: Template,
                meta: {
                    title: '首页'
                }
            },
            {
                path: 'detail',
                component: Detail,
                meta: {
                    title: '详情'
                }
            }
        ]
    }
];

export default routes;