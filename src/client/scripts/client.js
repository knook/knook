import Navbar from '../../app/header';
import Sidebar from '../../app/leftPanel';

var headerElement = document.getElementById('header');
var sidebarElement = document.getElementById('sidebar');

var header;
var sidebar;

header = new Navbar();
sidebar = new Sidebar();

header.renderToDOM(headerElement);
sidebar.renderToDOM(sidebarElement);

