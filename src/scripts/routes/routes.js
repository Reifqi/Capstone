import Detail from '../view/pages/detail';
import Home from '../view/pages/home';
import Cat from '../view/pages/cat';
import Dog from '../view/pages/dog';
import About from '../view/pages/about';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/dog': Dog,
  '/cat': Cat,
  '/detail/:id': Detail,
  '/about': About,
};

export default routes;
