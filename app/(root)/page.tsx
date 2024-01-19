import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
export default function Home() {
  return (
    <Fragment>
      {/* bg-contain => para que la imagen que va a estar contenida se ajuste al contenedor y no se distorsione */}
      <section className=' bg-primary-50 bg-dotted-pattern  bg-contain py-5 md:py-10'>
        <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0'>
          <div className='flex flex-col  justify-center gap-8'>
            <h1 className='h1-bold'>Organiza, Conecta, Celebra: Tu evento, Nuestra Plataforma</h1>
            <p className=' p-regular-20 md:p-regular-24'>Reserve y aprenda consejos útiles de  7.345+
              mentores en empresas de clase mundial con nuestra comunidad global
            </p>
            <Button size='lg' asChild className='button w-full sm:w-fit'>
              <Link href='#events'>
                Explora ahora!
              </Link>
            </Button>
          </div>
          <Image 
            src= '/assets/images/hero.png'
            alt='logo'
            width={1000}
            height={1000}
            className=' max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]'
          />

        </div>
      </section>
      
      <section id='events' className='wrapper my-8 flex flex-col gap-8 md:gap-12'>
        <h2 className='h2-bold'>Confiado por <br /> cientos de eventos</h2>

        {/* Busqueda por filtrado y categoria */}
        <div className="flex w-full  flex-col gap-5 md:flex-row">
          Search
          categorias
        </div>
      </section>
    </Fragment>
  )
}
