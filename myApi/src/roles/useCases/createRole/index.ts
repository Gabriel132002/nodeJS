import { RolesRepository } from '@roles/repositories/RolesRepositories'
import { CreateRoleController } from './CreateRoleController'
import { CreateRoleUseCase } from './CreateRoleUseCase'

const rolesRepository = RolesRepository.getInstance()
const createRoleUseCase = new CreateRoleUseCase(rolesRepository)
export const createRoleController = new CreateRoleController(createRoleUseCase)
