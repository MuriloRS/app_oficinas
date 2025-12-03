import { Label } from "@/components/ui/label";
import { Camera } from "lucide-react";
import { BasicStepFormComponentType } from "../MechanicSignup.types";

export function DescriptionStep({
  formData,
  updateFormData,
}: BasicStepFormComponentType) {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    updateFormData("fotos", [...formData.fotos, ...files]);
  };

  const removeFoto = (index: number) => {
    updateFormData(
      "fotos",
      formData.fotos.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Fotos e Descrição</h2>
      <p className="text-gray-600">
        Adicione fotos da sua oficina e uma descrição atrativa.
      </p>

      <div>
        <Label>Fotos da Oficina</Label>
        <div className="mt-2">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Camera className="mx-auto h-12 w-12 text-gray-400" />
            <div className="mt-2">
              <label htmlFor="fotos" className="cursor-pointer">
                <span className="text-red-600 hover:text-red-500 font-medium">
                  Clique para fazer upload
                </span>
                <span className="text-gray-500"> ou arraste e solte</span>
              </label>
              <input
                id="fotos"
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">PNG, JPG até 10MB cada</p>
          </div>

          {formData.fotos.length > 0 && (
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              {formData.fotos.map((foto, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(foto)}
                    alt={`Foto ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => removeFoto(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="descricao">Descrição da Oficina</Label>
        <textarea
          id="descricao"
          rows={4}
          placeholder="Descreva sua oficina, especialidades, experiência, diferenciais..."
          value={formData.descricao}
          onChange={(e) => updateFormData("descricao", e.target.value)}
          className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
      </div>
    </div>
  );
}
