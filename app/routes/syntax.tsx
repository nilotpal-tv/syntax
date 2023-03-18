import type {
  HeadersFunction,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node';
import { Link, Outlet, useLoaderData, useNavigation } from '@remix-run/react';

export interface ISyntaxShow {
  url?: string;
  slug?: string;
  html?: string;
  title?: string;
  number: number;
  displayDate?: string;
}

export const meta: MetaFunction = () => {
  return {};
};

export const headers: HeadersFunction = () => {
  return {};
};

export const links: LinksFunction = () => {
  return [];
};

export const loader: LoaderFunction = async (): Promise<ISyntaxShow[]> => {
  try {
    const response = await fetch('https://syntax.fm/api/shows');
    if (!response.ok) return [];

    const shows = (await response.json()) as ISyntaxShow[];
    return shows.sort((a, b) => a.number - b.number);
  } catch (error) {
    return [];
  }
};

const styles = {
  display: 'flex',
  justifyContent: 'space-between',
} as React.CSSProperties;

const SyntaxPage = () => {
  const { state } = useNavigation();
  const shows = useLoaderData<ISyntaxShow[]>();

  if (state === 'loading') return <h1>Loading...</h1>;

  return (
    <main>
      <h1>SyntaxPage</h1>
      <section style={styles}>
        <ul>
          {shows.map((show) => (
            <li key={show.slug}>
              <span>#{show.number} </span>
              <Link to={`/syntax/${show.number}`} style={{ color: '#CDD3DD' }}>
                {show.title}
              </Link>
            </li>
          ))}
        </ul>
        <Outlet />
      </section>
    </main>
  );
};

export default SyntaxPage;
