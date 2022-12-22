import { Role } from '@roles/entities/Roles'
import { RolesRepository } from '@roles/repositories/RolesRepositories'

export class ListRolesUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  execute(): Role[] {
    return this.rolesRepository.findAll()
  }
}
