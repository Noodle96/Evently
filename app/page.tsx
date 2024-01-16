import { Button } from '@/components/ui/button'
export default function Home() {
  return (
    <main>
      <h1 className='text-4xl'>Evently</h1>
      <Button>Welcome</Button>
      <Button variant="destructive" className='px-10' >Delete</Button>
    </main>
  )
}
