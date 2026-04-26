/**
 * Professional experience configuration
 * Add your work experience here
 */

import type { Experience } from '../types';

export const experience: readonly Experience[] = [
    {
        title: 'Desarrollador de Software',
        company: 'Prosys Ingeniería',
        location: 'Providencia, Región Metropolitana, Chile',
        period: 'Agosto 2023 - Presente',
        description: 'Participé en el desarrollo de un generador de reportes con microservicios integrando Apache FOP y XML para creación de PDFs. Lideré la migración de la Central de Repuestos de una aplicación monolítica en Java hacia Blazor 8 con microservicios en .NET. Actualmente lidero la migración del sistema para liquidadores, reemplazando .NET Framework por Blazor 8 con nuevas funcionalidades para la gestión de siniestros en HDI Seguros.',
        technologies: ['.NET 8', 'Blazor', 'Oracle SQL', 'PL/SQL', 'Jenkins', 'SonarQube', 'Git', 'GitHub', 'Bitbucket', 'Jira', 'Scrum'],
    },
    {
        title: 'Analista Programador',
        company: 'Intgra',
        location: 'Valdivia, Chile',
        period: 'Octubre 2020 - Marzo 2023',
        description: 'Lideré la implementación de más de 30 e-commerce integrados con Softland, asegurando su correcta conexión con los módulos de gestión. Participé en el desarrollo y mejora continua de la segunda versión del producto de tienda. Desarrollé mantenedores para el sitio de administración y encabecé un cambio clave en la visualización de precios en los e-commerce.',
        technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'TypeScript', 'Angular', '.NET Core', 'Git', 'SQL'],
    },
] as const;
