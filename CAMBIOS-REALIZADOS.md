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
CONTACT_TO=admin@operadoresago.com
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
