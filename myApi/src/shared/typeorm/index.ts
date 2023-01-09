import { Role } from '@roles/entities/Roles'
import { User } from '@users/entities/user'
import { DataSource } from 'typeorm'
import { CreateRolesTable1671825367317 } from './migrations/1671825367317-CreateRolesTable'
import { CreateUsersTable1672784733214 } from './migrations/1672784733214-CreateUsersTable'
import { AddRoleIdToUserTable1672958590104 } from './migrations/1672958590104-AddRoleIdToUserTable'

const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role, User],
  migrations: [
    CreateRolesTable1671825367317,
    CreateUsersTable1672784733214,
    AddRoleIdToUserTable1672958590104,
  ],
})

export { dataSource }
