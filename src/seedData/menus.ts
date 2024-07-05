import { Menu } from 'src/menus/entities/menu.entity';

export const menusParent: Menu[] = [
  {
    id: 1,
    name: 'ภาพรวม',
    value: 'dashboard',
    path: '/dashboard',
    icon: 'dashboard',
    order: 1,
    level: 0,
    parent: null,
  },
  {
    id: 2,
    name: 'แพ็คเกจ',
    value: 'package',
    path: '/package',
    icon: 'package',
    order: 2,
    level: 0,
    parent: null,
  },
  {
    id: 3,
    name: 'ประวัติการชำระเงิน',
    value: 'payment',
    path: '/payment',
    icon: 'payment',
    order: 3,
    level: 0,
    parent: null,
  },
  {
    id: 4,
    name: 'ตั้งค่า',
    value: 'setting',
    path: '/setting',
    icon: 'setting',
    order: 4,
    level: 0,
    parent: null,
  },
];

export const menusChild: Menu[] = [
  {
    id: 5,
    name: 'ผู้ใช้งาน',
    value: 'setting-user',
    path: '/setting-user',
    icon: 'user',
    order: 1,
    level: 1,
    parent: 4,
  },
  {
    id: 6,
    name: 'ข้อมูลบริษัท',
    value: 'setting-company',
    path: '/setting-company',
    icon: 'company',
    order: 2,
    level: 1,
    parent: 4,
  },
];
