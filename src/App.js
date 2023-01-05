import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from './pages/Home';
const client = new ApolloClient({
  uri: `https://apidev4.sapien.systems/graphql`,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Home/>
    </ApolloProvider>
  );
}

export default App;
