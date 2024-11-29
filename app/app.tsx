import { useState } from 'react'
import { Input } from './input'
import { Viewer } from './viewer'

export
function App() {
  const [obj_url, set_obj_url] = useState<null | string>(null)
  const [mtl_url, set_mtl_url] = useState<null | string>(null)

  return (obj_url && mtl_url)
    ? <Viewer obj_url={obj_url} mtl_url={mtl_url} />
    : <Input set_obj_url={set_obj_url} set_mtl_url={set_mtl_url} />
}
