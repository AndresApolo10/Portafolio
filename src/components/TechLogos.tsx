const logos: Record<string, string[]> = {
  Expo: ['expo.svg'], 'Socket.IO': ['socketio.svg'],
  React: ['react.svg'], 'React Native': ['react.svg'], TypeScript: ['typescript.svg'],
  'HTML & CSS': ['html.svg', 'css.svg'], 'Redux Toolkit': ['redux.svg'], Storybook: ['storybook.svg'],
  'Node.js': ['nodejs.svg'], Express: ['express.svg'], NestJS: ['nestjs.svg'],
  'REST & GraphQL': ['graphql.svg'], MySQL: ['mysql.svg'], Sequelize: ['sequelize.svg'],
  'AWS Amplify': ['amplify.svg'], Lambda: ['lambda.svg'], AppSync: ['appsync.svg'], DynamoDB: ['dynamodb.svg'],
  'Jest & Testing Library': ['jest.svg', 'testing-library.svg'], 'Git & Docker': ['git.svg', 'docker.svg'],
};

export default function TechLogos({ name }: { name: string }) {
  return <span className="tech-logos" aria-hidden="true">{(logos[name] ?? []).map(file => <img key={file} src={`${import.meta.env.BASE_URL}images/tech/${file}`} alt="" width="17" height="17" />)}</span>;
}
