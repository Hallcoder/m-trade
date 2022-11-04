import * as React from "react";
import fb from '../assets/fb.png';
import whatsapp from '../assets/whatsapp.png';
import ig from '../assets/instagram.png';
function Footer() {
  return (
    <div className="bg-[#ECECEC] flex justify-around min-h-fit h-[50vh]">
      <article className="w-5/12 m-auto flex flex-col justify-around p-2">
        <span className="w-10/12 m-2">
          <h1 className="font-bold text-xl m-2">FAQs</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            molestias et quasi modi fuga voluptas recusandae nisi accusantium
            porro illum!
          </p>
        </span>
        <span className="w-10/12 m-2">
          <h1 className="font-bold text-xl m-2">Browse by category</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            molestias et quasi modi fuga voluptas recusandae nisi accusantium
            porro illum!
          </p>
        </span>
        <span className="w-10/12 m-2">
          <h1 className="font-semibold text-xl m-2">About Cruz</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            molestias et quasi modi fuga voluptas recusandae nisi accusantium
            porro illum!
          </p>
        </span>
       
      </article>
      <article className="w-5/12 flex flex-col justify-around">
        <span>
          <h1 className="font-bold text-lg">Stay connected</h1>
          <div className="flex">
            <img className='h-10 w-10 m-2' src={fb} alt="" />
            <img className='h-10 w-10 m-2' src={whatsapp} alt="" />
            <img className='h-10 w-10 m-2' src={ig} alt="" />
          </div>
        </span>
        <span  className="m-2 text-gray-400">
          <h1 className="font-bold text-xl text-black">Contact US</h1>
          <ul>
            <li><strong className="text-black">Address</strong>:&nbsp; Kigali Rwanda</li>
            <li><strong className="text-black">Phone</strong> :&nbsp;<ol>
                <li>0752545645</li>
                <li>0784512225</li>
                <li>0745215822</li>
                </ol>
            </li>
            <li><strong className="text-black">Email:&nbsp;</strong>cruz@gmail.com</li>
          </ul>
        </span>
      </article>
    </div>
  );
}

export default Footer;
