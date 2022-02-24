module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
        {
            source: '/techfest-volunteers',
            destination: 'https://docs.google.com/forms/d/e/1FAIpQLSdqHwGY60GvX4Dy98Wp9uJD67YAQgnlm8G0u8B08j_gjXdi4g/viewform?usp=sf_link',
            permanent: false,
        }
    ]
}
}
