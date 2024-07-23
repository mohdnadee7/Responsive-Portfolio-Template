import Header from './header';
import Home from './home';
import About from './about';
import Resume from './resume';
import Service from './service';
import Skills from './skills';
import Project from './project';
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
            <Project/>
            </div>
        </>
    );
}
export default Index;