import { User } from 'src/users/entities/user.entity';
import { v4 as uuid } from 'uuid';

export const users: User[] = [
  {
    id: uuid(),
    firstName: 'super-admin',
    lastName: 'super-admin',
    tel: null,
    email: null,
    address: null,
    username: 'super-admin',
    password: '1q2w3e4r',
    image: null,
    isActive: true,
    role: 'admin',
    business: null,
    isSuperAdmin: true,
    createBy: null,
    createAt: null,
    updateBy: null,
    updateAt: null,
  },
];
