import {
	CanActivate,
	ExecutionContext,
	ForbiddenException,
	Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { CacheService } from 'src/cache/cache.service';
@Injectable()
export class PermissionGuard implements CanActivate {
	constructor(
		private reflector: Reflector,
		private readonly cacheService: CacheService,
	) {}
	async canActivate(context: ExecutionContext): Promise<boolean> {
		const req = context.switchToHttp().getRequest();
		console.log(req);
		const userID = req?.user?.id || [];
		const userPermissions =
			await this.cacheService.getUserPermissionByID(userID);
		//factory pattern
		const requiredPermissions =
			this.reflector.get<string[]>('permissions', context.getHandler()) || [];
		const hasAllRequiredPermissions = requiredPermissions.every((permission) =>
			userPermissions.includes(permission),
		);

		if (requiredPermissions.length && hasAllRequiredPermissions) {
			return true;
		}
		throw new ForbiddenException(
			'You do not have permission to access this resource',
		);
	}
}
