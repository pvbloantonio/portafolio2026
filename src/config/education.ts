/**
 * Education and courses configuration
 * Add your educational background and courses here
 */

import type { Education, Course } from '../types';

export const education: readonly Education[] = [
  {
    degree: 'Ingeniería en Informática',
    institution: 'Universidad Santo Tomás',
    location: 'Valdivia, Chile',
    year: '2016',
    description: 'Titulado en 2016. Cursos relevantes: C++, Java, .NET, Android, MySQL, SQL Server, Sistemas Operativos GNU/Linux.',
  },
  {
    degree: 'Diplomado en Conectividad y Redes de Datos',
    institution: 'Universidad Santo Tomás',
    location: 'Valdivia, Chile',
    year: '2017',
    description: 'Titulado en 2017. CCNA: Switching, Routing, and Wireless Essentials.',
  },
] as const;

export const courses: readonly Course[] = [
  {
    title: 'Especialista DevOps',
    description: 'Integración Continua, Automatización de pruebas, Desarrollo y Construcción, Fundamentos y Adopción DevOps, Logs y Métricas, Operación y Escalamientos.',
    institution: 'Talento Digital para Chile',
    location: 'Chile',
    year: '2024',
  },
  {
    title: 'ASP.NET Core Clean Architecture y Domain Driven Design (DDD)',
    description: 'Clean Architecture, Domain Driven Design, Unit Test, CQRS, Authentication, Entity Framework 6, ASP.NET Core.',
    institution: 'Udemy',
    location: 'Online',
    year: '2025',
  },
  {
    title: 'Patrones de Diseño de Software en C# - Curso Práctico',
    description: 'Patrones de diseño aplicados en C#.',
    institution: 'Udemy',
    location: 'Online',
    year: '2024',
  },
  {
    title: 'Construyendo Web APIs RESTful con ASP.NET Core 6',
    description: 'C#, ASP.NET Core, SQL Server, Entity Framework Core, Queries Espaciales, Pruebas unitarias y de integración.',
    institution: 'Udemy',
    location: 'Online',
    year: '2023',
  },
  {
    title: 'JavaScript Moderno - Guía para dominar el lenguaje',
    description: 'Bases de JavaScript, Node, npm, Promesas, Callbacks, CRUD, Vite, Manipulación del DOM.',
    institution: 'Udemy',
    location: 'Online',
    year: '2023',
  },
] as const;
