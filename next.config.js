module.exports = {
    reactStrictMode: true,
    env: {
        dir: '/', // Change to your specific directory if needed
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.vercel.app',
                pathname: '/https://adityaportfoliowebsite-aditys-hatwar-tss-projects.vercel.app/**'
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                pathname: '/adityaahatwar/**'
            },
            {
                protocol: 'https',
                hostname: '**.shields.io',
                pathname: '/badge/**'
            },
            {
                protocol: 'https',
                hostname: '**.shields.io',
                pathname: '/github/**'
            },
            {
                protocol: 'https',
                hostname: '**.githubusercontent.com',
                pathname: '/adityaahatwar/**'
            },
            {
                protocol: 'https',
                hostname: '**.medium.com',
                pathname: '/**'
            },
        ],
    },
};
