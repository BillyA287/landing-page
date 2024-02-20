'use client'
import Footer from "./(components)/Footer/Footer";
import NavigationBar from "./(components)/Navigation/NavigationBar";

export default function Home() {
  return (
   
    <div className="main-container p-2"> 
    <div className="content-spacing mx-auto max-w-[1110px]">
      <NavigationBar/>
     

      <div className="footer-container">
     <Footer/>   
      </div>
      </div>
  </div>
  );
}
