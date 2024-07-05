import { DataSource, Not } from 'typeorm';
import { menusChild, menusParent } from './seedData/menus';
import { Menu } from './menus/entities/menu.entity';
import { User } from './users/entities/user.entity';
import { users } from './seedData/users';

// Create a DataSource instance
const dataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Menu, User], // Add other entities if needed
  synchronize: true,
});

export async function seedDatabase() {
  await dataSource.initialize();
  await seedUsers();
  await seedMenusParent();
  await seedMenusChild();
}

async function seedUsers() {
  const usersRepository = dataSource.getRepository(User);
  // Check if data already exists
  const existingUsers = await usersRepository.find();
  if (existingUsers.length === 0) {
    const usersToSeed = users;
    await usersRepository.save(usersToSeed);
  }
}

async function seedMenusParent() {
  const menusParentRepository = dataSource.getRepository(Menu);
  // Check if data already exists
  const existingMenusParent = await menusParentRepository.find();

  if (
    existingMenusParent.length === 0 ||
    existingMenusParent.length !== menusParent.length
  ) {
    const menuParentToSeed = menusParent;
    await menusParentRepository.save(menuParentToSeed);
  }
}

async function seedMenusChild() {
  const menusChildRepository = dataSource.getRepository(Menu);
  // Check if data already exists
  const existingMenuChild = await menusChildRepository.find({
    where: { parent: Not(null) },
  });
  if (
    existingMenuChild.length === 0 ||
    existingMenuChild.length !== menusChild.length
  ) {
    const menuChildToSeed = menusChild;
    await menusChildRepository.save(menuChildToSeed);
  }
}
