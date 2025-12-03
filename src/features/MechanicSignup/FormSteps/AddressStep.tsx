import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BasicStepFormComponentType } from "../MechanicSignup.types";

export function AddressStep({
  formData,
  updateFormData,
}: BasicStepFormComponentType) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Endereço</h2>
      <p className="text-gray-600">
        Informe o endereço completo da sua oficina.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="cep" className="mb-2">
            CEP *
          </Label>
          <Input
            id="cep"
            placeholder="00000-000"
            value={formData.cep}
            onChange={(e) => updateFormData("cep", e.target.value)}
          />
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="rua" className="mb-2">
            Rua *
          </Label>
          <Input
            id="rua"
            placeholder="Nome da rua"
            value={formData.rua}
            onChange={(e) => updateFormData("rua", e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="numero" className="mb-2">
            Número *
          </Label>
          <Input
            id="numero"
            placeholder="123"
            value={formData.numero}
            onChange={(e) => updateFormData("numero", e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="complemento" className="mb-2">
            Complemento
          </Label>
          <Input
            id="complemento"
            placeholder="Sala, Loja, etc."
            value={formData.complemento}
            onChange={(e) => updateFormData("complemento", e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="bairro" className="mb-2">
            Bairro *
          </Label>
          <Input
            id="bairro"
            placeholder="Nome do bairro"
            value={formData.bairro}
            onChange={(e) => updateFormData("bairro", e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="cidade" className="mb-2">
            Cidade *
          </Label>
          <Input
            id="cidade"
            placeholder="Nome da cidade"
            value={formData.cidade}
            onChange={(e) => updateFormData("cidade", e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="estado" className="mb-2">
            Estado *
          </Label>
          <Input
            id="estado"
            placeholder="RS"
            value={formData.estado}
            onChange={(e) => updateFormData("estado", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
