/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'cdn.pixabay.com',
          'feedbacksync-v2.s3.ap-south-1.amazonaws.com',
          'feedbacksync-v2.s3.amazonaws.com',
          'feedbackuploadimage.s3.ap-south-1.amazonaws.com',
          'feedback-v2-client.vercel.app',
          'd2x85qstj588w1.cloudfront.net',
          'images.clerk.dev',
          'gravatar.com',
          'www.gravatar.com',
        ],
       
      },
};

export default nextConfig;
