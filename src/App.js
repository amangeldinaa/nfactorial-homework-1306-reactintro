import './App.css';
import './css/custom.css';
import { useMediaQuery } from "react-responsive";
import imgOne from "./img/photo1.jpg";
import imgTwo from "./img/photo2.jpg";
import imgThree from "./img/photo3.jpg";
import imgFour from "./img/photo4.jpg";
import imgFive from "./img/photo5.jpg";

function App() {
	const isDesktop = useMediaQuery({
        query: "(min-width: 992px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width: 480px)"
    });
	const text1 = <h3 style={{ color: 'white' }}>HEY</h3>;
	const text2 = <h3 style={{ color: 'white' }}>LET'S</h3>;
	const text3 = <h3 style={{ color: 'white' }}>GIVE</h3>;
	const text4 = <h3 style={{ color: 'white' }}>ALL</h3>;
	const text5 = <h3 style={{ color: 'white' }}>YOU CAN</h3>;
 	
	return (
     <div className="wrapper">
		<div className={isDesktop ? "block" : "blockm"}>
		  	<article
      			className="article"
      				style={{ backgroundImage: `url(${imgOne})` }}
    		>{text1}
    	  	</article>
		</div>

		<div className={isDesktop ? "block" : "blockm"}>
			<article
      			className="article"
      				style={{ backgroundImage: `url(${imgTwo})` }}
    		>{text2}
    	 	</article>
		</div>

		<div className={isDesktop ? "block" : "blockm"}>
			<article
      			className="article"
      			style={{ backgroundImage: `url(${imgThree})` }}
    			>{text3}
    	  	</article>
		</div>

		<div className={isDesktop ? "block" : "blockm"}>
			<article
      			className="article"
      				style={{ backgroundImage: `url(${imgFour})` }}
    		>{text4}
    	  	</article>
		</div>

		<div className={isDesktop ? "block" : "blockm"}>
			<article
      			className="article"
      				style={{ backgroundImage: `url(${imgFive})` }}
    		>{text5}
    	  	</article>
		</div>		
	</div>
  );
}


export default App;
