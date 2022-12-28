import { Role } from '@roles/entities/Roles'
import { DataSource } from 'typeorm'
import { CreateRolesTable1671825367317 } from './migrations/1671825367317-CreateRolesTable'

const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [CreateRolesTable1671825367317],
})

export { dataSource }
