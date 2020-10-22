import pages from './pages';

const {
    MainDashboard
} = pages;

export const groups = [
    {
        group: 'Dashboard',
        visible: true,
        routes: [
            {
                title: 'Dashboard',
                path: '/dashboard',
                icon: '',
                component: MainDashboard,
                exact: true,
                visible: true,
                subRoutes: [],
                index: 1,
            },
            {
                title: 'Country',
                path: '/dashboard/country',
                icon: '',
                component: MainDashboard,
                exact: true,
                visible: true,
                subRoutes: [],
                index: 2,
            },
            {
                title: 'Business Category',
                path: '/dashboard/businessCategory',
                icon: '',
                component: MainDashboard,
                exact: true,
                visible: true,
                subRoutes: [],
                index: 3,
            },
            {
                title: 'Transactions',
                path: '/dashboard/transactions',
                icon: '',
                component: MainDashboard,
                exact: true,
                visible: true,
                subRoutes: [],
                index: 4,
            },
            {
                title: 'Events',
                path: '/dashboard/events',
                icon: '',
                component: MainDashboard,
                exact: true,
                visible: true,
                subRoutes: [],
                index: 2,
            },
        ]
    }
];

const joinFn = (acc = [], curr) => {
    return acc.concat(curr);
};

export const allRoutes = groups
    .map(function merge(group) {
        const { routes } = group;
        const newRoutes = [];
        for (const route of routes) {
            newRoutes.push(route);
        }
        const subRoutes = newRoutes
            .map(route => {
                const newSubRoutes = [];
                for (const subRoute of route.subRoutes) {
                    newSubRoutes.push(subRoute);
                }
                return newSubRoutes;
            })
            .reduce(joinFn);
        return newRoutes.concat(subRoutes);
    })
    .reduce(joinFn);

export const getGroups = () => groups;

export default {
    groups,
    allRoutes,
};
