import './Home.css';

import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getLatestEarphones, getLatestMobiles } from './../actions/productAction';
import { useEffect } from 'react';
import { url } from './../common/constants';


const Home = () => {

  // const url = 'http://localhost:4000'

  const dispatch = useDispatch()

  const getlatestmobilesstate = useSelector(state => state.getLatestMobilesReducer)

  const { latestmobiles, error } = getlatestmobilesstate

  const getLatestEarphonesstate = useSelector(state => state.getLatestEarphonesReducer)
  const { latestearphones, err } = getLatestEarphonesstate


  useEffect(() => {

    dispatch(getLatestMobiles())

    dispatch(getLatestEarphones())


  }, [])


  const products = [
    { productId: '101', title: 'Mobile', image: 'img/mob.jpg' },
    { productId: '102', title: 'Earphones', image: 'img/h1.jpeg' },
    { productId: '103', title: 'Laptop', image: 'img/laptop.jpg' },
    { productId: '104', title: 'TV', image: 'img/tv.webp' },

  ]

  const history = useHistory()

  return (

    <div className="cul">

      <div className="container w-auto ">
        <h3>Our products</h3>
        <div className="m-0">
          <hr className="m-1" />

          <div className="scontainer ">

            {products.map((product) => {
              return (

                <div className="sitem m-auto ">

                  <Link to={`/product/${product.productId}`}>
                    <img className="sthumb " src={product.image} />
                    <h6 className="stitle">{product.title}</h6>
                  </Link>
                </div>

              )
            })}
          </div>

        </div>


        <div className="advertise m-1 p-1">
          <div id="carouselExampleControls" className="carousel slide m-lg-2" data-bs-ride="carousel">
            <div className="carousel-inner" data-bs-interval="1000">
              <div className="carousel-item active">
                <img className="img" src="img/mob2.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src="img/tv2.PNG" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img src="img/earphone5.PNG" className="d-block w-100" alt="..." />
              </div>

              <div className="carousel-item" data-bs-interval="4000">
                <img src="img/mob6.PNG" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>


        <div className="p-4 slider-container  ">
          <hr />
          <h5 className="text-start">Suggested for You : Best Latest Phones</h5>

          <hr className="" />

          <div className="row m-1 item-container">
            {latestmobiles.map((s) => {
              return (
                <div className="sitem m-auto" onClick={() => {
                  history.push(`/${s.productId}/${s.mobileId}`)

                }}>
                  <img className="sthumb" src={url + '/' + s.thumbnail} />
                  <div className="stitle">{s.mobileName}</div>
                </div>
              )
            })}
          </div>
        </div>



        <div className="m-2 mar p-4">
          <hr />
          <h5 className="text-start">Suggested for You : Best Latest Earphones</h5>
          <hr />

          <div className="item-container ">          
            <div className="row m-1  ">
            {latestearphones.map((e) => {
              return (
                <div className="sitem m-auto" onClick={() => {
                  history.push(`/${e.productId}/${e.earphoneId}`)
                }}>
                  <img className="sthumb" src={url + '/' + e.thumbnail} />
                  <div className="stitle">{e.earphoneName}</div>
                </div>
              )
            })}
          </div>
          </div>

        </div>
        <div >
          <Footer />
        </div>
      </div>
    </div>

  )
}
export default Home