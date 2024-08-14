const mongoURI = process.env.MONGO_URI;
const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;
const googleId = process.env.GOOGLE_ID;
const googleSecret = process.env.GOOGLE_SECRET;
const fbId = process.env.FACEBOOK_ID;
const fbSecret = process.env.FACEBOOK_SECRET;
const environmentSecret = process.env.ENVIRONMENT;
const nodeEnvSecret = process.env.NODE_ENV;

export {
  fbId,
  fbSecret,
  githubId,
  githubSecret,
  googleId,
  googleSecret,
  mongoURI,
  environmentSecret,
  nodeEnvSecret,
};
