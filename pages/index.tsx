import Head from 'next/head';
import dynamic from 'next/dynamic';
import Image from 'next/image';


const Connect = dynamic(() => import('../components/Connect').then(m => m.Connect), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>@polkadot/extension-dapp example</title>
      </Head>
      <a
        className="absolute top-4 right-4"
        href="https://github.com/andriishupta/polkadot-extension-dapp-example"
        target="_blank"
        rel="noreferrer"
      >
        <Image src="/github.png" alt="andriishupta's github" width={32} height={32}/>
      </a>
      <main>
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                  Connect your website with
                  {' '}
                  <a
                    href="https://polkadot.js.org/docs/extension"
                    target="_blank"
                    rel="noreferrer"
                    className="prose prose-code text-3xl underline"
                  >
                    @polkadot/extension-dapp
                  </a>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                  Use one of Polkadot&apos;s{' '}
                  <a href="https://wiki.polkadot.network/docs/build-wallets" target="_blank" rel="noreferrer"
                     className="underline">wallets</a>
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <Connect/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

