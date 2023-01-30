import Desktop from './Desktop'
import Mobile from './Mobile'

function Home() {
    return (
        <div>
            <div className='hidden md:block'>
                <Desktop />
            </div>
            <div className='block md:hidden'>
                <Mobile />
            </div>
        </div>
    );
}

export default Home;
