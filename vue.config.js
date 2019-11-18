module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                'assets': '@/assets',
                'database':'@/database',
            }
        }
    },
        publicPath: process.env.NODE_ENV === 'production'
            ? '/resume/'
            : '/'

};