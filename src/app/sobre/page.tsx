export default function Sobre() {
  return (
    <main className="mx-auto mt-16 w-full max-w-3xl px-4 py-10 md:py-12">
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight">
          Sobre a Plataforma
        </h1>
        <p className="text-muted-foreground text-sm">
          Nossa plataforma ajuda você a encontrar a melhor oficina perto de você
          com rapidez e confiança.
        </p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2 md:items-center">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">
            Pesquise oficinas próximas
          </h2>
          <p className="text-muted-foreground text-sm">
            Encontre oficinas perto da sua localização atual ou de um endereço
            específico.
          </p>
        </div>
        <div
          className="aspect-[16/10] w-full rounded-md border border-dashed bg-muted/20"
          aria-label="Área para imagem da busca por proximidade"
        />
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2 md:items-center">
        <div className="order-2 space-y-2 md:order-1">
          <h2 className="text-xl font-semibold tracking-tight">
            Filtros avançados
          </h2>
          <p className="text-muted-foreground text-sm">
            Filtre por serviços, avaliações, bairro e mais para chegar às opções
            ideais.
          </p>
        </div>
        <div
          className="order-1 aspect-[16/10] w-full rounded-md border border-dashed bg-muted/20 md:order-2"
          aria-label="Área para imagem dos filtros"
        />
      </section>

      {/* Mapa interativo */}
      <section className="mt-10 grid gap-4 md:grid-cols-2 md:items-center">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">
            Mapa interativo
          </h2>
          <p className="text-muted-foreground text-sm">
            Explore resultados no mapa, visualize rotas e escolha o melhor
            caminho.
          </p>
        </div>
        <div
          className="aspect-[16/10] w-full rounded-md border border-dashed bg-muted/20"
          aria-label="Área para imagem do mapa"
        />
      </section>

      {/* Detalhes da oficina */}
      <section className="mt-10 grid gap-4 md:grid-cols-2 md:items-center">
        <div className="order-2 space-y-2 md:order-1">
          <h2 className="text-xl font-semibold tracking-tight">
            Detalhes completos da oficina
          </h2>
          <p className="text-muted-foreground text-sm">
            Veja descrição, fotos, serviços, horários e meios de pagamento.
          </p>
        </div>
        <div
          className="order-1 aspect-[16/10] w-full rounded-md border border-dashed bg-muted/20 md:order-2"
          aria-label="Área para imagem dos detalhes da oficina"
        />
      </section>

      {/* Avaliações */}
      <section className="mt-10 grid gap-4 md:grid-cols-2 md:items-center">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">
            Avaliações de outros usuários
          </h2>
          <p className="text-muted-foreground text-sm">
            Consulte notas e comentários reais para decidir com mais confiança.
          </p>
        </div>
        <div
          className="aspect-[16/10] w-full rounded-md border border-dashed bg-muted/20"
          aria-label="Área para imagem das avaliações"
        />
      </section>

      {/* Contato rápido */}
      <section className="mt-10 grid gap-4 md:grid-cols-2 md:items-center">
        <div className="order-2 space-y-2 md:order-1">
          <h2 className="text-xl font-semibold tracking-tight">
            Contato rápido
          </h2>
          <p className="text-muted-foreground text-sm">
            Ligue, envie WhatsApp ou email diretamente pela página da oficina.
          </p>
        </div>
        <div
          className="order-1 aspect-[16/10] w-full rounded-md border border-dashed bg-muted/20 md:order-2"
          aria-label="Área para imagem de contato"
        />
      </section>

      {/* Favoritos */}
      <section className="mt-10 grid gap-4 md:grid-cols-2 md:items-center">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">Favoritos</h2>
          <p className="text-muted-foreground text-sm">
            Salve suas oficinas preferidas para acessar rapidamente (em breve).
          </p>
        </div>
        <div
          className="aspect-[16/10] w-full rounded-md border border-dashed bg-muted/20"
          aria-label="Área para imagem de favoritos"
        />
      </section>
    </main>
  );
}
