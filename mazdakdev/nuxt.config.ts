import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                }
            },
        }
    },

    css: [
        '~/assets/css/main.css',
    ],

    script: [
        {
            src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
            type: "text/javascript"
        },
        {
            src:
                "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
            type: "text/javascript"
        },
    ]
})
