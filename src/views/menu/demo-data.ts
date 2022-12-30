// 两级菜单数据
export const data1 = [
  {
    name: '导航1',
    icon: 'document',
    index: '1',
  },
  {
    name: '导航2',
    icon: 'document',
    index: '2',
    children: [
      {
        name: '导航2-1',
        icon: 'document',
        index: '2-1',
      },
    ],
  },
];

// 无限层级菜单数据
export const data2 = [
  {
    name: '导航1',
    icon: 'document',
    index: '1',
  },
  {
    name: '导航2',
    icon: 'document',
    index: '2',
    children: [
      {
        name: '导航2-1',
        icon: 'document',
        index: '2-1',
      },
      {
        name: '导航2-2',
        icon: 'document',
        index: '2-2',
        children: [
          {
            name: '导航2-1-1',
            icon: 'document',
            index: '2-1-1',
            children: [
              {
                name: '导航2-1-1-1',
                icon: 'document',
                index: '2-1-1-1',
                children: [
                  {
                    name: '导航2-1-1-1-1',
                    icon: 'document',
                    index: '2-1-1-1-1',
                    children: [
                      {
                        name: '导航2-1-1-1-1-1',
                        icon: 'document',
                        index: '2-1-1-1-1-1',
                      },
                      {
                        name: '导航2-1-1-1-1-2',
                        icon: 'document',
                        index: '2-1-1-1-1-2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
