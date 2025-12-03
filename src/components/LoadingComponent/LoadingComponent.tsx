export default function LoadingComponent() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div
        role="status"
        aria-label="Loading"
        tabIndex={0}
        className="flex items-center justify-center"
      >
        <span className="sr-only">Carregando...</span>
        <div className="animate-spin rounded-full h-20 w-20 border-8 border-red-500 border-t-transparent"></div>
      </div>
    </div>
  );
}
