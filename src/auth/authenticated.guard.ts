import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
    async canActivate(context: ExecutionContext) {
        console.log('AuthenticatedGuard');

        const req = context.switchToHttp().getRequest();
        // console.log(req.isAuthenticated);

        return req.isAuthenticated();
    }
}