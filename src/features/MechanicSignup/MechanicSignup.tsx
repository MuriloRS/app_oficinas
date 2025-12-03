"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { AddressStep } from "./FormSteps/AddressStep";
import { BasicInfoStep } from "./FormSteps/BasicInfoStep";
import { DescriptionStep } from "./FormSteps/DescriptionStep";
import { PasswordStep } from "./FormSteps/PasswordStep";
import { ServicesStep } from "./FormSteps/ServicesStep";
import { defaultFormValues } from "./MechanicSignup.constants";
import {
  MechanicFormData,
  UpdateFormDataValueType,
} from "./MechanicSignup.types";

export default function MechanicSignup() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<MechanicFormData>(defaultFormValues);

  const totalSteps = 5;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const updateFormData = (
    field: keyof MechanicFormData,
    value: UpdateFormDataValueType
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Dados do formulário:", formData);
    // Aqui você implementaria a lógica de envio para a API
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <BasicInfoStep formData={formData} updateFormData={updateFormData} />
        );

      case 2:
        return (
          <AddressStep formData={formData} updateFormData={updateFormData} />
        );

      case 3:
        return (
          <PasswordStep formData={formData} updateFormData={updateFormData} />
        );

      case 4:
        return (
          <ServicesStep formData={formData} updateFormData={updateFormData} />
        );

      case 5:
        return (
          <DescriptionStep
            formData={formData}
            updateFormData={updateFormData}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">
              Cadastro de Oficina
            </h1>
            <span className="text-lg font-medium text-gray-600">
              {Math.round(progressPercentage)}% Completo
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-red-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          <div className="flex justify-between mt-2">
            {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step < currentStep
                      ? "bg-green-500 text-white"
                      : step === currentStep
                      ? "bg-red-500 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {step < currentStep ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    step
                  )}
                </div>
                <span className="text-xs text-gray-500 mt-1">
                  {step === 1 && "Básico"}
                  {step === 2 && "Endereço"}
                  {step === 3 && "Segurança"}
                  {step === 4 && "Serviços"}
                  {step === 5 && "Finalizar"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {renderStepContent()}

          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-6 py-2"
            >
              ← Voltar
            </Button>

            {currentStep < totalSteps ? (
              <Button
                onClick={nextStep}
                className="px-6 py-2 bg-red-600 hover:bg-red-700"
              >
                Continuar →
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="px-6 py-2 bg-red-600 hover:bg-red-700"
              >
                Finalizar Cadastro
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
