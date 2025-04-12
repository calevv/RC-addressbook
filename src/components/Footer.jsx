import './Footer.css';

const Footer = ({ middleChild, leftChild, rightChild }) => {
    return (
        <footer className="Footer">
            <div className="Footer_left">{leftChild}</div>
            <div className="Footer_center">{middleChild}</div>
            <div className="Footer_right">{rightChild}</div>
        </footer>
    );
};
export default Footer;
