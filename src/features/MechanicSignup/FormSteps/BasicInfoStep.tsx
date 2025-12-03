import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BasicStepFormComponentType } from "../MechanicSignup.types";

export function BasicInfoStep({
  formData,
  updateFormData,
}: BasicStepFormComponentType) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Informações Básicas</h2>
      <p className="text-gray-600">
        Vamos começar com os dados principais da sua oficina.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="nomeOficina" className="mb-2">
            Nome da Oficina *
          </Label>
          <Input
            id="nomeOficina"
            placeholder="Digite o nome da sua oficina"
            value={formData.nomeOficina}
            onChange={(e) => updateFormData("nomeOficina", e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="cnpj" className="mb-2">
            CNPJ *
          </Label>
          <Input
            id="cnpj"
            placeholder="00.000.000/0000-00"
            value={formData.cnpj}
            onChange={(e) => updateFormData("cnpj", e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email" className="mb-2">
            Email para Contato *
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="contato@oficina.com"
            value={formData.email}
            onChange={(e) => updateFormData("email", e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="telefone" className="mb-2">
            Telefone para Contato
          </Label>
          <Input
            id="telefone"
            placeholder="(11) 99999-9999"
            value={formData.telefone}
            onChange={(e) => updateFormData("telefone", e.target.value)}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="whatsapp" className="mb-2">
          Número do WhatsApp*
        </Label>
        <Input
          id="whatsapp"
          placeholder="(11) 99999-9999"
          value={formData.whatsapp}
          onChange={(e) => updateFormData("whatsapp", e.target.value)}
        />
      </div>
    </div>
  );
}
