import { RolesRepository } from '@roles/repositories/RolesRepositories'
import { UpdateRoleUseCase } from './UpdateRoleUseCase'
import { UpdateRoleController } from './UpdateRoleController'

const rolesRepository = RolesRepository.getInstance()
const updateRoleUseCase = new UpdateRoleUseCase(rolesRepository)
export const updateRoleController = new UpdateRoleController(updateRoleUseCase)
