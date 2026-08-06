# Mejoras de conversión — Fase 1

## Objetivo

Reorganizar la portada y el catálogo para atraer prospectos interesados principalmente en:

1. Portal cautivo.
2. WiFi administrado.
3. Diseño e implementación de redes de datos.

Se conservaron el botón flotante de WhatsApp, el logotipo, las fotografías, las páginas existentes y la lógica del formulario.

## Cambios principales

- Hero orientado a conectividad, captación de clientes y cobertura nacional.
- Sección destacada para las tres soluciones prioritarias.
- Nuevas páginas SEO:
  - `/servicios/portal-cautivo`
  - `/servicios/wifi-administrado`
  - `/servicios/redes-datos`
- Contador visual de alcance digital estimado:
  - inicia en 999;
  - aumenta 20 por cada semana transcurrida;
  - se identifica como estimado, no como analítica real.
- Nueva tarjeta para CEAS Industrial dentro de plataformas y proyectos.
- Clasificación entre plataformas propias y proyectos para clientes.
- Formulario con selector de servicio de interés.
- Cobertura actualizada a toda la República Mexicana.
- Metadatos SEO y datos estructurados para los servicios prioritarios.
- Sitemap actualizado con las rutas nuevas.
- Dockerfile corregido para copiar `pnpm-workspace.yaml` y `.npmrc` antes de `pnpm install --frozen-lockfile`.

## Validación recomendada

```bash
pnpm install --frozen-lockfile
pnpm run lint
pnpm exec tsc --noEmit
pnpm run build
```

## Despliegue Docker

```bash
docker compose down --remove-orphans
docker compose build --no-cache --pull
docker compose up -d --force-recreate
docker compose ps
docker compose logs --tail=150
```

## Siguiente fase sugerida

- Implementar analítica real y privada con Umami.
- Medir clics en WhatsApp, formularios enviados y páginas de servicio visitadas.
- Crear una sección de casos de éxito cuando SUKOI sea entregado.
- Añadir testimonios reales y fotografías de instalaciones.
