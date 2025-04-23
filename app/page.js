export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-center">Freelance DAO</h1>
      <p className="mt-4 text-xl text-center">A decentralized freelancing platform built on Solana</p>
      <div className="mt-8">
        <a href="/landing" className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">
          Go to Landing Page
        </a>
      </div>
    </div>
  )
}
