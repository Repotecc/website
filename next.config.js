module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
        {
            source: '/config',
            destination: '/target',
            permanent: false,
        }
    ]
}
}
