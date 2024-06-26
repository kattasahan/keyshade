import { Module } from '@nestjs/common'
import { WorkspaceRoleService } from './service/workspace-role.service'
import { WorkspaceRoleController } from './controller/workspace-role.controller'

@Module({
  imports: [],
  providers: [WorkspaceRoleService],
  controllers: [WorkspaceRoleController]
})
export class WorkspaceRoleModule {}
