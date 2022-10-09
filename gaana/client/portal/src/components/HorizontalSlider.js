import './HorizontalSlider.css'

const HorizontalSlider = ({ items, title, onItemSelect }) => {
  const url = 'http://localhost:4000'

  return (
    <div className="slider-container">
      <div className="title">{title}</div>

      {items.map((item) => {
        return (
          <div
            className="item-container"
            onClick={() => {
              onItemSelect(item)
            }}>
            <img src={url + '/' + item.thumbnail} className="image" />
            <div className="item-title">{item.title}</div>
          </div>
        )
      })}
    </div>
  )
}

export default HorizontalSlider
