
const WaterMarkLayout: React.FC = (props: any) => {
  return (
    <div className="watermark-layout">
      <div className="watermark-layout__header">header</div>
      {props.children}
    </div>
  )
}

export default WaterMarkLayout
