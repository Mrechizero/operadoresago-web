# Reorganización web de Operadores AGO

## Objetivo

Conservar el avance existente y reorganizar la experiencia para que `web.operadoresago.com` funcione como sitio corporativo principal, separando servicios contratables de plataformas propias.

## Cambios principales

- Portada enfocada en infraestructura, software, monitoreo y seguridad.
- Nueva sección de plataformas con enlaces directos a:
  - `https://reservabella.com`
  - `https://shoopper.me`
  - `https://wifi.operadoresago.com`
  - `https://games.operadoresago.com`
- Catálogo de servicios organizado en seis áreas.
- Nuevas páginas independientes:
  - `/servicios/desarrollo`
  - `/servicios/monitoreo-web`
  - `/servicios/monitoreo-hardware`
- Se conservaron las páginas existentes:
  - `/servicios/internet`
  - `/servicios/vpn`
  - `/nosotros`
  - `/contacto`
- Navegación y pie de página corregidos para usar rutas reales.
- Formulario de contacto con validación de cliente y servidor.
- Backend de contacto configurable en tiempo de ejecución con `CONTACT_API_URL`.
- Metadatos, `sitemap.xml` y `robots.txt` actualizados.
- ESLint instalado y configurado.
- Docker corregido para exponer internamente el puerto `3000`.

## Variables de entorno

Copia `.env.example` a `.env` o configura estas variables en el servidor:

```env
NEXT_PUBLIC_SITE_URL=https://web.operadoresago.com
CONTACT_API_URL=http://10.10.0.49:3001/contact
```

## Validaciones ejecutadas

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

La compilación completó Webpack, TypeScript y la generación estática de 15 rutas. En el entorno de revisión, el proceso fue detenido por el límite de ejecución durante `Collecting build traces`, pero los artefactos generados iniciaron correctamente con `next start` y las rutas verificadas respondieron con HTTP 200.

## Despliegue con Docker

```bash
cp .env.example .env
docker compose build --no-cache
docker compose up -d
```

Verificación sugerida:

```bash
docker compose ps
docker compose logs --tail=100 operadoresago-web
curl -I http://127.0.0.1:3005
```
