import { RolesRepository } from '@roles/repositories/RolesRepositories'
import { DeleteRoleController } from './DeleteRoleController'
import { DeleteRoleUseCase } from './DeleteRoleUseCase'

const rolesRepository = RolesRepository.getInstance()
const deleteRoleUseCase = new DeleteRoleUseCase(rolesRepository)
export const deleteRoleController = new DeleteRoleController(deleteRoleUseCase)
