import { AiFillCalculator, AiOutlineTwitter, AiFillFacebook, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <AiFillCalculator size={32} />
        <p>Copyright © 2022 - All right reserved</p>
      </div> 
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a><AiOutlineTwitter size={24} /></a>
        <a><AiFillYoutube size={24} /></a> 
        <a><AiFillFacebook size={24} /></a>
      </div>
    </footer>
  );
};

export default Footer;