interface I_props {
  obj_url: string
  mtl_url: string
}

export
function Viewer(props: I_props) {
  return <div>
    {props.obj_url}
    {props.mtl_url}
  </div>
}
