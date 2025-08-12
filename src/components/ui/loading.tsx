export const LoadingSpinner = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">Cargando</h2>
          <div className="mt-5 flex justify-center space-x-1">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LoadingSkeleton = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header skeleton */}
        <div className="mb-8">
          <div className="w-32 h-12 bg-white/10 rounded-xl animate-pulse"></div>
        </div>

        {/* Contenido principal skeleton */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Imagen skeleton */}
          <div className="relative">
            <div className="w-full h-[600px] bg-gradient-to-br from-white/10 to-white/5 rounded-3xl animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-3xl"></div>
          </div>

          {/* Información skeleton */}
          <div className="space-y-8">
            {/* Título skeleton */}
            <div className="space-y-4">
              <div className="h-16 bg-gradient-to-r from-white/20 to-white/10 rounded-xl animate-pulse"></div>
              <div className="h-8 bg-gradient-to-r from-white/10 to-white/5 rounded-lg animate-pulse w-3/4"></div>
            </div>

            {/* Badges skeleton */}
            <div className="flex flex-wrap gap-3">
              <div className="w-24 h-10 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full animate-pulse"></div>
              <div className="w-32 h-10 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-full animate-pulse"></div>
            </div>

            {/* Información detallada skeleton */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="h-6 bg-white/10 rounded-lg animate-pulse w-1/2"></div>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="h-4 bg-white/10 rounded animate-pulse w-1/3"></div>
                    <div className="h-4 bg-white/5 rounded animate-pulse w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Estadísticas skeleton */}
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl p-4 text-center animate-pulse"
                >
                  <div className="h-8 bg-white/20 rounded-lg mb-2"></div>
                  <div className="h-3 bg-white/10 rounded w-3/4 mx-auto"></div>
                </div>
              ))}
            </div>

            {/* Botón skeleton */}
            <div className="pt-4">
              <div className="w-full h-14 bg-gradient-to-r from-white/20 to-white/10 rounded-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
