type IProps = Readonly<{ children: React.ReactNode }>

const Footer = ({ children }: IProps): JSX.Element => {
  return (
    <div className="footer">
      {children}
    </div>
  )
}

export default Footer
