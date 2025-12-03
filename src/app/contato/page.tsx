"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCallback, useState } from "react";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    },
    [nome, email, assunto, mensagem]
  );

  return (
    <main className="mx-auto mt-16 w-full max-w-3xl px-4 py-10 md:py-12">
      <section className="mb-12">
        <h1 className="mb-2 text-2xl font-semibold tracking-tight">Contato</h1>
        <p className="text-muted-foreground text-sm">
          Envie uma mensagem para nossa equipe de suporte. Responderemos o mais
          breve possível.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome</Label>
              <Input
                id="nome"
                name="nome"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="voce@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="assunto">Assunto</Label>
            <Input
              id="assunto"
              name="assunto"
              placeholder="Como podemos ajudar?"
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mensagem">Mensagem</Label>
            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Descreva seu problema ou dúvida"
              className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/10 border-input min-h-[120px] w-full min-w-0 rounded-md border bg-white px-3 py-2 text-base shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 md:text-sm"
              style={{ borderColor: "hsl(0, 0%, 80%)" }}
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
            />
          </div>
          <div className="pt-2 text-right">
            <Button type="submit">Enviar</Button>
          </div>
        </form>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold tracking-tight">FAQ</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Perguntas frequentes sobre a plataforma.
        </p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="faq-1">
            <AccordionTrigger>
              Como entro em contato com o suporte?
            </AccordionTrigger>
            <AccordionContent>
              Você pode usar o formulário acima para enviar um email diretamente
              ao suporte. Responderemos por email.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger>Qual o prazo de resposta?</AccordionTrigger>
            <AccordionContent>
              Normalmente respondemos em até 2 dias úteis. Em períodos de alta
              demanda, esse prazo pode variar.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger>
              Posso atualizar meus dados de cadastro?
            </AccordionTrigger>
            <AccordionContent>
              Sim. Acesse sua conta e navegue até a seção de configurações para
              alterar suas informações.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-4">
            <AccordionTrigger>
              Como reportar um problema na listagem de oficinas?
            </AccordionTrigger>
            <AccordionContent>
              Descreva o problema no campo de mensagem do formulário e inclua,
              se possível, o link da página da oficina.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
