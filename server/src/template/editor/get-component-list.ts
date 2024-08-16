/*
 * Tencent is pleased to support the open source community by making MagicEditor available.
 *
 * Copyright (C) 2023 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default [
  {
    title: '示例容器',
    items: [
      {
        icon: 'folder-opened',
        text: '组',
        type: 'container',
      },
      {
        icon: 'folder-opened',
        text: '蒙层',
        type: 'overlay',
      },
      {
        icon: 'ticket',
        text: '页面片容器',
        type: 'page-fragment-container',
      },
      {
        icon: 'files',
        text: '迭代器容器',
        type: 'iterator-container',
      },
    ],
  },
  {
    title: '示例组件',
    items: [
      {
        icon: 'tickets',
        text: '文本',
        type: 'text',
      },
      {
        icon: 'switch-button',
        text: '按钮',
        type: 'button',
      },
      {
        icon: 'picture-filled',
        text: '图片',
        type: 'img',
      },
      {
        icon: 'grid',
        text: '二维码',
        type: 'qrcode',
      },
    ],
  },
  {
    title: '组合',
    items: [
      {
        icon: 'tickets',
        text: '弹窗',
        data: {
          type: 'overlay',
          style: {
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          },
          name: '弹窗',
          items: [
            {
              type: 'container',
              style: {
                position: 'absolute',
                width: '80%',
                height: '400',
                top: '143.87',
                left: 37.5,
                backgroundColor: 'rgba(255, 255, 255, 1)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
              },
              name: '组',
              items: [],
              layout: 'absolute',
            },
          ],
        },
      },
    ],
  },
];
