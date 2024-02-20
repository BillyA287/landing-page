'use client'
import Footer from "./(components)/Footer/Footer";
import NavigationBar from "./(components)/Navigation/NavigationBar";
import PriceCard from "./(components)/PriceCard/PriceCard";
import ToggleBtn from "./(components)/ToggleButton/ToggleBtn";
export default function Home() {
  return (
    <>
    <div className="main-container p-2"> 
    <div className="content-spacing mx-auto max-w-[1110px]">
      <NavigationBar/>
      <div className="intro-container md:flex justify-center md:mt-12">
      <div className="intro-header md:flex flex-col md:w-[602px] items-center"><h1 className="sm:text-xl md:text-xl lg:text-[35px]"><strong>Pricing & Plans</strong></h1>
         <p className="sm:text-sm md:text-base font-light sm:[61%] lg:mt-2">With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes</p>
      </div>  
      </div>
      
      <ToggleBtn/>
      <div className="price-card-container p-2">
       <PriceCard/>  
      </div>
        
    </div>

      <div className="footer-container">
     <Footer/>   
      </div>
      </div>
    </>
  );
}
