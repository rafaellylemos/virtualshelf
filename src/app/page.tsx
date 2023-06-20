import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='bg-white h-screen text-black flex flex-col items-center justify-center'>
      <h1 className='font-thin text-2xl'>Estante<span className='uppercase font-bold'>virtual</span></h1>
      <div className="font-thin text-xs hover:cursor-pointer hover:font-light">
        <Link href="/catalogo"> Ir para o catálogo </Link>
      </div>
    </main>
  )
}
