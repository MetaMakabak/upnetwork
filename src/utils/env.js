const currentEnv = 'dev'; //dev:开发服 release:正式服

const envObj = {
    dev: {
        // baseUrl: 'http://192.168.91.145:5058',
        baseUrl: 'https://api-dev.upnetwork.xyz:5058',
        privyAppId: 'cm065twq702tbws8y9rbuqyhx',
        host: window.location.origin
    },
    publish: {
        baseUrl: 'https://api-dev.upnetwork.xyz:5158',
        privyAppId: 'cm065twq702tbws8y9rbuqyhx',
        host: window.location.origin
    },
    release: {
        baseUrl: 'https://api.upnetwork.xyz',
        privyAppId: 'clyihfrqb00m9to0etmkfyyr0',
        host: window.location.origin
    },
}

//mainnet
const EthRPC = 'https://eth-mainnet.g.alchemy.com/v2/Xje0AlulUnNuo18bV9mS-ATG1HpvY7-Q';
const BaseRPC = 'https://base-mainnet.g.alchemy.com/v2/FpgNDRRVbjnZJKt843pgkW7oRAyfKHEW';
//const PolygonRPC = 'https://polygon-mainnet.g.alchemy.com/v2/Ss3bwjRGwXmtSmBCLC5Xy4B2h7KT3kRM';
//const BaseRPC = 'https://base-mainnet.g.alchemy.com/v2/K1aSwUpgvAs-F_s4YK1mrqnVwoKs7bv_';

//testnet
//const PolygonAmoyRPC = 'https://polygon-amoy.g.alchemy.com/v2/aFijVx0MWIUKN8K2mXHWG2NedhKvZQyO'; 
const BaseSepoliaRPC = 'https://base-sepolia.g.alchemy.com/v2/KzB63kDbXsYOO41kz7VuPQuCOg8B1ZbA';
const EthSepoliaRPC = 'https://eth-sepolia.g.alchemy.com/v2/HAICwTrChZ91SetJM4C1_8LXbg6uL_Ao';
//const AbstractRPC = 'https://api.testnet.abs.xyz';
const MoveTestnetRPC = 'https://mevm.devnet.m1.movementlabs.xyz';

const envConfig = envObj[currentEnv];


export {
    envConfig,
    EthRPC,
    BaseRPC,
    BaseSepoliaRPC,
    EthSepoliaRPC,
    MoveTestnetRPC,
}
