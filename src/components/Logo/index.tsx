import logo from "@app/assets/yabie.svg"

const Logo: React.FC = (): JSX.Element => {
  return(
    <img src={logo} width="200" alt="" className="mb-10" />
  )
}

export { Logo }