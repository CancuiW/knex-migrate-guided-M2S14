//this file is to decide which configuration for the database to use based on 
//the environment

const knex=require('knex')
const configs=require('./../knexfile')
//NODE_ENV 是一个常见的环境变量，通常用于指示应用程序当前所处的环境，
//例如 "development"（开发）、"production"（生产）或 "test"（测试）等


const env=process.env.NODE_ENV ||'development'

module.exports=knex(configs[env])
