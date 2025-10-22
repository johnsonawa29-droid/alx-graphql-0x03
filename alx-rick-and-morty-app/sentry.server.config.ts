import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://<your_sentry_dsn_here>.ingest.sentry.io/<project_id>",
  tracesSampleRate: 1.0,
});
