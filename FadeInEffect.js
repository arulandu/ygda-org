import React from 'react';
import ReactDOM from 'react-dom';

function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
    }

    function RenderFadeInSection(){

    }

    const rootElement = document.getElementById('.fade-in-section');
    ReactDOM.render(<App />, rootElement);

    /*
    I don't know whats happening here either
    */