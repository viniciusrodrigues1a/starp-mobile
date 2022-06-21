import React, { createContext, useContext, useState } from "react";

type PlayerContextData = {
  isPlayerOpen: boolean;
};

const PlayerContext = createContext({} as PlayerContextData);

type PlayerProviderProps = {
  children: React.ReactNode;
};

export function PlayerProvider({ children }: PlayerProviderProps) {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  return (
    <PlayerContext.Provider value={{ isPlayerOpen }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer(): PlayerContextData {
  return useContext(PlayerContext);
}
