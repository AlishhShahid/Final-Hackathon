import Link from 'next/link'

function Routes(){
  return(
    <div>
      <div>
      <Link href="/home"></Link>
      </div>
      <div>
      <Link href="/category"></Link>
      </div>
      <div>
      <Link href="/detail"></Link>
      </div>
      <div>
      <Link href="/payment"></Link>
      </div>
    </div>
  )
}

export default Routes