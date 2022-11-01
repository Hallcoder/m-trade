import * as React from 'react';
interface Props{
    currentSlide:string;
    images:string[]
}
const SlideShow: React.FC<Props>  = ({currentSlide}) => {
    return (  
        <div className="h-full peer">
          { <img src={ currentSlide} alt="well it's it" className="Transition h-full object-fill w-full" /> }
        </div>
    );
}

export default SlideShow;