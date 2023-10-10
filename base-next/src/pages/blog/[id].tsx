import { useRouter } from "next/router"

export default function Blog() {
  const {id,slug} = useRouter().query
    return <div>{id}</div>
  }