module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '26d026af56c3f84589226a06e661b34f'),
  },
});
