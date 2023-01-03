import { Role } from '@roles/entities/Roles'
import { DataSource } from 'typeorm'
import { CreateRolesTable1671825367317 } from './migrations/1671825367317-CreateRolesTable'
import { CreateUsersTable1672784733214 } from './migrations/1672784733214-CreateUsersTable'

const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [CreateRolesTable1671825367317, CreateUsersTable1672784733214],
})

export { dataSource }
