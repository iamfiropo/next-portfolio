import Link from "next/link";
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default ({ children, title }) => {
  return (
    <div className='root'>
      <Head>
        <title>NextPortfolio</title>
      </Head>
      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/hireme">
          <a>HireMe</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </header>

      <h1>{title}</h1>
      {children}

      <footer>&copy; {new Date().getFullYear()}</footer>

      <style jsx>{`
      .root {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      header {
        display: flex;
        width: 100%;
        justify-content: space-around;
        padding: 1em;
        font-size: 1.2em;
        background: indigo;
      }

      header a {
        color: darkgrey;
        text-decoration: none;
      }

      header a:hover {
        font-weight: bold;
        color: lightgrey;
      }

      footer {
        padding: 1em;
      }
    `}</style>

    <style global jsx>{`
      body {
        margin: 0;
        font-size: 110%;
        background: #f0f0f0;
      }
    `}</style>
    </div>
  );
};
