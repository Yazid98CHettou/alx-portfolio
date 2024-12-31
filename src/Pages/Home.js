import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react';
import Nav from  '../component/Nav';
import Footer from '../component/Footer';
import Laptop from '../component/Laptop';
const Home = () => {
  return (
    <div>
      
      <Nav />
      <div className="container mt-5" >
        <div className="row">
          <div className="col-sm-4" >
            <Laptop image="https://prod2-media.electroplanet.ma/media/catalog/product/cache/fe7218fa206f7a550a07f49b9ea052d6/3/0/3038527_1.jpg"
              title="Desktop"
              buttontext="More Desktop"
              href="../Pages/Shop.js"/>
            <Laptop image="https://tangerois.ma/25102-large_default/tablette-galaxy-tab-s9-12-256gb-graphite-samsung.jpg"
              title="Tablette"
              buttontext="More Tablette"
              href="../Pages/Shop.js"/>
          </div>
          <div className="col-sm-4">
            <Laptop image="https://d13s5rafcqkqiu.cloudfront.net/CACHE/images/products/other/tba/813439_razer-blade-16-gaming-laptop-i9-14900hx-32gb-1tb-ssd-rtx-4080_jWRbIs_3-auto/3d9f8f52dbdbedea0ed782db6af0de1d.jpg"
              title="Gaming Laptop"
              buttontext="More Gaming Laptop"
              href="../Pages/Shop.js"/>
            <Laptop image="https://erinmariephoto.com/wp-content/uploads/sites/5984/2019/03/2019-03-03_0004.jpg"
              title="Photography"
              buttontext="More Photography"
              href="../Pages/Shop.js"/>
          </div>
          <div className="col-sm-4">
            <Laptop image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1npTP?ver=829f&w=1200&h=900&q=90&m=6&b=%23F2F2F2F2&f=jpg&o=f&aim=true"
              title="Laptop "
              buttontext="Buy Laptop"
              href="../Pages/Shop.js"/>
            <Laptop image="https://fixphone.ma/prodimg/Camera%20surveillance%20prix%20maroc-130920241726258009.png"
              title="Surveillance"
              buttontext="More Surveillance"
              href="../Pages/Shop.js"/>
            
          </div>
        </div>
      </div>  
      <Footer/>   
    </div>
  );
}

export default Home;

