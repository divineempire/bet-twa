import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as Sentry from "@sentry/vue";


createApp(App).use(store).use(router).mount('#app')

Sentry.init({
    dsn: "https://445aaee4bd696ccbe0c06a4dace6f10f@o528718.ingest.sentry.io/4506445659176960",
    release: "bet-twa@1.0",
    integrations: [
        new Sentry.BrowserTracing({
            // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
            tracePropagationTargets: ["localhost", "https://api.betty.games/api"],
            enableHTTPTimings: true
        }),
        new Sentry.Replay({
            maskAllText: false,
            blockAllMedia: false,
        }),

    ],
    // Performance Monitoring
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
    autoSessionTracking: true,
    enableTracing: true,
    attachStacktrace: true,
});
