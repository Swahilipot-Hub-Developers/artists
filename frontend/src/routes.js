import { IoGridOutline, IoHomeOutline } from "react-icons/io5";
import { BsSpeedometer2 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineBarChart } from "react-icons/ai";

export default [
    {
        to: '/dashboard/homepage',
        name: 'Home',
        Icon: IoHomeOutline
    },
    {
        to: '/CRUD/about',
        name: 'About',
        Icon: BiUserCircle
    },
    {
        to: '/CRUD/portfolio',
        name: 'Portfolio',
        Icon: BsSpeedometer2
    },
    {
        to: '/CRUD/skills',
        name: 'Skills and Talents',
        Icon: IoGridOutline
    },
    {
        to: '/CRUD/contact',
        name: 'Contact',
        Icon: AiOutlineBarChart
    }
];