import { useState, useEffect } from 'react';

export function useWeglot() {
  const [currentLang, setCurrentLang] = useState<string>('ru');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkWeglot = setInterval(() => {
      if (window.Weglot) {
        setIsReady(true);
        setCurrentLang(window.Weglot.getCurrentLang());
        clearInterval(checkWeglot);

        window.Weglot.on('languageChanged', () => {
          setCurrentLang(window.Weglot!.getCurrentLang());
        });
      }
    }, 100);

    return () => clearInterval(checkWeglot);
  }, []);

  const switchLanguage = (lang: string) => {
    if (window.Weglot) {
      window.Weglot.switchTo(lang);
    }
  };

  const getCurrentLanguage = () => {
    return window.Weglot?.getCurrentLang() || 'ru';
  };

  return {
    currentLang,
    isReady,
    switchLanguage,
    getCurrentLanguage,
  };
}
