import { IsString} from "class-validator";

export class User {
    email: string;       // ✅ Obligatorio
    password: string;    // ✅ Obligatorio
    name?: string;       // Opcional
}
