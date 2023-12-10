// Importe os módulos necessários do React
import { useEffect, useState } from 'react';

// Componente funcional
const InstallButton = () => {
  // Estado para armazenar o evento 'beforeinstallprompt'
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  // Efeito colateral para adicionar e remover o ouvinte de evento
  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      // Impedir que o navegador mostre automaticamente o prompt
      event.preventDefault();
      // Armazenar o evento para uso posterior
      setDeferredPrompt(event);
    };

    // Adicionar o ouvinte de evento quando o componente é montado
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Remover o ouvinte de evento quando o componente é desmontado
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []); // Executado apenas uma vez durante a montagem do componente


  return (
    <button  style={{ display: deferredPrompt ? 'block' : 'none' }}>
      Instalar
    </button>
  );
};

export default InstallButton;
