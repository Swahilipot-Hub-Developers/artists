import { IoGridOutline, IoHomeOutline } from "react-icons/io5";
import { BsSpeedometer2 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineBarChart } from "react-icons/ai";

export default [
    {
        to: '/profile',
        name: 'Home',
        Icon: IoHomeOutline
    },
    {
        to: '',
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
        to: '/statistics',
        name: 'Contact',
        Icon: AiOutlineBarChart
    }
];