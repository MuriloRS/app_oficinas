import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { BasicStepFormComponentType } from "../MechanicSignup.types";

export function PasswordStep({
  formData,
  updateFormData,
}: BasicStepFormComponentType) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Segurança</h2>
      <p className="text-gray-600">
        Crie uma senha segura para acessar sua conta.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="senha" className="mb-2">
            Senha *
          </Label>
          <div className="relative">
            <Input
              id="senha"
              type={showPassword ? "text" : "password"}
              placeholder="Crie uma senha forte"
              value={formData.senha}
              onChange={(e) => updateFormData("senha", e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <div>
          <Label htmlFor="confirmaSenha" className="mb-2">
            Confirmar Senha *
          </Label>
          <div className="relative">
            <Input
              id="confirmaSenha"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirme sua senha"
              value={formData.confirmaSenha}
              onChange={(e) => updateFormData("confirmaSenha", e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
