/**
 * Created by Rayr Lee on 2018/11/8.
 */

export default [
    {
        id: 1,
        name: 'Dashboard',
        url: 'dashboard',
        icon: 'dashboard',
        isLeaf: true
    },
    {
        id: 2,
        name: 'Widgets',
        url: 'widgets',
        icon: 'th',
        isLeaf: true
    },
    {
        id: 3,
        name: 'charts',
        url: null,
        icon: 'pie-chart',
        isLeaf: false,
        children: [
            {
                id: 4,
                name: 'echarts',
                url: 'echarts',
                icon: null,
                isLeaf: true
            },
            {
                id: 5,
                name: 'd3 charts',
                url: 'd3',
                icon: null,
                isLeaf: true
            }
        ]
    },
    {
        id: 6,
        name: 'UI Elements',
        url: null,
        icon: 'laptop',
        isLeaf: false,
        children: [
            {
                id: 7,
                name: 'General',
                url: 'general',
                icon: null,
                isLeaf: true
            },
            {
                id: 8,
                name: 'Icons',
                url: 'icons',
                icon: null,
                isLeaf: true
            },
            {
                id: 9,
                name: 'Buttons',
                url: 'buttons',
                icon: null,
                isLeaf: true
            },
            {
                id: 10,
                name: 'Sliders',
                url: 'sliders',
                icon: null,
                isLeaf: true
            },
            {
                id: 11,
                name: 'Timeline',
                url: 'timeline',
                icon: null,
                isLeaf: true
            },
            {
                id: 12,
                name: 'Modals',
                url: 'modals',
                icon: null,
                isLeaf: true
            }
        ]
    },
]
