const currentEnv = 'dev'; //dev:开发服, test:测试服/演示服, release:正式服 publish :上线前预演环境， polygondev ：最新dev开发环境

const envObj = {
    dev: {
        // baseUrl: 'http://192.168.91.145:5058',
        baseUrl: 'https://api-dev.upnetwork.xyz:5058',
        privyAppId: 'clyihfrqb00m9to0etmkfyyr0',
        host: window.location.origin
    },
    release: {
        baseUrl: 'https://api.upnetwork.xyz',
        privyAppId: 'clyihfrqb00m9to0etmkfyyr0',
        host: 'http://localhost:3000'
    },
}



const envConfig = envObj[currentEnv];


export {
    envConfig,
}
