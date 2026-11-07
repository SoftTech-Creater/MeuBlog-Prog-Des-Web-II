// app/context/ReactionsContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ReactionsContextType = {
  total: number;
  incrementar: () => void;
};

// Context: um "estado compartilhado" que qualquer componente dentro do
// Provider consegue ler e alterar, sem precisar passar props manualmente
// de componente em componente.
const ReactionsContext = createContext<ReactionsContextType | null>(null);

export function ReactionsProvider({ children }: { children: ReactNode }) {
  const [total, setTotal] = useState(0);

  function incrementar() {
    setTotal((atual) => atual + 1);
  }

  return (
    <ReactionsContext.Provider value={{ total, incrementar }}>
      {children}
    </ReactionsContext.Provider>
  );
}

export function useReactions() {
  const context = useContext(ReactionsContext);
  if (!context) {
    throw new Error("useReactions precisa ser usado dentro de um ReactionsProvider");
  }
  return context;
}