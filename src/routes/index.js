import Router from '@koa/router'
import taskRoutes from '#components/task/task-routes.js'

const API_V1_ROUTER = new Router({ prefix: '/api/v1' })

API_V1_ROUTER.use(taskRoutes.routes(), taskRoutes.allowedMethods())

export {API_V1_ROUTER}

// API_V1_ROUTER.use('/exemples',)
// const API_V2_ROUTER = new Router({ prefix: '/api/v2' }) 