// import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/productimg/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";
import "../styles/Menu.css";
import "../styles/changepagebutton.css";




const Menu = () => {
  const onButtonClick = () => {
    fetch('Menu.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Menu.pdf';
            alink.click();
        })
    })
}

  const [searchTerm, setSearchTerm] = useState("");

  const [pageNumber, setPageNumber] = useState(0);

  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");

    }
  });

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <section title="Menu">
      <CommonSection title="Menu" />
      <marquee width="100%" direction="right" height="35px" style={{fontFamily:'RobotSlab',backgroundColor:'black',color:'white',paddingTop:'5px'}}>
   ENJOY 20% OFF ON A BILL OF ₹350 <i class="fa-solid fa-bowl-rice"></i> &nbsp; &nbsp;
   ENJOY 50% OFF ON A BILL OF ₹1000 <i class="fa-solid fa-ice-cream"></i>&nbsp; &nbsp;
   FREE DELIVERY FOR ABOVE ₹1000 <i class="fa-solid fa-truck"></i>&nbsp; &nbsp;
   EXCLUSIVE OFFERS IS WAITING FOR YOU <i class="fa-solid fa-gifts"></i>&nbsp; &nbsp;
   BUY ABOVE ₹1000 TO GET FREE COOLDRINKS <i class="fa-solid fa-champagne-glasses"></i>  &nbsp; &nbsp;
   EXCLUSIVE COMBO OFFERS AVAILABLE &nbsp; &nbsp;

</marquee>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="searchcontainer d-flex align-items-center justify-content-between ">
              <input
                  type="text"
                  placeholder="Search For Menu..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              <i class="fa-solid fa-magnifying-glass"></i>

              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="downloaddiv text-end">
              <button className='downloadbutton'onClick={onButtonClick}>
                    Download Our Menu
                </button>
              </div>
            </Col>


            {displayPage.map((item) => (
              <Col lg="3" md="5" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName=" changepagebuttons "
              />
            </div>
          </Row>
        </Container>
      </section>
      </section>


  );
};

export default Menu;
