import { VFC } from "react"

type Props = {
  open: boolean
}

export const ChildArea: VFC<Props> = (props) => {
  const { open } = props
  return (
    <>
      {open ? (
        <div>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  )
}
