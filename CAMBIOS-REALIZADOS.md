# Reorganización web de Operadores AGO

## Objetivo

Conservar el avance existente y reorganizar la experiencia para que `web.operadoresago.com` funcione como sitio corporativo principal, separando servicios contratables, plataformas propias y proyectos realizados.

## Cambios principales

- Portada enfocada en infraestructura, software, monitoreo y seguridad.
- Pasarela visual de soluciones y showcase de clientes/proyectos.
- Catálogo de servicios organizado en áreas comerciales.
- Páginas independientes para servicios prioritarios, desarrollo y monitoreo.
- Navegación y pie de página corregidos para usar rutas reales.
- Formulario de contacto con validación de cliente y servidor.
- Envío del formulario directamente mediante SMTP autenticado, sin depender del backend anterior de Google/contacto.
- `Reply-To` configurado con el correo del prospecto para responder directamente desde el cliente de correo.
- Honeypot antispam sin seguimiento de IP ni almacenamiento de datos del visitante.
- Metadatos, `sitemap.xml` y `robots.txt` actualizados.
- Proyecto migrado a pnpm.
- Docker preparado para recibir las credenciales SMTP únicamente mediante variables de entorno de producción.

## Variables de entorno

`.env.example` documenta los nombres necesarios. Las credenciales reales se cargan manualmente en producción y nunca deben subirse al repositorio:

```env
NEXT_PUBLIC_SITE_URL=https://web.operadoresago.com
SMTP_HOST=mail.korreoweb.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_REQUIRE_TLS=true
SMTP_USER=contacto@operadoresago.com
SMTP_PASSWORD=change-me
MAIL_FROM_NAME=AGO TECH
MAIL_FROM=contacto@operadoresago.com
CONTACT_TO=contacto@operadoresago.com
```

## Validaciones recomendadas

```bash
pnpm install
pnpm run lint
pnpm exec tsc --noEmit
pnpm run build
pnpm audit --prod
```

## Despliegue con Docker

En producción, crea o actualiza `.env` con los valores reales antes de recrear el contenedor.

```bash
docker compose build --no-cache --pull
docker compose up -d --force-recreate
```

Verificación sugerida:

```bash
docker compose ps
docker compose logs --tail=100
curl -I http://127.0.0.1:3005
```

## Fase 5 — Arquitectura por sectores

- Home reducido a una ruta comercial corta: hero, métricas, selector dinámico por sector, clientes y CTA.
- Nueva navegación de Sectores en desktop y móvil.
- Nueva ruta `/sectores` con siete verticales comerciales.
- Nuevas páginas dinámicas `/sectores/[slug]` con diagnóstico guiado por necesidad y servicios recomendados.
- Sectores iniciales: restaurantes, hoteles, comercio, oficinas, industria, educación y empresas multisucursal.
- Datos centralizados en `lib/sectors-data.ts` para agregar o ajustar sectores sin duplicar páginas.
- Sitemap actualizado con las nuevas rutas.
- Footer reorganizado para dar acceso directo a sectores, servicios y plataformas.
- Se conserva el formulario SMTP y el botón flotante de WhatsApp sin modificar su lógica.


## Fase 6 — Experiencia dinámica en toda la web

- `/servicios` deja de ser un catálogo vertical largo y pasa a un explorador guiado por sector y necesidad.
- Todas las páginas principales de servicio usan una misma experiencia compacta con pestañas dinámicas para resultados, alcance y sectores relacionados.
- `Internet empresarial` y `VPN empresarial` se integran al mismo patrón visual y comercial; sus precios/planes se conservan dentro de una pestaña dinámica para reducir scroll sin perder información.
- El formulario de contacto conserva el contexto de sector, necesidad y servicio mediante parámetros de URL y lo incluye en el correo interno.
- El formulario amplía las opciones de servicio para distinguir Internet, VPN, monitoreo web y monitoreo de hardware.
- `/sectores` reutiliza el selector dinámico en lugar de una cuadrícula larga de tarjetas.
- `/nosotros` se compacta y utiliza un modelo interactivo de diagnóstico, diseño, implementación y seguimiento.
- Navbar incorpora acceso dinámico a Sectores y Servicios; footer se compacta para reducir scroll repetitivo.
- Se agrega una página 404 orientada a continuar por sector, servicio o diagnóstico.
- La lógica comercial queda centralizada en `lib/sectors-data.ts` y `lib/service-relations.ts`.
