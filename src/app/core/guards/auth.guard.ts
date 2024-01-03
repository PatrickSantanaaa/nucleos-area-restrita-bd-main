import { inject } from "@angular/core"
import { Router } from "@angular/router";
import { UserService } from "src/app/service/user.service";

export const authGuard = () => {
  const tokenService = inject(UserService);
  const router = inject(Router);

  if(tokenService.estaLogado()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
}
