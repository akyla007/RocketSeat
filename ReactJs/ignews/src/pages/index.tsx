import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string,
    amount: number
  }
}


export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome!</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get acess the all publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src='/images/avatar.svg' alt='Girl coding' />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1LGjqiJNs8bk97O3meGXRp9x', {
    expand: ['product']
  }) // expand: ['product'] mostra as especificações do produto em price.product ...

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',

    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product
    }
  }
} 