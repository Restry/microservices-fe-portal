import View from '@/pages/components/view';
const Template = () => import(/* webpackChunkName: "index" */ '@/pages/index');

const routes = [
    {
        path: '/',
        component: Template,
        meta: {
            title: '菜单'
        },
        children: [
            {
                path: '*',
                component: View,
                meta: {
                    title: ''
                }
            }
        ]
    }
];

export default routes;