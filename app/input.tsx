import { useState } from 'react'

interface I_props {
  set_obj_url: (url: string) => void
  set_mtl_url: (url: string) => void
}

export
function Input(props: I_props) {
  const [o, set_o] = useState('')
  const [m, set_m] = useState('')
  return <div>
    <label>
      <span>obj</span>
      <input
        value={o}
        onChange={evt => set_o(evt.target.value)}
      />
    </label>
    <label>
      <span>mtl</span>
      <input
        value={m}
        onChange={evt => set_m(evt.target.value)}
      />
    </label>

    <button onClick={() => {
      props.set_obj_url(o)
      props.set_mtl_url(m)
    }}>view</button>
  </div>
}
