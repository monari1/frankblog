import logo from './logo.jpeg';

const Header = ({subtitle, title}) => (
    <header className='row'>
        <div className='col-md-5'>
            <img src={logo} className='logo' alt="logo" />
        </div>
        <div className='col-md-7 mt-5 subtitle'>
            <p>            {title}
</p>

            {subtitle}
        </div>
    </header>
);

export default Header;

