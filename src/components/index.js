import Header from './header';
import Home from './home';
import About from './about';
import Resume from './resume';
import Service from './service';
import Skills from './skills';
function Index() {
    return (
        <>
            <div className="container">
            <Header />
            <Home />
            <About />
            <Resume />
            <Service />
            <Skills />
            </div>
        </>
    );
}
export default Index;