import React, { useEffect, useMemo, useState } from 'react';
import { IoSearch, IoBookmarksOutline, IoDocumentTextOutline } from 'react-icons/io5';
import { FaWindowRestore, FaMousePointer } from 'react-icons/fa';
import { BsGithub, BsStickyFill } from 'react-icons/bs';

type Actions = {
  openSpotlight: () => void;
  openMissionControl: () => void;
  openNotes: () => void;
  openGitHub: () => void;
  openContact: () => void;
  closeAll?: () => void;
};

interface WelcomeTourProps {
  open: boolean;
  onClose: () => void;
  actions: Actions;
}

export default function WelcomeTour({ open, onClose, actions }: WelcomeTourProps) {
  const slides = useMemo(() => [
    {
      id: 'welcome',
      title: 'Bienvenido a mi portafolio estilo macOS',
      desc: 'Explora proyectos, experiencia y más a través de una interfaz de escritorio familiar.',
      icon: <FaWindowRestore className="text-white/90" size={28} />,
      cta: { label: 'Iniciar tour', onClick: undefined as undefined | (() => void) },
    },
    {
      id: 'spotlight',
      title: 'Búsqueda Spotlight',
      desc: 'Cmd/Ctrl+K para buscar proyectos, acciones, habilidades y links. Usa las flechas, Enter y Shift+Enter (En Vivo).',
      icon: <IoSearch className="text-white/90" size={28} />,
      cta: { label: 'Probar Spotlight', onClick: actions.openSpotlight },
      tip: 'Las acciones fijadas aparecen primero. Escribe para buscar en todo.'
    },
    {
      id: 'mission',
      title: 'Mission Control',
      desc: 'Ver y cambiar entre ventanas abiertas. Usa Ctrl/Cmd+↑ o F3.',
      icon: <FaWindowRestore className="text-white/90" size={28} />,
      cta: { label: 'Abrir Mission Control', onClick: actions.openMissionControl },
      tip: 'Haz clic en una ventana para enfocarla; cierra ventanas desde la cuadrícula.'
    },
    {
      id: 'dock',
      title: 'Dock con magnificación',
      desc: 'Pasa el cursor sobre el dock para ampliar los íconos. Haz clic para abrir Notas, Proyectos, Terminal y más.',
      icon: <FaMousePointer className="text-white/90" size={28} />,
      cta: undefined,
      tip: 'Las apps activas muestran un punto indicador blanco.'
    },
    {
      id: 'projects-notes',
      title: 'Proyectos y Notas',
      desc: 'Accede directamente a las secciones de Proyectos y Notas desde Spotlight o el dock.',
      icon: <BsGithub className="text-white/90" size={28} />,
      cta: { label: 'Abrir Proyectos', onClick: actions.openGitHub },
      altCta: { label: 'Abrir Notas', onClick: actions.openNotes },
      tip: 'Usa Espacio en un proyecto para Vista Rápida; Enter para abrirlo.'
    },
    {
      id: 'contact',
      title: 'Contacto',
      desc: 'Contáctame directamente mediante el formulario integrado (almacenado en Supabase).',
      icon: <IoDocumentTextOutline className="text-white/90" size={28} />,
      cta: { label: 'Abrir Contacto', onClick: actions.openContact },
      tip: 'También puedes presionar C o buscarlo en Spotlight.'
    },
    {
      id: 'shortcuts',
      title: 'Atajos de Teclado',
      desc: 'Presiona ? en cualquier momento para ver la lista de atajos de teclado.',
      icon: <IoBookmarksOutline className="text-white/90" size={28} />,
      cta: { label: 'Finalizar', onClick: onClose },
      tip: '¿Prefieres el teclado? La mayoría de las funciones están a una tecla de distancia.'
    },
  ], [actions, onClose]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!open) return;
    setIndex(0);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return onClose();
      if (e.key === 'ArrowRight') setIndex((i) => Math.min(i + 1, slides.length - 1));
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(i - 1, 0));
      if (e.key === 'Enter') handlePrimary();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, slides.length]);

  if (!open) return null;

  const slide = slides[index];
  const handlePrimary = () => {
    if (slide.cta?.onClick) slide.cta.onClick();
    if (slide.id !== 'shortcuts') setIndex((i) => Math.min(i + 1, slides.length - 1));
    else onClose();
  };

  return (
    <div className="fixed inset-0 z-[97]">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative h-full flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-gray-900/95 border border-white/10 rounded-2xl shadow-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="shrink-0 mt-1">{slide.icon}</div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-white">{slide.title}</h2>
              <p className="text-gray-300 mt-2 text-sm">{slide.desc}</p>
              {slide.tip && <p className="text-gray-400 mt-2 text-xs">{slide.tip}</p>}
              {slide.id === 'projects-notes' && slide.altCta && (
                <div className="mt-3">
                  <button
                    onClick={slide.altCta.onClick}
                    className="text-xs text-blue-400 hover:text-blue-300"
                  >
                    {slide.altCta.label}
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-1">
              {slides.map((s, i) => (
                <span
                  key={s.id}
                  className={`h-1.5 w-6 rounded-full ${i <= index ? 'bg-white/80' : 'bg-white/20'}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button onClick={onClose} className="text-sm text-gray-400 hover:text-white">Saltar</button>
              <button
                onClick={handlePrimary}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm"
              >
                {slide.cta?.label ?? 'Siguiente'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
