import './carousel.scss';

export default function Carousel() {
  return(
    <div className="body">
      <div className="container">
        <div className="content">
          <div className="introduce"></div>
          <div className="thumbnail-list">
            <div className="wrapper"></div>
          </div>
        </div>
      </div>

      <div className="navigation">
        <button className="next-button"></button>
        <span className="line"></span>
        <div className="ordinal-numbers"></div>
      </div>
    </div>
  )
}