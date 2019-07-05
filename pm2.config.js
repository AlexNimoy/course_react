module.exports = {
  apps: [{
    name: 'thShop',
    script: './build/server.js',
    cwd: '/home/th/client/current',
    instanses: 2,
    exec_mode: 'cluster',
    env_production: {
      NODE_ENV: 'production',
      PORT: 9020
    }
  }],

  deploy: {
    production: {
      user: 'deployer',
      host: ['example.com'],
      ref: 'origin/master',
      repo: 'git@github.com:Backstabe/course_react.git',
      path: '/home/th/client/',
      'post-deploy': 'npm && npm run build:server && pm2 startOrRestart pm2.config.js --env production'
    }
  }
}
