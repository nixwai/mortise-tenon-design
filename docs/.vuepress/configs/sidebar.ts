import type { SidebarOptions } from '@vuepress/theme-default';

export const sidebar: SidebarOptions = {
  '/zh/guide/': [
    {
      text: '基础',
      children: [
        {
          text: '安装',
          link: 'install.md',
        },
      ],
    },
  ],
  '/zh/components/': [
    {
      text: '基础组件',
      children: [
        {
          text: '折叠面板',
          link: 'expand-box.md',
        },
      ],
    },
  ],
  '/zh/utils/': [
    {
      text: '开发指南',
      children: [
        {
          text: '安装',
          link: 'install.md',
        },
      ],
    },
    {
      text: '对象',
      children: [
        {
          text: 'objectFormatKey',
          link: 'object-format-key.md',
        },
      ],
    },
  ],
};
