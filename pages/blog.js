import Link from 'next/link';

import Layout from '../components/Layout';

const PostLink = ({ title, slug }) => (
  <li>
    <Link href={`/post?title=${title}`} as={`/${slug}`}><a>{title}</a></Link>
  </li>
)

export default () => (
  <Layout title="My Blog">
    <ul>
      <PostLink title='React Post' slug='react-post' />
      <PostLink title='Angular Post' slug='angular-post' />
      <PostLink title='Vue Post' slug='vue-post' />
    </ul>
  </Layout>
)