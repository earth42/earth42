import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/logo.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-rows-2 lg:text-center">
        <a
          href="https://github.com/earth42/learn_cypress"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn Cypress
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn cypress repo.
          </p>
        </a>

        <a
          href="https://earth42.github.io/find-cat/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Find cat
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            A npm package which contians a cypress custom command.
          </p>
        </a>
      </div>
    </main>
  )
}
