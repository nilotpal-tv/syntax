import { type LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { type ISyntaxShow } from '../syntax';

export const loader: LoaderFunction = async ({
  params,
}): Promise<ISyntaxShow> => {
  const show = await (
    await fetch(`https://syntax.fm/api/shows/${params.slug}`)
  ).json();

  if (show?.message) {
    return {
      title: 'No Podcast Found',
      number: Number(params.slug),
      displayDate: new Date().toDateString(),
    };
  }

  return show as ISyntaxShow;
};

const Episode = () => {
  const show = useLoaderData<ISyntaxShow>();

  return (
    <div>
      <h1>
        #{show.number} : {show.title}
      </h1>
      <p>{show.displayDate}</p>
      <article dangerouslySetInnerHTML={{ __html: show.html! }}></article>
    </div>
  );
};

export default Episode;
