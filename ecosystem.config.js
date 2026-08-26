module = {
  apps: [
    {
      name: 'cashclaw-dashboard',
      script: './bin/cashclaw.js',
      args: 'dashboard --port 3851 --no-open',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'cashclaw-poller',
      script: './bin/cashclaw.js',
      args: 'hyrve poll --interval 30',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
